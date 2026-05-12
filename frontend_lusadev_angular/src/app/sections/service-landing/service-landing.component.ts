import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SERVICE_PAGE_MAP, SERVICE_PAGES, ServicePage } from '../../data/service-pages';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-service-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-landing.component.html',
  styleUrl: './service-landing.component.scss',
})
export class ServiceLandingComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  protected readonly page = signal<ServicePage | null>(null);
  protected readonly relatedPages = computed(() => {
    const current = this.page();
    return SERVICE_PAGES.filter((item) => item.slug !== current?.slug).slice(0, 4);
  });

  ngOnInit(): void {
    const slug = this.route.snapshot.data['slug'] as string | undefined;
    const page = slug ? SERVICE_PAGE_MAP.get(slug) : null;

    if (!page) {
      return;
    }

    this.page.set(page);
    this.seoService.setPage({
      title: page.metaTitle,
      description: page.metaDescription,
      path: `/${page.slug}`,
    });
  }
}
