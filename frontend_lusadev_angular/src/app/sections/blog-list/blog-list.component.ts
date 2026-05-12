import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo';

interface BlogPostMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  date: string;
  summary: string;
  seoDescription?: string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  private http = inject(HttpClient);
  private seoService = inject(SeoService);
  posts = signal<BlogPostMeta[]>([]);

  ngOnInit() {
    this.seoService.setPage({
      title: 'Blog de software a medida, automatización y RGPD en Jaén | LusaWorks',
      description:
        'Artículos sobre software a medida en Jaén, automatización, IA local, RGPD, bots y gestión UAS.',
      path: '/blog',
    });

    this.http.get<BlogPostMeta[]>('blog/posts.json').subscribe({
      next: (data) => this.posts.set(data),
      error: (err) => console.error('Error loading posts', err),
    });
  }
}
