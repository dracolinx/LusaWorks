import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LegalFooterCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-legal-footer',
  imports: [CommonModule],
  templateUrl: './legal-footer.html',
  styleUrl: './legal-footer.scss',
})
export class LegalFooterComponent {
  readonly copy = input.required<LegalFooterCopy>();

  isEmail(value: string): boolean {
    return value.includes('@');
  }
}
