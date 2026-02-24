import { CommonModule } from '@angular/common';
import { Component, HostListener, input } from '@angular/core';
import { SpecializationSectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-specialization-section',
  imports: [CommonModule],
  templateUrl: './specialization-section.html',
  styleUrl: './specialization-section.scss',
})
export class SpecializationSectionComponent {
  readonly copy = input.required<SpecializationSectionCopy>();
  activeDomainIndex: number | null = null;

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

  openDetails(index: number): void {
    this.activeDomainIndex = index;
  }

  closeDetails(): void {
    this.activeDomainIndex = null;
  }

  selectedDomain() {
    if (this.activeDomainIndex === null) {
      return null;
    }
    return this.copy().domains[this.activeDomainIndex] ?? null;
  }

  detailsLabel(): string {
    const isEnglish = this.copy().eyebrow.toLowerCase().includes('specialization');
    return isEnglish ? 'View details' : 'Ver detalle';
  }

  detailsHint(): string {
    const isEnglish = this.copy().eyebrow.toLowerCase().includes('specialization');
    return isEnglish ? 'Press + to read full details' : 'Pulsa + para leer el detalle completo';
  }

  closeLabel(): string {
    const isEnglish = this.copy().eyebrow.toLowerCase().includes('specialization');
    return isEnglish ? 'Close' : 'Cerrar';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeDetails();
  }
}
