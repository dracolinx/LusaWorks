import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SERVICE_PAGES } from '../../data/service-pages';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll';
import { ContactSectionComponent } from '../contact-section/contact-section';
import { HeroSectionComponent } from '../hero-section/hero-section';
import { LegalFooterComponent } from '../legal-footer/legal-footer';
import { LegalPolicySectionComponent } from '../legal-policy-section/legal-policy-section';
import { MethodSectionComponent } from '../method-section/method-section';
import { ProximitySectionComponent } from '../proximity-section/proximity-section';
import { SpecializationSectionComponent } from '../specialization-section/specialization-section';
import { TeamExperienceSectionComponent } from '../team-experience-section/team-experience-section';
import { ContentService } from '../../services/content';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly languageService = inject(LanguageService);
  private readonly contentService = inject(ContentService);
  protected readonly language = this.languageService.currentLanguage;
  protected readonly copy = computed(() => this.contentService.getCopy(this.language()));
  protected readonly servicePages = SERVICE_PAGES;
}
