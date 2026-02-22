import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProximitySectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-proximity-section',
  imports: [CommonModule],
  templateUrl: './proximity-section.html',
  styleUrl: './proximity-section.scss',
})
export class ProximitySectionComponent {
  readonly copy = input.required<ProximitySectionCopy>();
}
