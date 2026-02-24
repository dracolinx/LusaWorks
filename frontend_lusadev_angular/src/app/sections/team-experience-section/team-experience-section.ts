import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TeamExperienceSectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-team-experience-section',
  imports: [CommonModule],
  templateUrl: './team-experience-section.html',
  styleUrl: './team-experience-section.scss',
})
export class TeamExperienceSectionComponent {
  readonly copy = input.required<TeamExperienceSectionCopy>();

  private readonly pillarLevels = [96, 91, 94, 89];
  private readonly timelineLevels = [88, 93, 97];
  private readonly pillarExpanded = new Set<number>();
  private readonly timelineExpanded = new Set<number>();

  private readonly pillarDetailsEs: string[] = [
    'Aplicación de IA para estructurar información, reducir tiempos de análisis y convertir datos dispersos en resultados operativos medibles.',
    'Normalización y control de calidad del dato para sostener informes fiables, comparables y útiles en decisiones de gestión.',
    'Diseño de herramientas con permisos, trazabilidad y controles de seguridad desde el inicio para minimizar riesgo operativo.',
    'Coordinación técnica entre perfiles y áreas de negocio para implantar soluciones sin fricción y con continuidad real en producción.',
  ];

  private readonly pillarDetailsEn: string[] = [
    'Applied AI to structure information, reduce analysis time, and transform scattered data into measurable operational outcomes.',
    'Data normalization and quality control to support reliable, comparable reporting for management decisions.',
    'Tooling designed with permissions, traceability, and security controls from day one to reduce operational risk.',
    'Technical coordination across business and technical profiles to deploy solutions smoothly and sustain production continuity.',
  ];

  pillarLevel(index: number): number {
    return this.pillarLevels[index] ?? 86;
  }

  timelineLevel(index: number): number {
    return this.timelineLevels[index] ?? 90;
  }

  togglePillar(index: number): void {
    if (this.pillarExpanded.has(index)) {
      this.pillarExpanded.delete(index);
      return;
    }
    this.pillarExpanded.add(index);
  }

  toggleTimeline(index: number): void {
    if (this.timelineExpanded.has(index)) {
      this.timelineExpanded.delete(index);
      return;
    }
    this.timelineExpanded.add(index);
  }

  isPillarExpanded(index: number): boolean {
    return this.pillarExpanded.has(index);
  }

  isTimelineExpanded(index: number): boolean {
    return this.timelineExpanded.has(index);
  }

  pillarDetail(index: number): string {
    const isEnglish = this.copy().eyebrow.toLowerCase().includes('team');
    const details = isEnglish ? this.pillarDetailsEn : this.pillarDetailsEs;
    return details[index] ?? details[details.length - 1];
  }

  foldLabel(expanded: boolean): string {
    const isEnglish = this.copy().eyebrow.toLowerCase().includes('team');
    if (isEnglish) {
      return expanded ? 'Hide details' : 'View details';
    }
    return expanded ? 'Ocultar detalle' : 'Ver detalle';
  }
}
