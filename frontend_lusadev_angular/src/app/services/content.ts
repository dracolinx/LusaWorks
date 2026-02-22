import { Injectable } from '@angular/core';
import { LanguageCode, LocalizedCopy } from '../models/localized-copy';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly copy: Record<LanguageCode, LocalizedCopy> = {
    es: {
      pageTitle: 'LusaWorks | Soluciones software a medida para empresas',
      metaDescription:
        'LusaWorks desarrolla soluciones software adaptadas a cada empresa: automatización, plataformas de gestión y atención conversacional con enfoque de proximidad desde Jaén.',
      languageLabel: 'Idioma',
      nav: [
        { id: 'hero', label: 'Inicio' },
        { id: 'specialization', label: 'Especialización' },
        { id: 'method', label: 'Método' },
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
          'Se construyen ecosistemas de software preparados para uso diario, con foco en fiabilidad, trazabilidad y crecimiento. El resultado esperado es que la empresa dependa menos de trabajo manual, reduzca fricción interna y tenga claridad en decisiones y seguimiento.',
        domains: [
          {
            title: 'Automatización e integración de procesos',
            overview:
              'Se digitalizan flujos operativos para que cada tarea tenga un estado, una validación y un responsable, evitando que la información se disperse en correos, hojas o mensajes. Cuando existen sistemas previos, se conectan para evitar duplicidades y se normaliza la información para que el dato sea consistente.',
            technicalFocus:
              'A nivel técnico, la automatización se apoya en reglas de negocio, integraciones por API, validaciones consistentes y un registro de eventos que permite reconstruir qué se hizo, cuándo y por quién, de forma auditable.',
          },
          {
            title: 'Gestión de citas con WhatsApp y mensajería profesional',
            overview:
              'Se implementan sistemas conversacionales capaces de atender solicitudes, organizar disponibilidad y confirmar o reprogramar citas. Cuando la conversación exige intervención humana, se deriva con contexto, evitando pérdidas de información y evitando saturación del equipo.',
            technicalFocus:
              'A nivel técnico, el sistema incorpora control de disponibilidad, confirmaciones y recordatorios, gestión de cambios, registro de conversación y panel de control, con posibilidad de integración con calendarios y con el software de gestión que ya exista.',
          },
          {
            title: 'Plataformas de gestión específicas por negocio',
            overview:
              'Se crean aplicaciones web orientadas al trabajo diario, con paneles por rol, búsquedas y filtros, exportación de información y control de permisos. El objetivo es que la operativa se apoye en una herramienta propia que refleje la realidad del negocio, no una plantilla genérica.',
            technicalFocus:
              'A nivel técnico, se diseña una arquitectura modular, se define un modelo de datos coherente y se incorporan medidas de seguridad, auditoría, copias de seguridad y mantenimiento evolutivo.',
          },
        ],
        guarantees: {
          heading: 'Garantías técnicas que reducen riesgo',
          subheading: 'Lo que marca la diferencia cuando el sistema ya está en producción',
          description:
            'Un sistema útil no es el que funciona en una demo, sino el que se mantiene estable cuando cambian los procesos, crece el volumen y aumenta la exigencia operativa. Por eso el trabajo se orienta a criterios verificables.',
          riskControls:
            'En seguridad, se aplican permisos por usuario y por rol, protección de credenciales, cifrado de comunicaciones y control de acceso. En trazabilidad, se registra la actividad relevante para que exista historial de cambios y se pueda reconstruir la secuencia de acciones. En continuidad, se contemplan copias de seguridad, recuperación ante incidentes, monitorización básica y mantenimiento.',
          infrastructureNote:
            'Cuando el cliente lo requiere, se prioriza un enfoque de procesamiento local o en infraestructura controlada por el propio cliente, reduciendo exposición de datos y manteniendo gobierno del dato.',
        },
      },
      method: {
        eyebrow: 'Método de trabajo',
        title: 'De problema operativo a plan técnico ejecutable',
        intro:
          'Primero se analiza el proceso real, con especial atención a puntos de fricción, duplicidades, errores habituales y dependencias de personas clave. Después se diseña una solución por fases con entregables verificables. Por último, se despliega, se forma al equipo y se mantiene el sistema para que siga alineado con la evolución del negocio.',
        steps: [
          {
            title: 'Análisis del proceso real',
            description:
              'Se identifica cómo trabaja hoy el negocio, dónde se pierde tiempo y qué riesgos operativos se repiten para priorizar mejoras de alto impacto.',
          },
          {
            title: 'Diseño por fases y entregables verificables',
            description:
              'Se define una hoja de ruta técnica con hitos medibles para implementar con control, validar avances y ajustar antes de escalar.',
          },
          {
            title: 'Despliegue, formación y mantenimiento',
            description:
              'Se implanta la solución en operación real, se forma al equipo y se mantiene la plataforma para acompañar cambios del negocio.',
          },
        ],
        outcome:
          'El resultado es una implantación con control, sin saltos al vacío, y con capacidad de ajuste antes de escalar.',
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
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Hablemos de la solución que necesita tu empresa',
        description:
          'Si buscas una solución software adaptada a tu realidad operativa, podemos ayudarte a diseñar, implementar y mantener una plataforma alineada con tus objetivos.',
        ctaLabel: 'Escribir a xxxx@icloud.com',
        responseNote: 'Atención técnica y funcional con enfoque de largo recorrido.',
      },
      legal: {
        heading: 'Datos legales y corporativos',
        records: [
          { label: 'Nombre comercial', value: 'LusaWorks' },
          { label: 'Razón social', value: 'PUNTO DE COMERCIO SL' },
          { label: 'CIF', value: 'B93372324' },
          { label: 'Email', value: 'xxxx@icloud.com' },
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
        { id: 'method', label: 'Method' },
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
          'Software ecosystems are built for everyday execution, with focus on reliability, traceability, and growth. The expected result is lower dependency on manual work, reduced internal friction, and clearer decisions and follow-up.',
        domains: [
          {
            title: 'Process automation and integration',
            overview:
              'Operational flows are digitized so each task has a state, validation, and accountable owner, preventing information from spreading across emails, sheets, or messages. When previous systems exist, they are connected to avoid duplication and data is normalized for consistency.',
            technicalFocus:
              'At the technical level, automation relies on business rules, API integrations, consistent validations, and an event log that makes it possible to reconstruct what was done, when, and by whom in an auditable way.',
          },
          {
            title: 'Appointment management with WhatsApp and professional messaging',
            overview:
              'Conversational systems are implemented to handle requests, organize availability, and confirm or reschedule appointments. When a conversation needs human intervention, it is handed over with full context, preventing information loss and team overload.',
            technicalFocus:
              'Technically, the system includes availability control, confirmations and reminders, change management, conversation logging, and a control panel, with optional integration into calendars and existing management software.',
          },
          {
            title: 'Business-specific management platforms',
            overview:
              'Web applications are built for daily operations, including role-based dashboards, search and filtering, data exports, and permission control. The goal is to support operations with a dedicated tool that reflects the business reality, not a generic template.',
            technicalFocus:
              'At the technical level, a modular architecture is designed, a coherent data model is defined, and security, auditing, backups, and evolutionary maintenance are included.',
          },
        ],
        guarantees: {
          heading: 'Technical safeguards that reduce risk',
          subheading: 'What makes the difference once the system is in production',
          description:
            'A useful system is not one that works in a demo, but one that stays stable when processes change, volume grows, and operational pressure increases. That is why delivery is guided by verifiable criteria.',
          riskControls:
            'In security, user and role-based permissions, credential protection, encrypted communications, and access control are applied. In traceability, relevant activity is logged to keep a change history and reconstruct action sequences. In continuity, backups, incident recovery, basic monitoring, and maintenance are considered.',
          infrastructureNote:
            'When required by the client, a local-processing approach or client-controlled infrastructure is prioritized, reducing data exposure and preserving data governance.',
        },
      },
      method: {
        eyebrow: 'Working method',
        title: 'From operational problem to executable technical plan',
        intro:
          'First, the real process is analyzed, with special attention to friction points, duplications, common errors, and dependencies on key people. Then a phased solution is designed with verifiable deliverables. Finally, deployment, team onboarding, and maintenance keep the system aligned with business evolution.',
        steps: [
          {
            title: 'Real-process analysis',
            description:
              'Current workflows are mapped to detect bottlenecks, recurring risks, and critical dependencies before defining the technical scope.',
          },
          {
            title: 'Phased design with verifiable deliverables',
            description:
              'An implementation roadmap is structured with measurable milestones to validate progress and adjust before scaling.',
          },
          {
            title: 'Deployment, enablement, and maintenance',
            description:
              'The solution is deployed in real operations, teams are trained, and the platform is maintained to evolve with business needs.',
          },
        ],
        outcome:
          'The result is a controlled implementation, without blind leaps, and with room for adjustment before scaling.',
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
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Let us design the right solution for your business',
        description:
          'If your company needs software aligned with real operational constraints, we can help you design, implement, and sustain it.',
        ctaLabel: 'Write to xxxx@icloud.com',
        responseNote: 'Technical and functional support with a long-term perspective.',
      },
      legal: {
        heading: 'Legal and corporate details',
        records: [
          { label: 'Trade name', value: 'LusaWorks' },
          { label: 'Corporate name', value: 'PUNTO DE COMERCIO SL' },
          { label: 'Tax ID (CIF)', value: 'B93372324' },
          { label: 'Email', value: 'xxxx@icloud.com' },
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
