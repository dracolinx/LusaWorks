import { Routes } from '@angular/router';
import { SERVICE_PAGES } from './data/service-pages';
import { BlogListComponent } from './sections/blog-list/blog-list.component';
import { BlogPostComponent } from './sections/blog-post/blog-post.component';
import { HomeComponent } from './sections/home/home.component';
import { ServiceLandingComponent } from './sections/service-landing/service-landing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  ...SERVICE_PAGES.map((page) => ({
    path: page.slug,
    component: ServiceLandingComponent,
    data: { slug: page.slug },
  })),
  { path: '**', redirectTo: '' },
];
