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

  private readonly tagsEs: string[][] = [
    ['Workflows', 'Integración API', 'Auditable'],
    ['WhatsApp', 'Telegram', 'Agenda inteligente'],
    ['Web Apps', 'Permisos', 'Productividad'],
  ];

  private readonly tagsEn: string[][] = [
    ['Workflows', 'API Integration', 'Auditable'],
    ['WhatsApp', 'Telegram', 'Smart Scheduling'],
    ['Web Apps', 'Permissions', 'Productivity'],
  ];

  tagsFor(index: number): string[] {
    const isEnglish = this.copy().eyebrow.toLowerCase().includes('specialization');
    const source = isEnglish ? this.tagsEn : this.tagsEs;
    return source[index] ?? source[source.length - 1];
  }
}
