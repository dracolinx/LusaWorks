import { Routes } from '@angular/router';
import { BlogListComponent } from './sections/blog-list/blog-list.component';
import { BlogPostComponent } from './sections/blog-post/blog-post.component';
import { HomeComponent } from './sections/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: '**', redirectTo: '' }
];
