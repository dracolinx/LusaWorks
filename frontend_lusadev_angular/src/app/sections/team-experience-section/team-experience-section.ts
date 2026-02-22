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
}
