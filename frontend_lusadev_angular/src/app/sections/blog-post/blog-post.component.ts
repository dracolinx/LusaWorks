import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { forkJoin } from 'rxjs';
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
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private seoService = inject(SeoService);

  content = signal<SafeHtml | null>(null);
  error = signal<boolean>(false);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadPost(slug);
      }
    });
  }

  private loadPost(slug: string) {
    forkJoin({
      posts: this.http.get<BlogPostMeta[]>('blog/posts.json'),
      markdown: this.http.get(`blog/${slug}.md`, { responseType: 'text' }),
    }).subscribe({
      next: async ({ posts, markdown }) => {
        try {
          const post = posts.find((item) => item.slug === slug);
          const html = await marked.parse(markdown);

          if (post) {
            this.seoService.setPage({
              title: `${post.seoTitle ?? post.title} | LusaWorks`,
              description: post.seoDescription ?? post.summary,
              path: `/blog/${post.slug}`,
              type: 'article',
              publishedTime: post.date,
            });
          }

          this.content.set(this.sanitizer.bypassSecurityTrustHtml(html));
          this.error.set(false);
        } catch (e) {
          console.error('Error parsing markdown', e);
          this.error.set(true);
        }
      },
      error: (err) => {
        console.error('Error loading markdown file', err);
        this.error.set(true);
      }
    });
  }
}
