import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll';
import { LanguageCode, NavLink } from './models/localized-copy';
import { ContactSectionComponent } from './sections/contact-section/contact-section';
import { HeroSectionComponent } from './sections/hero-section/hero-section';
import { LegalFooterComponent } from './sections/legal-footer/legal-footer';
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
    TeamExperienceSectionComponent,
    ProximitySectionComponent,
    ContactSectionComponent,
    LegalFooterComponent,
    RevealOnScrollDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly languageService = inject(LanguageService);
  private readonly contentService = inject(ContentService);

  protected readonly language = this.languageService.currentLanguage;
  protected readonly copy = computed(() => this.contentService.getCopy(this.language()));
  protected readonly mobileMenuOpen = signal(false);

  constructor() {
    effect(() => {
      const localizedCopy = this.copy();
      this.document.documentElement.lang = this.language();
      this.document.title = localizedCopy.pageTitle;
      this.updateMetaDescription(localizedCopy.metaDescription);
    });
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
}
