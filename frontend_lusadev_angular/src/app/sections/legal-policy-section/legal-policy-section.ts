import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LegalPolicySectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-legal-policy-section',
  imports: [CommonModule],
  templateUrl: './legal-policy-section.html',
  styleUrl: './legal-policy-section.scss',
})
export class LegalPolicySectionComponent {
  readonly copy = input.required<LegalPolicySectionCopy>();
}
