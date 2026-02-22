import { Component, input } from '@angular/core';
import { ContactSectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent {
  readonly copy = input.required<ContactSectionCopy>();
}
