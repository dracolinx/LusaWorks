export type LanguageCode = 'es' | 'en';

export interface NavLink {
  id: string;
  label: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface HeroSectionCopy {
  kicker: string;
  title: string;
  overviewTitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: HeroMetric[];
}

export interface SpecializationDomain {
  title: string;
  overview: string;
  technicalFocus: string;
}

export interface SpecializationGuaranteeItem {
  title: string;
  text: string;
}

export interface SpecializationGuaranteesCopy {
  heading: string;
  subheading: string;
  description: string;
  items: SpecializationGuaranteeItem[];
  closingNote: string;
}

export interface SpecializationOpportunityCopy {
  title: string;
  intro: string;
  points: string[];
  closing: string;
}

export interface SpecializationSectionCopy {
  eyebrow: string;
  title: string;
  intro: string;
  domains: SpecializationDomain[];
  guarantees: SpecializationGuaranteesCopy;
  opportunity: SpecializationOpportunityCopy;
}

export interface TeamTimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface TeamExperienceSectionCopy {
  eyebrow: string;
  title: string;
  intro: string;
  pillarsHeading: string;
  timelineHeading: string;
  pillars: string[];
  timeline: TeamTimelineItem[];
}

export interface ProximitySectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  pillars: string[];
  mapTitle: string;
  mapCaption: string;
}

export interface ContactSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  responseNote: string;
}

export interface MethodStep {
  title: string;
  description: string;
}

export interface MethodSectionCopy {
  eyebrow: string;
  title: string;
  intro: string;
  steps: MethodStep[];
  outcome: string;
}

export interface LegalRecord {
  label: string;
  value: string;
}

export interface LegalFooterCopy {
  heading: string;
  records: LegalRecord[];
  supportMessage: string;
  rights: string;
}

export interface LegalPolicyBlock {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPolicySectionCopy {
  eyebrow: string;
  title: string;
  intro: string;
  metaUrlNote: string;
  updatedLabel: string;
  updatedValue: string;
  blocks: LegalPolicyBlock[];
}

export interface LocalizedCopy {
  pageTitle: string;
  metaDescription: string;
  languageLabel: string;
  nav: NavLink[];
  mobileMenuLabel: string;
  closeMenuLabel: string;
  mobileMenuText: string;
  closeMenuText: string;
  hero: HeroSectionCopy;
  specialization: SpecializationSectionCopy;
  method: MethodSectionCopy;
  team: TeamExperienceSectionCopy;
  proximity: ProximitySectionCopy;
  contact: ContactSectionCopy;
  legalPolicy: LegalPolicySectionCopy;
  legal: LegalFooterCopy;
  logoAlt: string;
  heroImageAlt: string;
}
