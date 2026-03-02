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
        'LusaWorks desarrolla soluciones software con tecnología de vanguardia para procesos internos y atención al cliente, adaptadas a cualquier pyme con precios económicos, transparentes y justos.',
      languageLabel: 'Idioma',
      nav: [
        { id: 'hero', label: 'Inicio' },
        { id: 'specialization', label: 'Especialización' },
        { id: 'method', label: 'Método' },
        { id: 'team', label: 'Equipo' },
        { id: 'proximity', label: 'Jaén y proximidad' },
        { id: 'contact', label: 'Contacto' },
        { id: 'legal-policy', label: 'Aviso legal y política de privacidad' },
        { id: 'legal', label: 'Datos legales' },
      ],
      mobileMenuLabel: 'Abrir menú',
      closeMenuLabel: 'Cerrar menú',
      mobileMenuText: 'MENU',
      closeMenuText: 'CERRAR',
      hero: {
        kicker: 'LusaWorks · Ingeniería de software para empresas',
        title: 'Soluciones software a medida para procesos reales de negocio',
        overviewTitle: 'Tecnología empresarial adaptada a tu realidad',
        description:
          'Diseñamos, desarrollamos y mantenemos soluciones digitales personalizadas que conectan operación, datos y atención al cliente. Aplicamos tecnología de vanguardia y servicios de última generación, habituales en entornos empresariales de alto nivel, aterrizados a la realidad de cualquier pyme. Somos garantía de adaptabilidad a las necesidades del cliente y demostramos que las soluciones tecnológicas más disruptivas pueden implantarse con eficiencia, sin costes desproporcionados.',
        primaryCta: 'Contactar por email',
        secondaryCta: 'Conocer especialización',
        metrics: [
          { value: '100%', label: 'Adaptación a procesos reales' },
          {
            value: 'Experiencia',
            label: 'Conocimiento y experiencia técnica, operativa y multidisciplinar para garantizar el éxito del servicio',
          },
          { value: 'Jaén', label: 'Base operativa y proximidad ágil' },
          {
            value: 'Automatizaciones',
            label: 'Programas de gestión integrales con enfoque de productividad, desconexión digital y atención al cliente',
          },
          { value: 'RGPD', label: 'Cumplimiento, trazabilidad y control' },
        ],
      },
      specialization: {
        eyebrow: 'Especialización',
        title: 'Tecnología aplicada a resultados empresariales',
        intro:
          'Se construyen ecosistemas de software preparados para uso diario, con foco en fiabilidad, trazabilidad y crecimiento. Se incorporan sistemas y servicios de última generación para impulsar procesos internos y mejorar el trato con el cliente, manteniendo una implantación viable para cualquier pyme.',
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
              'Se implementan sistemas conversacionales capaces de atender solicitudes, organizar disponibilidad y confirmar o reprogramar citas. Cuando la conversación exige intervención humana, se deriva con contexto, evitando pérdidas de información y evitando saturación del equipo. Este enfoque permite potenciar la desconexión digital delegando en sistemas autónomos que gestionen agenda y atención al cliente.',
            technicalFocus:
              'A nivel técnico, el sistema incorpora control de disponibilidad, confirmaciones y recordatorios, gestión de cambios, registro de conversación y panel de control, con posibilidad de integración con calendarios y con el software de gestión que ya exista.',
          },
          {
            title: 'Plataformas de gestión específicas por negocio',
            overview:
              'Se crean aplicaciones web orientadas al trabajo diario, con paneles por rol, búsquedas y filtros, exportación de información y control de permisos. El objetivo es maximizar la productividad de tus horas de trabajo, permitiendo enfocar los esfuerzos en lo que importa, lejos de gestiones repetitivas.',
            technicalFocus:
              'A nivel técnico, se diseña una arquitectura modular, se define un modelo de datos coherente y se incorporan medidas de seguridad, auditoría, copias de seguridad y mantenimiento evolutivo.',
          },
        ],
        guarantees: {
          heading: 'Garantías técnicas en producción',
          subheading: 'Ciberseguridad, cumplimiento y continuidad con controles diferenciados',
          description:
            'La diferencia real aparece cuando el sistema está en uso diario y la exigencia operativa crece. Por eso se trabaja con criterios verificables y con bloques de control separados para no mezclar conceptos.',
          items: [
            {
              title: 'Ciberseguridad operativa',
              text: 'Se aplican permisos por usuario y por rol, protección de credenciales, cifrado de comunicaciones y control de acceso para reducir exposición y riesgo.',
            },
            {
              title: 'Cumplimiento normativo',
              text: 'Se define un marco de trabajo alineado con RGPD/LOPDGDD y con los requisitos sectoriales aplicables, con responsabilidades y evidencias de control.',
            },
            {
              title: 'Trazabilidad y auditoría',
              text: 'Se registra la actividad relevante para disponer de historial de cambios y poder reconstruir qué ocurrió, cuándo y quién intervino.',
            },
            {
              title: 'Continuidad del servicio',
              text: 'Se contemplan copias de seguridad, recuperación ante incidentes, monitorización básica y mantenimiento para sostener la operación.',
            },
          ],
          closingNote:
            'Cuando el cliente lo requiere, se prioriza un enfoque de procesamiento local o en infraestructura controlada por el propio cliente, reforzando gobierno del dato y reduciendo exposición.',
        },
        opportunity: {
          title: 'Automatización aplicable a cualquier gestión, incluso en escenarios muy específicos',
          intro:
            'En necesidades de cumplimiento normativo, generación de informes personalizados para organismos públicos o privados y cualquier flujo administrativo u operativo, la automatización puede aportar orden, velocidad y trazabilidad.',
          points: [
            'Las obligaciones regulatorias pueden traducirse a controles y validaciones automatizadas.',
            'Los informes personalizados pueden generarse con formatos y métricas adaptadas a cada entidad receptora.',
            'Procesos que hoy se resuelven de forma manual pueden integrarse en flujos más estables y medibles.',
          ],
          closing:
            'Se invita a plantear el problema y el contexto real para evaluar su resolución: incluso cuando parezca muy específico, puede abordarse con soluciones tecnológicas existentes bien implementadas.',
        },
      },
      method: {
        eyebrow: 'Método de trabajo',
        title: 'De problema operativo a plan técnico ejecutable',
        intro:
          'Se trabaja de la mano del cliente analizando sus procesos reales y sus necesidades, con especial atención a puntos de fricción, duplicidades, errores habituales y dependencias de personas clave. Desde el inicio se prioriza la integración con sus sistemas actuales para no distorsionar su operativa de negocio. Después se diseña una solución por fases con entregables verificables. Por último, se despliega, se forma al equipo y se mantiene el sistema para que siga alineado con la evolución del negocio.',
        steps: [
          {
            title: 'Análisis del proceso real',
            description:
              'Se identifica cómo trabaja hoy el negocio, dónde se pierde tiempo y qué riesgos operativos se repiten para priorizar mejoras de alto impacto.',
          },
          {
            title: 'Diseño por fases y entregables verificables',
            description:
              'Se define una hoja de ruta técnica con hitos medibles, maximizando la integración con herramientas y sistemas ya existentes para implementar con control, validar avances y ajustar antes de escalar.',
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
              'Desarrollo de herramientas que convierten datos heterogéneos en decisiones accionables y procesos más sencillos.',
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
          'Si buscas una solución software adaptada a tu realidad operativa, podemos ayudarte a diseñar, implementar y mantener una plataforma alineada con tus objetivos, con precios económicos, transparentes y justos.',
        ctaLabel: 'Escribir a lusaworks@icloud.com',
        responseNote: 'Atención técnica y funcional con enfoque de largo recorrido.',
      },
      legalPolicy: {
        eyebrow: 'Cumplimiento',
        title: 'Aviso legal y política de privacidad',
        intro:
          'Esta sección describe cómo LusaWorks utiliza, revela, protege y gestiona los datos de los usuarios en sus servicios y en sus integraciones tecnológicas, incluyendo canales de mensajería.',
        metaUrlNote:
          'Este apartado está diseñado para usarse como URL pública de política de privacidad ante Meta.',
        updatedLabel: 'Última actualización',
        updatedValue: '2 de marzo de 2026',
        blocks: [
          {
            title: 'Responsable del tratamiento',
            paragraphs: [
              'Nombre comercial: LusaWorks. Razón social: PUNTO DE COMERCIO SL. CIF: B93372324. Domicilio de actividad: Jaén, España.',
              'Contacto para privacidad y protección de datos: lusaworks@icloud.com.',
            ],
          },
          {
            title: 'Finalidad y alcance del tratamiento',
            paragraphs: [
              'Los datos se tratan para prestar servicios de desarrollo e integración de software, automatización operativa, gestión de agenda y atención al cliente, soporte técnico y mejora continua del servicio.',
            ],
          },
          {
            title: 'Datos que se pueden tratar',
            paragraphs: ['El tratamiento puede incluir información facilitada por el usuario o por el cliente empresarial en cada proyecto.'],
            bullets: [
              'Datos identificativos y de contacto (nombre, teléfono, email).',
              'Datos de interacción operativa (solicitudes, citas, incidencias y mensajes).',
              'Metadatos técnicos y de seguridad (logs de acceso, trazas y eventos de sistema).',
            ],
          },
          {
            title: 'Uso de datos en integraciones con Meta y mensajería',
            paragraphs: [
              'Cuando se usan canales como WhatsApp, los datos se procesan exclusivamente para atender conversaciones, gestionar citas, enviar confirmaciones y ofrecer soporte asociado al servicio contratado.',
              'No se venden datos personales ni se ceden con fines comerciales ajenos al servicio.',
            ],
          },
          {
            title: 'Comunicación a terceros y encargados',
            paragraphs: [
              'Los datos solo se comparten con proveedores necesarios para la prestación técnica del servicio (infraestructura, mensajería, monitorización o soporte), bajo acuerdos contractuales y medidas de confidencialidad.',
            ],
          },
          {
            title: 'Base jurídica',
            paragraphs: ['El tratamiento se fundamenta en la ejecución de contrato, el consentimiento cuando corresponde, el interés legítimo en continuidad y seguridad operativa, y el cumplimiento de obligaciones legales.'],
          },
          {
            title: 'Conservación y seguridad',
            paragraphs: ['Los datos se conservan durante el tiempo necesario para la finalidad del servicio y durante los plazos legales aplicables.'],
            bullets: [
              'Control de acceso por perfiles y roles.',
              'Cifrado de comunicaciones y protección de credenciales.',
              'Registro de actividad, copias de seguridad y continuidad operativa.',
            ],
          },
          {
            title: 'Derechos de los usuarios',
            paragraphs: [
              'La persona interesada puede ejercer derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, así como retirar el consentimiento cuando proceda.',
              'Las solicitudes se atienden en lusaworks@icloud.com, aportando identificación suficiente para su tramitación.',
            ],
          },
          {
            title: 'Cambios en esta política',
            paragraphs: [
              'La política podrá actualizarse por cambios legales, técnicos u operativos. La versión vigente será siempre la publicada en esta URL.',
            ],
          },
        ],
      },
      legal: {
        heading: 'Datos legales y corporativos',
        records: [
          { label: 'Nombre comercial', value: 'LusaWorks' },
          { label: 'Razón social', value: 'PUNTO DE COMERCIO SL' },
          { label: 'CIF', value: 'B93372324' },
          { label: 'Email', value: 'lusaworks@icloud.com' },
          { label: 'Ubicación', value: 'Jaén, España' },
        ],
        supportMessage:
          'Especialización en soluciones software adaptadas con tecnología de vanguardia y proximidad.',
        rights: '© LusaWorks. Todos los derechos reservados.',
      },
      logoAlt: 'Logo corporativo de LusaWorks',
      heroImageAlt: 'Identidad visual de LusaWorks sobre entorno tecnológico',
    },
    en: {
      pageTitle: 'LusaWorks | Tailored software solutions for businesses',
      metaDescription:
        'LusaWorks builds bespoke software using cutting-edge technology for internal processes and customer interactions, tailored to any SME with affordable, transparent, and fair pricing.',
      languageLabel: 'Language',
      nav: [
        { id: 'hero', label: 'Home' },
        { id: 'specialization', label: 'Specialization' },
        { id: 'method', label: 'Method' },
        { id: 'team', label: 'Team' },
        { id: 'proximity', label: 'Jaén & proximity' },
        { id: 'contact', label: 'Contact' },
        { id: 'legal-policy', label: 'Legal notice & privacy policy' },
        { id: 'legal', label: 'Legal details' },
      ],
      mobileMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      mobileMenuText: 'MENU',
      closeMenuText: 'CLOSE',
      hero: {
        kicker: 'LusaWorks · Business software engineering',
        title: 'Tailored software solutions for real business operations',
        overviewTitle: 'Enterprise-grade technology adapted to your reality',
        description:
          'We design, build, and maintain custom digital solutions that connect operations, data, and customer interactions. We apply cutting-edge technology and next-generation services used in top business environments, adapted to the real context of any SME. We ensure each solution is adapted to client needs and show that even disruptive technology can be implemented efficiently, without disproportionate costs.',
        primaryCta: 'Contact by email',
        secondaryCta: 'Explore specialization',
        metrics: [
          { value: '100%', label: 'Real-process adaptation' },
          {
            value: 'Expertise',
            label: 'Technical, operational, and multidisciplinary expertise to ensure service success',
          },
          { value: 'Jaén', label: 'Operational base and agile proximity' },
          {
            value: 'Automation',
            label: 'Integrated management programs focused on productivity, digital disconnection, and customer service',
          },
          { value: 'GDPR', label: 'Compliance, traceability, and control' },
        ],
      },
      specialization: {
        eyebrow: 'Specialization',
        title: 'Technology designed for business outcomes',
        intro:
          'Software ecosystems are built for everyday execution, with focus on reliability, traceability, and growth. We incorporate next-generation systems and services to improve internal processes and customer handling, while keeping delivery realistic for any SME.',
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
              'Conversational systems are implemented to handle requests, organize availability, and confirm or reschedule appointments. When a conversation needs human intervention, it is handed over with full context, preventing information loss and team overload. This approach also supports healthier digital disconnection by delegating agenda handling and customer attention tasks to autonomous systems.',
            technicalFocus:
              'Technically, the system includes availability control, confirmations and reminders, change management, conversation logging, and a control panel, with optional integration into calendars and existing management software.',
          },
          {
            title: 'Business-specific management platforms',
            overview:
              'Web applications are built for daily operations, including role-based dashboards, search and filtering, data exports, and permission control. The goal is to maximize the productivity of your working hours, so effort stays focused on what matters instead of repetitive administrative tasks.',
            technicalFocus:
              'At the technical level, a modular architecture is designed, a coherent data model is defined, and security, auditing, backups, and evolutionary maintenance are included.',
          },
        ],
        guarantees: {
          heading: 'Production-grade technical assurance',
          subheading: 'Cybersecurity, compliance, and continuity with separated controls',
          description:
            'The real difference appears when the system runs in day-to-day operations and pressure increases. That is why delivery is based on verifiable criteria and clearly separated control domains.',
          items: [
            {
              title: 'Operational cybersecurity',
              text: 'User and role-based permissions, credential protection, encrypted communications, and access control are applied to reduce exposure and risk.',
            },
            {
              title: 'Regulatory compliance',
              text: 'A working framework is aligned with GDPR and applicable sector requirements, with clear responsibilities and control evidence.',
            },
            {
              title: 'Traceability and auditability',
              text: 'Relevant activity is logged to maintain change history and reconstruct what happened, when it happened, and who acted.',
            },
            {
              title: 'Service continuity',
              text: 'Backups, incident recovery, basic monitoring, and maintenance are incorporated to sustain stable operation.',
            },
          ],
          closingNote:
            'When required by the client, local processing or client-controlled infrastructure is prioritized to reinforce data governance and reduce exposure.',
        },
        opportunity: {
          title: 'Automation can be applied to any management flow, even highly specific cases',
          intro:
            'For regulatory compliance needs, custom reporting for public or private institutions, and virtually any administrative or operational workflow, automation can provide structure, speed, and traceability.',
          points: [
            'Regulatory obligations can be translated into automated controls and validations.',
            'Custom reports can be generated with formats and metrics tailored to each receiving organization.',
            'Processes currently handled manually can be integrated into more stable and measurable workflows.',
          ],
          closing:
            'Clients are encouraged to share the problem and real context so resolution paths can be assessed: even very specific cases can be addressed with existing technology when implemented properly.',
        },
      },
      method: {
        eyebrow: 'Working method',
        title: 'From operational problem to executable technical plan',
        intro:
          'We work side by side with the client, analyzing real processes and business needs, with special attention to friction points, duplications, common errors, and dependencies on key people. From the start, integration with existing systems is prioritized to avoid disrupting day-to-day operations. Then a phased solution is designed with verifiable deliverables. Finally, deployment, team onboarding, and maintenance keep the system aligned with business evolution.',
        steps: [
          {
            title: 'Real-process analysis',
            description:
              'Current workflows are mapped to detect bottlenecks, recurring risks, and critical dependencies before defining the technical scope.',
          },
          {
            title: 'Phased design with verifiable deliverables',
            description:
              'An implementation roadmap is structured with measurable milestones, maximizing integration with existing tools and systems to validate progress and adjust before scaling.',
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
              'Tooling that transforms heterogeneous data into actionable decisions and simpler processes.',
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
          'If your company needs software aligned with real operational constraints, we can help you design, implement, and sustain it with affordable, transparent, and fair pricing.',
        ctaLabel: 'Write to lusaworks@icloud.com',
        responseNote: 'Technical and functional support with a long-term perspective.',
      },
      legalPolicy: {
        eyebrow: 'Compliance',
        title: 'Legal notice and privacy policy',
        intro:
          'This section explains how LusaWorks uses, discloses, protects, and manages user data in its services and technical integrations, including messaging channels.',
        metaUrlNote:
          'This section is intended to be used as the public privacy policy URL for Meta requirements.',
        updatedLabel: 'Last update',
        updatedValue: 'March 2, 2026',
        blocks: [
          {
            title: 'Data controller',
            paragraphs: [
              'Trade name: LusaWorks. Corporate name: PUNTO DE COMERCIO SL. Tax ID (CIF): B93372324. Operational base: Jaén, Spain.',
              'Privacy contact: lusaworks@icloud.com.',
            ],
          },
          {
            title: 'Purpose and scope of processing',
            paragraphs: [
              'Data is processed to deliver software development and integration services, workflow automation, appointment handling, customer support, technical maintenance, and service quality improvement.',
            ],
          },
          {
            title: 'Data categories that may be processed',
            paragraphs: ['Processing may include information provided by users or by client organizations in each project context.'],
            bullets: [
              'Identification and contact data (name, phone number, email).',
              'Operational interaction data (requests, appointments, incidents, and messages).',
              'Technical and security metadata (access logs, traces, and system events).',
            ],
          },
          {
            title: 'Data usage in Meta and messaging integrations',
            paragraphs: [
              'When channels such as WhatsApp are used, data is processed only to handle conversations, schedule appointments, send confirmations, and provide support related to the contracted service.',
              'Personal data is not sold or disclosed for unrelated commercial purposes.',
            ],
          },
          {
            title: 'Disclosure to third parties and processors',
            paragraphs: [
              'Data is only shared with providers required for technical service delivery (infrastructure, messaging, monitoring, or support), under contractual safeguards and confidentiality obligations.',
            ],
          },
          {
            title: 'Legal basis',
            paragraphs: ['Processing is based on contract performance, consent when applicable, legitimate interest for operational continuity and security, and compliance with legal obligations.'],
          },
          {
            title: 'Retention and security controls',
            paragraphs: ['Data is retained only for the time required by service purposes and applicable legal retention periods.'],
            bullets: [
              'Role-based access controls.',
              'Encrypted communications and credential protection.',
              'Activity logging, backups, and operational continuity controls.',
            ],
          },
          {
            title: 'User rights',
            paragraphs: [
              'Data subjects may exercise rights of access, rectification, erasure, objection, restriction, and portability, and may withdraw consent where applicable.',
              'Requests are handled via lusaworks@icloud.com with sufficient identity verification.',
            ],
          },
          {
            title: 'Policy updates',
            paragraphs: [
              'This policy may be updated due to legal, technical, or operational changes. The current version will always be the one published at this URL.',
            ],
          },
        ],
      },
      legal: {
        heading: 'Legal and corporate details',
        records: [
          { label: 'Trade name', value: 'LusaWorks' },
          { label: 'Corporate name', value: 'PUNTO DE COMERCIO SL' },
          { label: 'Tax ID (CIF)', value: 'B93372324' },
          { label: 'Email', value: 'lusaworks@icloud.com' },
          { label: 'Location', value: 'Jaén, Spain' },
        ],
        supportMessage:
          'Specialized in tailored software solutions with cutting-edge technology, continuous technical support, and affordable, transparent, and fair pricing.',
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
