export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  primaryKeyword: string;
  relatedKeywords: string[];
  intro: string[];
  benefits: string[];
  process: Array<{
    title: string;
    text: string;
  }>;
  useCases: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: string;
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'desarrollo-software-a-medida-jaen',
    title: 'Desarrollo de software a medida en Jaén',
    metaTitle: 'Desarrollo de software a medida en Jaén | LusaWorks',
    metaDescription:
      'Desarrollo de software a medida en Jaén para pymes: plataformas web, automatización, integraciones, IA local y soporte técnico.',
    eyebrow: 'Servicio principal',
    summary:
      'Diseño, desarrollo y mantenimiento de soluciones digitales adaptadas al proceso real de cada empresa en Jaén.',
    primaryKeyword: 'desarrollo de software a medida en Jaén',
    relatedKeywords: [
      'empresa desarrollo software Jaén',
      'software a medida Jaén',
      'desarrollo aplicaciones web Jaén',
      'digitalización pymes Jaén',
    ],
    intro: [
      'El desarrollo de software a medida en Jaén permite sustituir hojas de cálculo, procesos manuales y herramientas inconexas por una plataforma ajustada al funcionamiento real de la empresa.',
      'LusaWorks trabaja desde Jaén con un enfoque técnico y práctico: analizar el proceso, definir una arquitectura mantenible, construir por fases y dejar una solución preparada para evolucionar sin depender de parches improvisados.',
      'El objetivo no es implantar tecnología por moda, sino crear software útil para operar mejor, controlar datos, reducir errores y tomar decisiones con más información.',
    ],
    benefits: [
      'Aplicaciones web adaptadas al flujo real de trabajo.',
      'Automatización de tareas repetitivas y reducción de errores manuales.',
      'Integración con calendarios, mensajería, bases de datos, APIs y documentos.',
      'Control de usuarios, roles, trazabilidad y medidas de seguridad.',
      'Soporte técnico cercano desde Jaén y acompañamiento telemático.',
    ],
    process: [
      {
        title: 'Análisis del proceso',
        text: 'Se revisa cómo trabaja la empresa, dónde se pierde tiempo y qué información debe quedar registrada para que la solución responda a necesidades reales.',
      },
      {
        title: 'Diseño por fases',
        text: 'Se prioriza una primera versión útil, ampliable y verificable, evitando desarrollos sobredimensionados o difíciles de mantener.',
      },
      {
        title: 'Desarrollo y despliegue',
        text: 'La plataforma se construye con criterios de seguridad, usabilidad, trazabilidad y posibilidad de crecimiento.',
      },
      {
        title: 'Formación y soporte',
        text: 'El equipo recibe acompañamiento para usar la herramienta y detectar mejoras después del despliegue.',
      },
    ],
    useCases: [
      'Software de gestión interna para pymes y equipos profesionales.',
      'Paneles de control operativo y seguimiento de expedientes.',
      'Automatización documental y generación de informes.',
      'Sistemas de citas, reservas, recordatorios y atención digital.',
      'Soluciones con IA local para información sensible o confidencial.',
    ],
    faq: [
      {
        question: '¿Cuándo conviene desarrollar software a medida?',
        answer:
          'Conviene cuando la empresa necesita controlar un proceso propio, reducir tareas manuales o integrar información que no encaja bien en herramientas genéricas.',
      },
      {
        question: '¿El desarrollo puede empezar con una versión pequeña?',
        answer:
          'Sí. Lo recomendable es iniciar con una versión operativa, medir su utilidad y ampliar funcionalidades cuando el proceso ya está validado.',
      },
      {
        question: '¿LusaWorks trabaja solo en Jaén?',
        answer:
          'La base operativa está en Jaén, pero el soporte telemático permite trabajar con empresas de cualquier ubicación que necesiten una solución cercana y mantenible.',
      },
    ],
    cta: 'Solicitar desarrollo de software a medida en Jaén',
  },
  {
    slug: 'empresa-desarrollo-software-jaen',
    title: 'Empresa de desarrollo de software en Jaén',
    metaTitle: 'Empresa de desarrollo de software en Jaén | LusaWorks',
    metaDescription:
      'Empresa de desarrollo de software en Jaén para automatización, plataformas web, bots, IA local y soluciones digitales a medida.',
    eyebrow: 'Proveedor tecnológico local',
    summary:
      'Un equipo técnico en Jaén para convertir problemas operativos en software seguro, claro y mantenible.',
    primaryKeyword: 'empresa desarrollo software Jaén',
    relatedKeywords: [
      'empresa de software Jaén',
      'desarrollo aplicaciones Jaén',
      'consultoría software Jaén',
      'digitalización empresas Jaén',
    ],
    intro: [
      'Elegir una empresa de desarrollo de software en Jaén no consiste solo en contratar programación. Lo importante es contar con un equipo capaz de entender el negocio, ordenar el problema y construir una solución que pueda mantenerse en el tiempo.',
      'LusaWorks combina desarrollo web, automatización, inteligencia artificial aplicada, privacidad y soporte técnico para empresas que necesitan digitalizar procesos sin perder control.',
      'El trabajo se orienta a proyectos donde la proximidad, la claridad técnica y la personalización tienen más valor que una solución estándar.',
    ],
    benefits: [
      'Comunicación directa y seguimiento cercano desde Jaén.',
      'Soluciones adaptadas a procesos reales, no plantillas genéricas.',
      'Documentación, formación y soporte posterior al despliegue.',
      'Criterios de seguridad, privacidad y trazabilidad desde el diseño.',
      'Capacidad para integrar automatización, bots, paneles web e IA local.',
    ],
    process: [
      {
        title: 'Diagnóstico inicial',
        text: 'Se identifica el problema operativo, el volumen de trabajo, los usuarios implicados y las prioridades de negocio.',
      },
      {
        title: 'Propuesta funcional',
        text: 'Se define qué debe hacer la solución, qué queda fuera de la primera fase y cómo se medirá su utilidad.',
      },
      {
        title: 'Implementación controlada',
        text: 'Se construye el sistema con entregas revisables para evitar desviaciones y mantener visibilidad del avance.',
      },
      {
        title: 'Evolución',
        text: 'Una vez en uso, se ajustan pantallas, automatizaciones, permisos e informes según el aprendizaje real.',
      },
    ],
    useCases: [
      'Empresas que quieren dejar de depender de Excel para procesos críticos.',
      'Negocios de servicios que necesitan agenda, recordatorios o atención digital.',
      'Equipos con documentación, expedientes o informes repetitivos.',
      'Operadores con necesidades de trazabilidad, seguridad y cumplimiento.',
    ],
    faq: [
      {
        question: '¿Qué diferencia a LusaWorks de una herramienta genérica?',
        answer:
          'La solución se diseña alrededor del proceso concreto de la empresa, con funciones, permisos y automatizaciones ajustadas a su forma de trabajar.',
      },
      {
        question: '¿Se puede mantener una relación cercana aunque el soporte sea telemático?',
        answer:
          'Sí. La atención se organiza mediante comunicación directa, revisiones de avance y soporte estable, combinando proximidad local y trabajo remoto.',
      },
      {
        question: '¿También se desarrollan proyectos pequeños?',
        answer:
          'Sí. Muchos proyectos empiezan con una primera versión enfocada en resolver un cuello de botella concreto.',
      },
    ],
    cta: 'Hablar con una empresa de software en Jaén',
  },
  {
    slug: 'software-a-medida-jaen',
    title: 'Software a medida en Jaén',
    metaTitle: 'Software a medida en Jaén | LusaWorks',
    metaDescription:
      'Software a medida en Jaén para gestión interna, reservas, expedientes, informes, automatización y plataformas web seguras.',
    eyebrow: 'Soluciones personalizadas',
    summary:
      'Aplicaciones y plataformas adaptadas a empresas que necesitan controlar procesos específicos sin depender de soluciones cerradas.',
    primaryKeyword: 'software a medida Jaén',
    relatedKeywords: [
      'programas a medida Jaén',
      'aplicaciones a medida Jaén',
      'software gestión empresas Jaén',
      'plataformas web Jaén',
    ],
    intro: [
      'El software a medida en Jaén es adecuado cuando una empresa necesita una herramienta que se adapte a su forma de trabajar, a sus usuarios y a sus datos.',
      'A diferencia de una solución cerrada, una plataforma a medida puede crecer por módulos: gestión de clientes, expedientes, citas, documentos, roles, avisos, estadísticas o integraciones.',
      'LusaWorks desarrolla software con enfoque operativo: pantallas claras, datos ordenados, control de accesos y automatizaciones que ahorran tiempo.',
    ],
    benefits: [
      'Menos dependencia de herramientas dispersas.',
      'Más control sobre información, permisos y trazabilidad.',
      'Paneles adaptados al uso diario de cada perfil de usuario.',
      'Informes, exportaciones y documentación con estructura común.',
      'Capacidad de ampliar módulos sin rehacer toda la solución.',
    ],
    process: [
      {
        title: 'Mapa de necesidades',
        text: 'Se separan las funciones imprescindibles de las mejoras futuras para construir una primera versión realista.',
      },
      {
        title: 'Modelo de datos',
        text: 'Se define qué información se guarda, cómo se relaciona y qué usuarios pueden verla o modificarla.',
      },
      {
        title: 'Interfaz operativa',
        text: 'Las pantallas se diseñan para tareas concretas: registrar, consultar, validar, exportar o supervisar.',
      },
      {
        title: 'Mantenimiento',
        text: 'El software queda preparado para ajustes, nuevas funciones y soporte técnico posterior.',
      },
    ],
    useCases: [
      'Gestión de expedientes y documentación interna.',
      'Plataformas para citas, reservas y recordatorios.',
      'Control de operaciones, usuarios y tareas pendientes.',
      'Generación de informes correctamente estructurados.',
      'Cuadros de mando para dirección o responsables de área.',
    ],
    faq: [
      {
        question: '¿El software a medida es siempre más caro?',
        answer:
          'No necesariamente. Si evita muchas horas manuales o errores recurrentes, puede ser más rentable que pagar por herramientas que no encajan.',
      },
      {
        question: '¿Se puede integrar con herramientas existentes?',
        answer:
          'Sí. Cuando existen APIs, calendarios, bases de datos o documentos reutilizables, la solución puede conectarse con ellos.',
      },
      {
        question: '¿Qué pasa si cambian las necesidades?',
        answer:
          'La arquitectura modular permite añadir funciones sin perder el trabajo ya realizado.',
      },
    ],
    cta: 'Solicitar software a medida en Jaén',
  },
  {
    slug: 'automatizacion-procesos-jaen',
    title: 'Automatización de procesos en Jaén',
    metaTitle: 'Automatización de procesos en Jaén | LusaWorks',
    metaDescription:
      'Automatización de procesos en Jaén para pymes: tareas repetitivas, integraciones, avisos, documentos, datos y flujos internos.',
    eyebrow: 'Eficiencia operativa',
    summary:
      'Digitalización de tareas repetitivas para reducir errores, ahorrar tiempo y mejorar la trazabilidad de cada proceso.',
    primaryKeyword: 'automatización de procesos Jaén',
    relatedKeywords: [
      'automatización empresas Jaén',
      'digitalización procesos Jaén',
      'automatización pymes Jaén',
      'integración sistemas Jaén',
    ],
    intro: [
      'La automatización de procesos en Jaén permite que una pyme reduzca llamadas repetitivas, copias manuales, documentos duplicados y tareas que dependen demasiado de una persona concreta.',
      'Una automatización bien diseñada no elimina el criterio humano: ordena el trabajo, registra lo importante y libera tiempo para tareas de mayor valor.',
      'LusaWorks identifica los puntos donde se pierde tiempo y diseña flujos digitales con avisos, reglas, integraciones, formularios y paneles de control.',
    ],
    benefits: [
      'Reducción de tareas manuales y errores de transcripción.',
      'Avisos automáticos, recordatorios y seguimiento de estados.',
      'Centralización de solicitudes, citas, expedientes o documentos.',
      'Integración con mensajería, calendarios y sistemas existentes.',
      'Más trazabilidad sobre quién hizo qué y cuándo.',
    ],
    process: [
      {
        title: 'Detección de tareas repetitivas',
        text: 'Se analizan pasos que se repiten a diario, generan errores o interrumpen al equipo.',
      },
      {
        title: 'Diseño del flujo',
        text: 'Se decide qué puede automatizarse, qué debe validar una persona y qué información debe conservarse.',
      },
      {
        title: 'Implementación técnica',
        text: 'Se crean formularios, reglas, integraciones, notificaciones o paneles según el caso.',
      },
      {
        title: 'Medición y mejora',
        text: 'Se revisa el uso real para ajustar el flujo y ampliar automatizaciones útiles.',
      },
    ],
    useCases: [
      'Recordatorios de citas y confirmaciones automáticas.',
      'Generación de documentos e informes desde datos estructurados.',
      'Alertas de mantenimiento, vencimientos o tareas pendientes.',
      'Centralización de solicitudes recibidas por canales digitales.',
      'Clasificación y seguimiento de expedientes o incidencias.',
    ],
    faq: [
      {
        question: '¿Qué procesos se pueden automatizar?',
        answer:
          'Cualquier proceso repetitivo, basado en reglas o con pasos claros puede estudiarse: citas, avisos, documentos, estados, revisiones o comunicaciones.',
      },
      {
        question: '¿La automatización sustituye al personal?',
        answer:
          'No. El objetivo es reducir carga repetitiva para que el equipo dedique más tiempo a atención, supervisión y decisiones.',
      },
      {
        question: '¿Se puede empezar automatizando solo una parte?',
        answer:
          'Sí. Suele ser lo más recomendable para validar rápido el ahorro de tiempo y evitar una implantación compleja.',
      },
    ],
    cta: 'Automatizar procesos de mi empresa en Jaén',
  },
  {
    slug: 'chatbot-clinicas-jaen',
    title: 'Chatbot para clínicas en Jaén',
    metaTitle: 'Chatbot para clínicas en Jaén | LusaWorks',
    metaDescription:
      'Chatbot para clínicas en Jaén: citas, recordatorios, cancelaciones, WhatsApp, Telegram, agenda y cumplimiento RGPD.',
    eyebrow: 'Atención sanitaria digital',
    summary:
      'Bots conversacionales para clínicas, consultas y centros sanitarios que quieren ordenar citas y reducir ausencias.',
    primaryKeyword: 'chatbot para clínicas Jaén',
    relatedKeywords: [
      'bot WhatsApp clínicas Jaén',
      'automatización citas clínicas Jaén',
      'software RGPD clínicas Jaén',
      'recordatorios pacientes Jaén',
    ],
    intro: [
      'Un chatbot para clínicas en Jaén puede ayudar a gestionar recordatorios, confirmaciones, cancelaciones y solicitudes básicas sin saturar la recepción.',
      'En salud, la automatización debe ser especialmente cuidadosa: no basta con responder mensajes. Hay que minimizar datos, controlar accesos, registrar la información necesaria y respetar el RGPD.',
      'LusaWorks diseña asistentes conversacionales y paneles de control adaptados a clínicas de podología, fisioterapia, odontología, psicología y otros centros asistenciales.',
    ],
    benefits: [
      'Confirmación automática de citas y reducción de incomparecencias.',
      'Cancelaciones anticipadas para liberar huecos de agenda.',
      'Atención inicial fuera de horario sin depender del móvil personal.',
      'Centralización de solicitudes y trazabilidad básica.',
      'Diseño orientado a RGPD, minimización de datos y control de accesos.',
    ],
    process: [
      {
        title: 'Análisis de agenda',
        text: 'Se revisa cómo se solicitan, confirman y cancelan las citas para diseñar un flujo natural para pacientes y recepción.',
      },
      {
        title: 'Diseño conversacional',
        text: 'Se definen mensajes claros, opciones de respuesta, límites del bot y cuándo debe intervenir una persona.',
      },
      {
        title: 'Integración',
        text: 'El bot puede conectarse con calendarios, paneles internos o sistemas propios según el nivel de digitalización de la clínica.',
      },
      {
        title: 'Control y mejora',
        text: 'Se revisan métricas de uso, ausencias, cancelaciones y solicitudes para ajustar el flujo.',
      },
    ],
    useCases: [
      'Clínicas de podología, fisioterapia, odontología o psicología.',
      'Recordatorios 24 o 48 horas antes de la cita.',
      'Confirmación, cancelación y reprogramación asistida.',
      'Respuestas básicas sobre horario, ubicación o preparación previa.',
      'Panel de solicitudes para recepción o responsable de la clínica.',
    ],
    faq: [
      {
        question: '¿Un chatbot puede sustituir a recepción?',
        answer:
          'No debe sustituirla. Debe liberar tareas repetitivas y derivar a atención humana cuando hay dudas clínicas, casos delicados o decisiones profesionales.',
      },
      {
        question: '¿Es compatible con RGPD?',
        answer:
          'Puede serlo si se diseña con minimización de datos, control de accesos, información adecuada al paciente y garantías sobre el tratamiento.',
      },
      {
        question: '¿Puede usarse con WhatsApp?',
        answer:
          'Sí, pero debe plantearse de forma profesional, evitando el uso desordenado de teléfonos personales o conversaciones sin control.',
      },
    ],
    cta: 'Solicitar chatbot para clínica en Jaén',
  },
  {
    slug: 'software-drones-uas-jaen',
    title: 'Software para drones UAS en Jaén',
    metaTitle: 'Software drones UAS en Jaén | LusaWorks',
    metaDescription:
      'Software drones UAS en Jaén para vuelos, pilotos, baterías, mantenimiento, documentación, AESA y RD 517/2024.',
    eyebrow: 'Gestión UAS',
    summary:
      'Plataformas de gestión para operadores UAS que necesitan trazabilidad, mantenimiento, seguridad y documentación.',
    primaryKeyword: 'software drones UAS Jaén',
    relatedKeywords: [
      'software gestión drones Jaén',
      'software operadores UAS Jaén',
      'gestión documental UAS Jaén',
      'AESA drones software Jaén',
    ],
    intro: [
      'El software para drones UAS en Jaén responde a una necesidad cada vez más clara: operar no es solo volar, también es documentar pilotos, aeronaves, baterías, revisiones, vuelos y mantenimiento.',
      'Una entidad que trabaja con UAS necesita datos fiables, trazabilidad y capacidad de justificar su actividad conforme a procedimientos internos y normativa aplicable.',
      'LusaWorks desarrolla plataformas a medida para centralizar operaciones UAS, facilitar registros desde móvil y generar documentación organizada.',
    ],
    benefits: [
      'Registro de vuelos, pilotos, aeronaves, baterías y componentes.',
      'Control de mantenimiento, revisiones, alertas y vida útil.',
      'Trazabilidad documental orientada a AESA y RD 517/2024.',
      'Acceso por roles para pilotos, responsables y personal técnico.',
      'Uso desde ordenador y teléfono móvil para registrar datos en campo.',
    ],
    process: [
      {
        title: 'Modelo operativo',
        text: 'Se estudia cómo opera la entidad, qué roles intervienen y qué registros necesita conservar.',
      },
      {
        title: 'Datos y trazabilidad',
        text: 'Se define cómo se conectan vuelos, aeronaves, baterías, pilotos, revisiones y documentos.',
      },
      {
        title: 'Paneles y formularios',
        text: 'Se crean pantallas claras para registrar vuelos, inspecciones, incidencias y mantenimiento.',
      },
      {
        title: 'Exportación documental',
        text: 'La información queda preparada para consultas, auditoría interna y generación de documentos.',
      },
    ],
    useCases: [
      'Operadores UAS con varios pilotos o aeronaves.',
      'Control de baterías, ciclos, revisiones y estado operativo.',
      'Registro de vuelos desde móvil en terreno.',
      'Mantenimiento preventivo y alertas técnicas.',
      'Exportación de libros de vuelo o documentación interna.',
    ],
    faq: [
      {
        question: '¿Sirve para cualquier operador UAS?',
        answer:
          'La plataforma se adapta al procedimiento de cada entidad, por lo que puede ajustarse a operadores pequeños, servicios técnicos o equipos con varias aeronaves.',
      },
      {
        question: '¿Ayuda con el cumplimiento normativo?',
        answer:
          'Ayuda a ordenar registros, trazabilidad y documentación. La aplicación técnica debe alinearse con los procedimientos y obligaciones aplicables a cada caso.',
      },
      {
        question: '¿Puede usarse desde el móvil?',
        answer:
          'Sí. La movilidad es clave para registrar datos cuando el vuelo o la revisión todavía están recientes.',
      },
    ],
    cta: 'Solicitar software UAS en Jaén',
  },
  {
    slug: 'ia-local-empresas-jaen',
    title: 'IA local para empresas en Jaén',
    metaTitle: 'IA local para empresas en Jaén | LusaWorks',
    metaDescription:
      'IA local para empresas en Jaén: automatización documental, transcripción, informes, datos confidenciales y soluciones RGPD.',
    eyebrow: 'Inteligencia artificial privada',
    summary:
      'Soluciones de inteligencia artificial ejecutadas en entornos controlados para empresas que trabajan con información sensible.',
    primaryKeyword: 'IA local para empresas Jaén',
    relatedKeywords: [
      'inteligencia artificial local Jaén',
      'automatización documental IA Jaén',
      'IA RGPD empresas Jaén',
      'transcripción automática Jaén',
    ],
    intro: [
      'La IA local para empresas en Jaén permite aprovechar automatización, transcripción, clasificación e informes sin enviar información sensible a servicios externos sin control suficiente.',
      'Este enfoque es especialmente útil para negocios que manejan expedientes, audios, imágenes, documentación confidencial o datos personales que requieren prudencia y trazabilidad.',
      'LusaWorks diseña soluciones de IA aplicada que priorizan utilidad operativa, privacidad, revisión humana y facilidad de uso.',
    ],
    benefits: [
      'Procesamiento de información en entornos controlados.',
      'Transcripción de audios y ordenación de observaciones.',
      'Generación de informes correctamente estructurados listos para revisión y entrega al cliente.',
      'Clasificación de documentos, evidencias o registros internos.',
      'Menos exposición de datos personales o sensibles.',
    ],
    process: [
      {
        title: 'Identificación del caso de uso',
        text: 'Se delimita qué tarea debe apoyar la IA: transcribir, resumir, clasificar, redactar borradores o detectar información relevante.',
      },
      {
        title: 'Control de datos',
        text: 'Se revisa qué información se procesa, dónde se almacena, quién accede y qué medidas de seguridad son necesarias.',
      },
      {
        title: 'Flujo con revisión humana',
        text: 'La IA genera apoyo operativo, pero la decisión y validación final corresponden al profesional o responsable.',
      },
      {
        title: 'Integración en la herramienta',
        text: 'La IA se conecta con formularios, expedientes, documentos o paneles para que sea útil en el trabajo diario.',
      },
    ],
    useCases: [
      'Despachos profesionales y empresas con expedientes confidenciales.',
      'Detectives privados y generación de informes revisables.',
      'Transcripción de notas de voz, entrevistas o registros internos.',
      'Clasificación de documentos y extracción de datos relevantes.',
      'Automatización documental para pymes con RGPD.',
    ],
    faq: [
      {
        question: '¿Qué significa IA local?',
        answer:
          'Significa que el procesamiento se plantea en equipos o infraestructura controlada, reduciendo la necesidad de enviar información sensible a servicios externos.',
      },
      {
        question: '¿La IA puede redactar informes finales?',
        answer:
          'Puede preparar borradores y estructuras, pero la revisión y aprobación final deben quedar en manos del profesional responsable.',
      },
      {
        question: '¿Es útil para pequeñas empresas?',
        answer:
          'Sí, especialmente cuando hay tareas repetitivas con documentos, audios, expedientes o información que requiere privacidad.',
      },
    ],
    cta: 'Solicitar IA local para empresa en Jaén',
  },
];

export const SERVICE_PAGE_MAP = new Map(SERVICE_PAGES.map((page) => [page.slug, page]));
