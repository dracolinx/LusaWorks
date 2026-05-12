import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { marked } from 'marked';
import ts from 'typescript';

const siteUrl = 'https://lusaworks.com';
const distDir = join(process.cwd(), 'dist', 'frontend_lusadev_angular', 'browser');
const sourceIndex = join(distDir, 'index.html');
const postsPath = join(process.cwd(), 'public', 'blog', 'posts.json');
const servicePagesPath = join(process.cwd(), 'src', 'app', 'data', 'service-pages.ts');
const baseHtml = readFileSync(sourceIndex, 'utf8');
const posts = JSON.parse(readFileSync(postsPath, 'utf8'));
const servicePages = await loadServicePages();
const baseHref = /<base\s+href="([^"]+)"/i.exec(baseHtml)?.[1] ?? '/';
const appBasePath = baseHref === '/' ? '' : baseHref.replace(/\/$/, '');

const officialLinks = `
  <nav aria-label="Fuentes oficiales">
    <a href="https://www.aepd.es/">AEPD</a>
    <a href="https://www.boe.es/">BOE</a>
    <a href="https://www.seguridadaerea.gob.es/es/ambitos/drones">AESA UAS</a>
  </nav>
`;

const serviceLinks = `
  <nav aria-label="Servicios LusaWorks">
    ${servicePages.map((page) => `<a href="${appHref(`/${page.slug}`)}">${escapeHtml(page.title)}</a>`).join('\n    ')}
    <a href="${appHref('/')}#contact">Contacto LusaWorks Jaén</a>
  </nav>
`;

async function loadServicePages() {
  const source = readFileSync(servicePagesPath, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`;
  const module = await import(moduleUrl);

  return module.SERVICE_PAGES;
}

function setHead(html, page) {
  const canonical = `${siteUrl}${page.path}`;
  const image = `${siteUrl}/assets/logo/LogoConLetras.png`;
  let output = html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(page.description)}">`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${canonical}">`,
    )
    .replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:type" content="${page.type ?? 'website'}">`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(page.title)}">`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(page.description)}">`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${canonical}">`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${image}">`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(page.title)}">`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(page.description)}">`,
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image" content="${image}">`,
    );

  if (page.structuredData) {
    output = output.replace(
      '</head>',
      `<script type="application/ld+json">${JSON.stringify(page.structuredData)}</script></head>`,
    );
  }

  return output;
}

function renderPage(page, body) {
  const html = setHead(baseHtml, page).replace(
    '<app-root></app-root>',
    `<app-root>${body}</app-root>`,
  );
  const filePath =
    page.path === '/' ? sourceIndex : join(distDir, page.path.slice(1), 'index.html');
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
}

