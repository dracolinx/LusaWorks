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

  pillarLevel(index: number): number {
    return this.pillarLevels[index] ?? 86;
  }

  timelineLevel(index: number): number {
    return this.timelineLevels[index] ?? 90;
  }
}
