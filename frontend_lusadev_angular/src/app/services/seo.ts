import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoPageConfig {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly siteUrl = 'https://lusaworks.com';
  private readonly defaultImage = `${this.siteUrl}/assets/logo/LogoConLetras.png`;

  setPage(config: SeoPageConfig): void {
    const canonicalUrl = `${this.siteUrl}${config.path}`;
    const image = config.image ?? this.defaultImage;
    const type = config.type ?? 'website';

    this.title.setTitle(config.title);
    this.setMetaName('description', config.description);
    this.setMetaName('twitter:card', 'summary_large_image');
    this.setMetaName('twitter:title', config.title);
    this.setMetaName('twitter:description', config.description);
    this.setMetaName('twitter:image', image);
    this.setMetaProperty('og:locale', 'es_ES');
    this.setMetaProperty('og:site_name', 'LusaWorks');
    this.setMetaProperty('og:type', type);
    this.setMetaProperty('og:title', config.title);
    this.setMetaProperty('og:description', config.description);
    this.setMetaProperty('og:url', canonicalUrl);
    this.setMetaProperty('og:image', image);
    this.setCanonical(canonicalUrl);

    if (config.publishedTime) {
      this.setMetaProperty('article:published_time', config.publishedTime);
    } else {
      this.meta.removeTag("property='article:published_time'");
    }
  }

  private setMetaName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setMetaProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