function renderHome() {
  const blogLinks = posts
    .map(
      (post) =>
        `<li><a href="${appHref(`/blog/${post.slug}`)}">${escapeHtml(post.title)}</a><p>${escapeHtml(post.summary)}</p></li>`,
    )
    .join('');
  const servicePageLinks = servicePages
    .map(
      (page) =>
        `<li><a href="${appHref(`/${page.slug}`)}">${escapeHtml(page.title)}</a><p>${escapeHtml(page.summary)}</p></li>`,
    )
    .join('');
  const body = `
    <header>
      <a href="${appHref('/')}">LusaWorks</a>
      <nav>
        <a href="${appHref('/')}#specialization">Especialización</a>
        <a href="${appHref('/')}#proximity">Jaén y proximidad</a>
        <a href="${appHref('/blog')}">Blog</a>
        <a href="${appHref('/')}#contact">Contacto</a>
      </nav>
    </header>
    <main>
      <section id="hero">
        <p>LusaWorks · Ingeniería de software en Jaén</p>
        <h1>Empresa de desarrollo de software a medida en Jaén</h1>
        <p>Diseñamos, desarrollamos y mantenemos soluciones digitales personalizadas que conectan operación, datos y atención al cliente.</p>
      </section>
      <section id="specialization">
        <h2>Servicios tecnológicos en Jaén</h2>
        <ul>
          <li>Desarrollo de software a medida para empresas.</li>
          <li>Automatización inteligente de procesos y flujos de trabajo.</li>
          <li>Plataformas web modulares de gestión empresarial.</li>
          <li>Bots conversacionales para citas, WhatsApp, Telegram y RGPD.</li>
          <li>Software de gestión UAS, drones, mantenimiento y trazabilidad.</li>
          <li>Inteligencia artificial local para informes y datos confidenciales.</li>
        </ul>
      </section>
      <section id="servicios-jaen">
        <h2>Servicios de software a medida en Jaén</h2>
        <p>Páginas específicas para las principales búsquedas locales de desarrollo, automatización, bots, UAS e IA.</p>
        <ul>${servicePageLinks}</ul>
      </section>
      <section id="proximity">
        <h2>Empresa radicada en Jaén con atención cercana</h2>
        <p>Trabajamos desde Jaén con acompañamiento directo, soporte técnico estable y capacidad de atención telemática para proyectos nacionales.</p>
      </section>
      <section>
        <h2>Artículos sobre software, automatización y RGPD</h2>
        <ul>${blogLinks}</ul>
      </section>
      <section id="contact">
        <h2>Contacto</h2>
        <p><a href="mailto:info@lusaworks.com">info@lusaworks.com</a></p>
      </section>
    </main>
    <footer>${serviceLinks}${officialLinks}</footer>
  `;

  renderPage(
    {
      title: 'LusaWorks | Empresa de Desarrollo de Software a Medida en Jaén',
      description:
        'Empresa de desarrollo de software a medida en Jaén: automatización, plataformas web, bots conversacionales y soluciones RGPD.',
      path: '/',
      type: 'website',
    },
    body,
  );
}

function renderServicePage(page) {
  const paragraphs = page.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
  const benefits = page.benefits.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const process = page.process
    .map(
      (step) =>
        `<article><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></article>`,
    )
    .join('');
  const useCases = page.useCases.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const faq = page.faq
    .map(
      (item) =>
        `<article><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p></article>`,
    )
    .join('');
  const related = servicePages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 4)
    .map((item) => `<li><a href="${appHref(`/${item.slug}`)}">${escapeHtml(item.title)}</a></li>`)
    .join('');

  const body = `
    <header>
      <a href="${appHref('/')}">LusaWorks</a>
      <nav>
        <a href="${appHref('/')}">Inicio</a>
        <a href="${appHref('/blog')}">Blog</a>
        <a href="${appHref('/')}#contact">Contacto</a>
      </nav>
    </header>
    <main>
      <article>
        <p>${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.summary)}</p>
        <p><strong>Keyword principal:</strong> ${escapeHtml(page.primaryKeyword)}</p>
        <p><strong>También relacionado con:</strong> ${page.relatedKeywords.map(escapeHtml).join(', ')}</p>
        ${paragraphs}
        <section>
          <h2>Qué aporta este servicio</h2>
          <ul>${benefits}</ul>
        </section>
        <section>
          <h2>Cómo se trabaja</h2>
          ${process}
        </section>
        <section>
          <h2>Casos de uso habituales</h2>
          <ul>${useCases}</ul>
        </section>
        <section>
          <h2>Preguntas frecuentes</h2>
          ${faq}
        </section>
        <p><a href="mailto:info@lusaworks.com">${escapeHtml(page.cta)}</a></p>
      </article>
      <aside>
        <h2>Servicios relacionados en Jaén</h2>
        <ul>${related}</ul>
      </aside>
    </main>
    <footer>${serviceLinks}${officialLinks}</footer>
  `;

  renderPage(
    {
      title: page.metaTitle,
      description: page.metaDescription,
      path: `/${page.slug}`,
      type: 'website',
      structuredData: buildServiceStructuredData(page),
    },
    body,
  );
}

