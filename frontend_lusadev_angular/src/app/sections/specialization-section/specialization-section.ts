import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpecializationSectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-specialization-section',
  imports: [CommonModule],
  templateUrl: './specialization-section.html',
  styleUrl: './specialization-section.scss',
})
export class SpecializationSectionComponent {
  readonly copy = input.required<SpecializationSectionCopy>();
}
