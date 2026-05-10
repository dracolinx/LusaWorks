import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

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
    this.http.get(`blog/${slug}.md`, { responseType: 'text' }).subscribe({
      next: async (text) => {
        try {
          const html = await marked.parse(text);
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
