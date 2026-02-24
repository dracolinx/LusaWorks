import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { HeroSectionCopy } from '../../models/localized-copy';

type HeroSectionMode = 'title' | 'overview';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSectionComponent {
  readonly copy = input.required<HeroSectionCopy>();
  readonly imageAlt = input<string>('');
  readonly mode = input<HeroSectionMode>('overview');
}
