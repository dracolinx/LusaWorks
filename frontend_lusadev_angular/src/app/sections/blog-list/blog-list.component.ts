import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  private http = inject(HttpClient);
  posts = signal<BlogPostMeta[]>([]);

  ngOnInit() {
    this.http.get<BlogPostMeta[]>('blog/posts.json').subscribe({
      next: (data) => this.posts.set(data),
      error: (err) => console.error('Error loading posts', err)
    });
  }
}
