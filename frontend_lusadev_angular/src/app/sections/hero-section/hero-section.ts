import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { HeroSectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSectionComponent {
  readonly copy = input.required<HeroSectionCopy>();
}