function renderBlogList() {
  const items = posts
    .map(
      (post) =>
        `<article><h2><a href="${appHref(`/blog/${post.slug}`)}">${escapeHtml(post.title)}</a></h2><time datetime="${post.date}">${post.date}</time><p>${escapeHtml(post.summary)}</p></article>`,
    )
    .join('');
  const body = `
    <header><a href="${appHref('/')}">LusaWorks</a></header>
    <main>
      <h1>Blog de software a medida, automatización y RGPD en Jaén</h1>
      <p>Artículos de LusaWorks sobre desarrollo de software a medida en Jaén, automatización, IA local, RGPD, atención digital y gestión UAS.</p>
      <p>El objetivo del blog es explicar con detalle cuándo conviene crear una plataforma a medida, cómo automatizar procesos sin perder control y qué criterios técnicos ayudan a una empresa de Jaén a trabajar con más trazabilidad.</p>
      <p>Los contenidos cubren casos reales de digitalización: clínicas que necesitan ordenar citas y recordatorios, operadores de drones UAS que requieren documentación fiable, pymes con obligaciones RGPD y negocios que manejan información confidencial.</p>
      ${items}
    </main>
    <footer>${serviceLinks}${officialLinks}</footer>
  `;

  renderPage(
    {
      title: 'Blog de software a medida, automatización y RGPD en Jaén | LusaWorks',
      description:
        'Artículos sobre software a medida en Jaén, automatización, IA local, RGPD, bots y gestión UAS.',
      path: '/blog',
      type: 'website',
    },
    body,
  );
}

function renderPost(post) {
  const markdown = readFileSync(join(process.cwd(), 'public', 'blog', `${post.slug}.md`), 'utf8');
  const related = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)
    .map(
      (item) => `<li><a href="${appHref(`/blog/${item.slug}`)}">${escapeHtml(item.title)}</a></li>`,
    )
    .join('');
  const seoTitle = post.seoTitle ?? post.title;
  const seoDescription = post.seoDescription ?? post.summary;
  const body = `
    <header><a href="${appHref('/')}">LusaWorks</a> <a href="${appHref('/blog')}">Blog</a></header>
    <main>
      <article>${marked.parse(markdown)}</article>
      <aside>
        <h2>Artículos relacionados</h2>
        <ul>${related}</ul>
        <p><a href="${appHref('/')}#contact">Solicitar desarrollo de software a medida en Jaén</a></p>
      </aside>
    </main>
    <footer>${serviceLinks}${officialLinks}</footer>
  `;

  renderPage(
    {
      title: `${seoTitle} | LusaWorks`,
      description: seoDescription,
      path: `/blog/${post.slug}`,
      type: 'article',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        alternativeHeadline: seoTitle,
        description: seoDescription,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
        author: {
          '@type': 'Organization',
          name: 'LusaWorks',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'LusaWorks',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/assets/logo/LogoConLetras.png`,
          },
        },
      },
    },
    body,
  );
}

function buildServiceStructuredData(page) {
  const url = `${siteUrl}/${page.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.title,
        serviceType: page.primaryKeyword,
        description: page.summary,
        url,
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Jaén',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Andalucía',
          },
        ],
        provider: {
          '@type': 'ProfessionalService',
          name: 'LusaWorks',
          legalName: 'PUNTO DE COMERCIO SL',
          url: siteUrl,
          email: 'info@lusaworks.com',
          areaServed: 'Jaén, Andalucía, España',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          areaServed: 'Jaén',
          url,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

function appHref(path) {
  if (path === '/') {
    return `${appBasePath || ''}/`;
  }

  return `${appBasePath}${path}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

renderHome();
renderBlogList();
posts.forEach(renderPost);
servicePages.forEach(renderServicePage);
console.log(
  `Generated SEO static pages for ${posts.length + servicePages.length + 2} routes with base href ${baseHref}.`,
);
