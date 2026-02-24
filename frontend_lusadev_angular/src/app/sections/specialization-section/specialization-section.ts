import { CommonModule } from '@angular/common';
import { Component, HostListener, input } from '@angular/core';
import { SpecializationSectionCopy } from '../../models/localized-copy';

type ModalState =
  | { kind: 'domain'; index: number }
  | { kind: 'guarantees' }
  | { kind: 'opportunity' }
  | null;

@Component({
  selector: 'app-specialization-section',
  imports: [CommonModule],
  templateUrl: './specialization-section.html',
  styleUrl: './specialization-section.scss',
})
export class SpecializationSectionComponent {
  readonly copy = input.required<SpecializationSectionCopy>();
  activeModal: ModalState = null;

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
    this.activeModal = { kind: 'domain', index };
  }

  openGuaranteesDetails(): void {
    this.activeModal = { kind: 'guarantees' };
  }

  openOpportunityDetails(): void {
    this.activeModal = { kind: 'opportunity' };
  }

  closeDetails(): void {
    this.activeModal = null;
  }

  selectedDomain() {
    if (!this.activeModal || this.activeModal.kind !== 'domain') {
      return null;
    }
    return this.copy().domains[this.activeModal.index] ?? null;
  }

  activeModalKind(): 'domain' | 'guarantees' | 'opportunity' | null {
    return this.activeModal?.kind ?? null;
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
