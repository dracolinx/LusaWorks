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
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateHeaderOnScroll();
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

  private readonly handlePointerModeChange = (event: MediaQueryListEvent): void => {
    this.applyPointerMode(event.matches);
  };

  private applyPointerMode(enabled: boolean): void {
    this.customCursorEnabled.set(enabled);
    this.document.body.classList.toggle('cursor-custom-enabled', enabled);
  }
}
