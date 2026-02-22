import { Injectable } from '@angular/core';
import { LanguageCode, LocalizedCopy } from '../models/localized-copy';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly mapEmbedUrl = 'https://www.google.com/maps?q=Ja%C3%A9n,+Espa%C3%B1a&output=embed';

  private readonly copy: Record<LanguageCode, LocalizedCopy> = {
    es: {
      pageTitle: 'LusaWorks | Soluciones software a medida para empresas',
      metaDescription:
        'LusaWorks desarrolla soluciones software adaptadas a cada empresa: automatización, plataformas de gestión y atención conversacional con enfoque de proximidad desde Jaén.',
      languageLabel: 'Idioma',
      nav: [
        { id: 'hero', label: 'Inicio' },
        { id: 'specialization', label: 'Especialización' },
        { id: 'team', label: 'Equipo' },
        { id: 'proximity', label: 'Jaén y proximidad' },
        { id: 'contact', label: 'Contacto' },
        { id: 'legal', label: 'Datos legales' },
      ],
      mobileMenuLabel: 'Abrir menú',
      closeMenuLabel: 'Cerrar menú',
      mobileMenuText: 'MENU',
      closeMenuText: 'CERRAR',
      hero: {
        kicker: 'LusaWorks · Ingeniería de software para empresas',
        title: 'Soluciones software a medida para procesos reales de negocio',
        description:
          'Diseñamos, desarrollamos y mantenemos soluciones digitales personalizadas que conectan operación, datos y atención al cliente. Combinamos rigor técnico, visión práctica y soporte continuo para que la tecnología resuelva necesidades concretas de cada empresa.',
        primaryCta: 'Contactar por email',
        secondaryCta: 'Conocer especialización',
        metrics: [
          { value: '100%', label: 'Enfoque a medida' },
          { value: 'ES / EN', label: 'Atención bilingüe' },
          { value: 'Jaén', label: 'Base operativa' },
        ],
      },
      specialization: {
        eyebrow: 'Especialización',
        title: 'Tecnología aplicada a resultados empresariales',
        intro:
          'LusaWorks se centra en construir ecosistemas de software robustos y evolutivos para pymes y equipos que necesitan fiabilidad, trazabilidad y capacidad de crecimiento.',
        cards: [
          {
            title: 'Automatización inteligente de procesos',
            description:
              'Digitalizamos flujos operativos para reducir tareas manuales, minimizar errores y acelerar tiempos de respuesta en áreas clave del negocio.',
            highlights: ['Orquestación de tareas repetitivas', 'Integración entre sistemas', 'Métricas y control operativo'],
          },
          {
            title: 'Gestión de citas con chatbot humanizado',
            description:
              'Implementamos sistemas conversacionales para WhatsApp y Telegram capaces de atender, organizar y escalar la gestión de citas de forma natural y profesional.',
            highlights: ['Interacción contextual con clientes', 'Gestión de disponibilidad', 'Escalado a atención humana cuando procede'],
          },
          {
            title: 'Plataformas de gestión específicas por negocio',
            description:
              'Creamos aplicaciones web adaptadas a la realidad de cada empresa, orientadas al control diario, la toma de decisiones y la continuidad del servicio.',
            highlights: ['Arquitectura modular', 'Seguridad y trazabilidad', 'Soporte y mejora continua'],
          },
        ],
      },
      team: {
        eyebrow: 'Experiencia del equipo',
        title: 'Perfil técnico multidisciplinar y orientado a impacto',
        intro:
          'Nuestro equipo integra experiencia en inteligencia artificial aplicada, analítica de datos, ciberseguridad y automatización documental. El enfoque combina precisión técnica, diseño de soluciones operativas y acompañamiento en explotación real.',
        pillarsHeading: 'Capacidades clave',
        timelineHeading: 'Trayectoria técnica',
        pillars: [
          'IA aplicada a procesamiento de información y optimización de flujos',
          'Analítica avanzada, normalización de datos y generación de informes robustos',
          'Diseño de herramientas de gestión con criterios de seguridad y trazabilidad',
          'Capacidad de coordinación técnica en entornos exigentes y multidisciplinares',
        ],
        timeline: [
          {
            period: 'Base técnica',
            title: 'Ingeniería de seguridad y telecomunicaciones',
            description:
              'Fundamento en ingeniería, redes y explotación de información para construir soluciones sólidas desde la arquitectura.',
          },
          {
            period: 'Especialización',
            title: 'Ciberseguridad, privacidad y gestión operativa',
            description:
              'Aplicación de criterios de seguridad, gobernanza de datos y control de procesos en sistemas orientados a negocio.',
          },
          {
            period: 'Evolución continua',
            title: 'IA y automatización con visión práctica',
            description:
              'Desarrollo de herramientas que convierten datos heterogéneos en decisiones accionables y documentación técnica consistente.',
          },
        ],
      },
      proximity: {
        eyebrow: 'Proximidad + telemática',
        title: 'Empresa radicada en Jaén con vocación de atención cercana',
        description:
          'Trabajamos desde Jaén con una filosofía de proximidad: acompañamiento directo, comprensión del contexto local y respuesta ágil. A la vez, aprovechamos herramientas telemáticas para mantener una colaboración continua y eficiente con cada cliente.',
        pillars: [
          'Relación directa y lenguaje claro en todas las fases del proyecto',
          'Seguimiento cercano con soporte técnico estable',
          'Capacidad de atención remota para acelerar resolución y evolución',
        ],
        mapTitle: 'Jaén, centro de operaciones',
        mapCaption: 'Cobertura local y coordinación telemática para proyectos nacionales.',
        mapEmbedUrl: this.mapEmbedUrl,
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Hablemos de la solución que necesita tu empresa',
        description:
          'Si buscas una solución software adaptada a tu realidad operativa, podemos ayudarte a diseñar, implementar y mantener una plataforma alineada con tus objetivos.',
        ctaLabel: 'Escribir a rpas_app@icloud.com',
        responseNote: 'Atención técnica y funcional con enfoque de largo recorrido.',
      },
      legal: {
        heading: 'Datos legales y corporativos',
        records: [
          { label: 'Nombre comercial', value: 'LusaWorks' },
          { label: 'Razón social', value: 'PUNTO DE COMERCIO SL' },
          { label: 'CIF', value: 'B93372324' },
          { label: 'Email', value: 'rpas_app@icloud.com' },
          { label: 'Ubicación', value: 'Jaén, España' },
        ],
        supportMessage: 'Especialización en soluciones software adaptadas y soporte técnico continuo.',
        rights: '© LusaWorks. Todos los derechos reservados.',
      },
      logoAlt: 'Logo corporativo de LusaWorks',
      heroImageAlt: 'Identidad visual de LusaWorks sobre entorno tecnológico',
    },
    en: {
      pageTitle: 'LusaWorks | Tailored software solutions for businesses',
      metaDescription:
        'LusaWorks builds bespoke software for companies: process automation, business management platforms, and conversational appointment flows with a proximity-first approach from Jaén.',
      languageLabel: 'Language',
      nav: [
        { id: 'hero', label: 'Home' },
        { id: 'specialization', label: 'Specialization' },
        { id: 'team', label: 'Team' },
        { id: 'proximity', label: 'Jaén & proximity' },
        { id: 'contact', label: 'Contact' },
        { id: 'legal', label: 'Legal details' },
      ],
      mobileMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      mobileMenuText: 'MENU',
      closeMenuText: 'CLOSE',
      hero: {
        kicker: 'LusaWorks · Business software engineering',
        title: 'Tailored software solutions for real business operations',
        description:
          'We design, build, and maintain custom digital solutions that connect operations, data, and customer interactions. Our approach combines technical rigor, practical vision, and ongoing support to solve each client’s specific needs.',
        primaryCta: 'Contact by email',
        secondaryCta: 'Explore specialization',
        metrics: [
          { value: '100%', label: 'Tailored approach' },
          { value: 'ES / EN', label: 'Bilingual support' },
          { value: 'Jaén', label: 'Operational base' },
        ],
      },
      specialization: {
        eyebrow: 'Specialization',
        title: 'Technology designed for business outcomes',
        intro:
          'LusaWorks focuses on robust, evolvable software ecosystems for SMEs and teams that need reliability, traceability, and growth capacity.',
        cards: [
          {
            title: 'Intelligent process automation',
            description:
              'We digitize operational workflows to reduce manual effort, lower error rates, and improve turnaround times in critical areas.',
            highlights: ['Workflow orchestration', 'System integration', 'Operational monitoring'],
          },
          {
            title: 'Humanized chatbot appointment flows',
            description:
              'We implement conversational systems for WhatsApp and Telegram to manage appointments naturally, efficiently, and at scale.',
            highlights: ['Context-aware customer interaction', 'Availability management', 'Human handoff when needed'],
          },
          {
            title: 'Business-specific management platforms',
            description:
              'We build web platforms aligned with each company’s operational reality, supporting daily execution and decision-making.',
            highlights: ['Modular architecture', 'Security and traceability', 'Continuous support and evolution'],
          },
        ],
      },
      team: {
        eyebrow: 'Team experience',
        title: 'Multidisciplinary technical profile focused on impact',
        intro:
          'Our team combines expertise in applied AI, data analytics, cybersecurity, and workflow automation. We balance technical precision with operational usability and long-term support.',
        pillarsHeading: 'Core capabilities',
        timelineHeading: 'Technical trajectory',
        pillars: [
          'Applied AI for information processing and workflow optimization',
          'Advanced analytics, data normalization, and robust reporting',
          'Management tooling with security and traceability principles',
          'Strong technical coordination in demanding multi-profile environments',
        ],
        timeline: [
          {
            period: 'Technical foundation',
            title: 'Security engineering and telecom background',
            description:
              'Engineering-led foundations in architecture, networks, and information exploitation for resilient digital solutions.',
          },
          {
            period: 'Specialization',
            title: 'Cybersecurity, privacy, and operational management',
            description:
              'Data governance and security criteria applied to business-oriented systems and critical processes.',
          },
          {
            period: 'Continuous evolution',
            title: 'Applied AI and practical automation',
            description:
              'Tooling that transforms heterogeneous data into actionable outputs and consistent technical deliverables.',
          },
        ],
      },
      proximity: {
        eyebrow: 'Proximity + remote agility',
        title: 'Company based in Jaén with a close-service mindset',
        description:
          'We operate from Jaén with a proximity-first philosophy: direct collaboration, local context awareness, and agile delivery. In parallel, we use current telematic tools to provide fast and structured remote support.',
        pillars: [
          'Direct communication and clear alignment in every phase',
          'Close follow-up backed by stable technical support',
          'Efficient remote assistance for faster iteration and resolution',
        ],
        mapTitle: 'Jaén, operational hub',
        mapCaption: 'Local proximity and remote collaboration for nationwide projects.',
        mapEmbedUrl: this.mapEmbedUrl,
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Let us design the right solution for your business',
        description:
          'If your company needs software aligned with real operational constraints, we can help you design, implement, and sustain it.',
        ctaLabel: 'Write to rpas_app@icloud.com',
        responseNote: 'Technical and functional support with a long-term perspective.',
      },
      legal: {
        heading: 'Legal and corporate details',
        records: [
          { label: 'Trade name', value: 'LusaWorks' },
          { label: 'Corporate name', value: 'PUNTO DE COMERCIO SL' },
          { label: 'Tax ID (CIF)', value: 'B93372324' },
          { label: 'Email', value: 'rpas_app@icloud.com' },
          { label: 'Location', value: 'Jaén, Spain' },
        ],
        supportMessage: 'Specialized in tailored software solutions with continuous technical support.',
        rights: '© LusaWorks. All rights reserved.',
      },
      logoAlt: 'LusaWorks corporate logo',
      heroImageAlt: 'LusaWorks visual identity on a technology background',
    },
  };

  getCopy(language: LanguageCode): LocalizedCopy {
    return this.copy[language];
  }
}
