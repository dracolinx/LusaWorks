import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll';
import { LanguageCode, NavLink } from './models/localized-copy';
import { ContactSectionComponent } from './sections/contact-section/contact-section';
import { HeroSectionComponent } from './sections/hero-section/hero-section';
import { LegalFooterComponent } from './sections/legal-footer/legal-footer';
import { LegalPolicySectionComponent } from './sections/legal-policy-section/legal-policy-section';
import { MethodSectionComponent } from './sections/method-section/method-section';
import { ProximitySectionComponent } from './sections/proximity-section/proximity-section';
import { SpecializationSectionComponent } from './sections/specialization-section/specialization-section';
import { TeamExperienceSectionComponent } from './sections/team-experience-section/team-experience-section';
import { ContentService } from './services/content';
import { LanguageService } from './services/language';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeroSectionComponent,
    SpecializationSectionComponent,
    MethodSectionComponent,
    TeamExperienceSectionComponent,
    ProximitySectionComponent,
    ContactSectionComponent,
    LegalPolicySectionComponent,
    LegalFooterComponent,
    RevealOnScrollDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly languageService = inject(LanguageService);
  private readonly contentService = inject(ContentService);
  private pointerMedia?: MediaQueryList;
  private sectionSnapLock = false;
  private snapReleaseTimer?: number;

  protected readonly language = this.languageService.currentLanguage;
  protected readonly copy = computed(() => this.contentService.getCopy(this.language()));
  protected readonly headerCtaLabel = computed(() =>
    this.language() === 'es' ? 'Hablemos' : "Let's Talk",
  );
  protected readonly headerScrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);
  protected readonly customCursorEnabled = signal(false);
  private readonly cursorX = signal(-100);
  private readonly cursorY = signal(-100);
  protected readonly cursorTransform = computed(() => {
    const x = this.cursorX() - 16;
    const y = this.cursorY() - 16;
    return `translate3d(${x}px, ${y}px, 0)`;
  });

  constructor() {
    effect(() => {
      const localizedCopy = this.copy();
      this.document.documentElement.lang = this.language();
      this.document.title = localizedCopy.pageTitle;
      this.updateMetaDescription(localizedCopy.metaDescription);
    });
  }

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    this.updateHeaderOnScroll();
    this.pointerMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    this.applyPointerMode(this.pointerMedia.matches);
    this.pointerMedia.addEventListener('change', this.handlePointerModeChange);
  }

  ngOnDestroy(): void {
    this.pointerMedia?.removeEventListener('change', this.handlePointerModeChange);
    if (typeof window !== 'undefined' && this.snapReleaseTimer) {
      window.clearTimeout(this.snapReleaseTimer);
    }
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateHeaderOnScroll();
  }

  @HostListener('window:wheel', ['$event'])
  protected onWindowWheel(event: WheelEvent): void {
    this.handleSectionSnap(event);
  }

  @HostListener('document:mousemove', ['$event'])
  protected onMouseMove(event: MouseEvent): void {
    if (!this.customCursorEnabled()) return;
    this.cursorX.set(event.clientX);
    this.cursorY.set(event.clientY);
  }

  protected setLanguage(language: LanguageCode): void {
    this.languageService.setLanguage(language);
    this.mobileMenuOpen.set(false);
  }

  protected isLanguageActive(language: LanguageCode): boolean {
    return this.language() === language;
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((state) => !state);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected trackNavLink(_: number, link: NavLink): string {
    return link.id;
  }

  private updateMetaDescription(description: string): void {
    const selector = 'meta[name="description"]';
    let tag = this.document.querySelector(selector);

    if (!tag) {
      tag = this.document.createElement('meta');
      tag.setAttribute('name', 'description');
      this.document.head.appendChild(tag);
    }

    tag.setAttribute('content', description);
  }

  private updateHeaderOnScroll(): void {
    if (typeof window === 'undefined') return;
    this.headerScrolled.set(window.scrollY > 22);
  }

  private handleSectionSnap(event: WheelEvent): void {
    if (typeof window === 'undefined') return;
    if (event.defaultPrevented) return;
    if (Math.abs(event.deltaY) < 8) return;
    if (event.ctrlKey) return;
    if (this.mobileMenuOpen()) return;
    if (this.shouldIgnoreSnapTarget(event.target as HTMLElement | null)) return;

    const sections = this.getSnapSections();
    if (sections.length < 2) return;

    if (this.sectionSnapLock) {
      event.preventDefault();
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;
    const headerOffset = this.getHeaderOffset();
    const viewportTop = window.scrollY + headerOffset;
    const viewportBottom = viewportTop + window.innerHeight;
    const currentIndex = this.findCurrentSectionIndex(sections, viewportTop + window.innerHeight * 0.35);
    const current = sections[currentIndex];
    const currentTop = current.offsetTop;
    const currentBottom = currentTop + current.offsetHeight;
    const boundaryThreshold = 64;

    if (direction > 0) {
      if (viewportBottom < currentBottom - boundaryThreshold) return;
      const next = sections[currentIndex + 1];
      if (!next) return;
      event.preventDefault();
      this.snapToSection(next, headerOffset);
      return;
    }

    if (viewportTop > currentTop + boundaryThreshold) return;
    const previous = sections[currentIndex - 1];
    if (!previous) return;
    event.preventDefault();
    this.snapToSection(previous, headerOffset);
  }

  private shouldIgnoreSnapTarget(target: HTMLElement | null): boolean {
    if (!target || typeof window === 'undefined') return false;
    if (target.closest('.domain-modal, .domain-modal-backdrop, .mobile-nav, [role="dialog"]')) {
      return true;
    }

    let node: HTMLElement | null = target;
    while (node && node !== this.document.body) {
      const { overflowY } = window.getComputedStyle(node);
      const isScrollable = (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight;
      if (isScrollable) return true;
      node = node.parentElement;
    }

    return false;
  }

  private getSnapSections(): HTMLElement[] {
    return Array.from(this.document.querySelectorAll('.site-main .section')) as HTMLElement[];
  }

  private findCurrentSectionIndex(sections: HTMLElement[], pivot: number): number {
    let index = 0;
    for (let i = 0; i < sections.length; i += 1) {
      if (sections[i].offsetTop <= pivot) {
        index = i;
      } else {
        break;
      }
    }
    return index;
  }

  private snapToSection(section: HTMLElement, headerOffset: number): void {
    if (typeof window === 'undefined') return;

    const targetY = Math.max(section.offsetTop - headerOffset + 14, 0);
    this.sectionSnapLock = true;
    window.scrollTo({ top: targetY, behavior: 'smooth' });

    if (this.snapReleaseTimer) {
      window.clearTimeout(this.snapReleaseTimer);
    }
    this.snapReleaseTimer = window.setTimeout(() => {
      this.sectionSnapLock = false;
      this.snapReleaseTimer = undefined;
    }, 760);
  }

  private getHeaderOffset(): number {
    const header = this.document.querySelector('.site-header') as HTMLElement | null;
    return header ? header.offsetHeight + 8 : 92;
  }

  private readonly handlePointerModeChange = (event: MediaQueryListEvent): void => {
    this.applyPointerMode(event.matches);
  };

  private applyPointerMode(enabled: boolean): void {
    this.customCursorEnabled.set(enabled);
    this.document.body.classList.toggle('cursor-custom-enabled', enabled);
  }
}
