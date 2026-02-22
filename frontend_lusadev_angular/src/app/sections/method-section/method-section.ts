import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MethodSectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-method-section',
  imports: [CommonModule],
  templateUrl: './method-section.html',
  styleUrl: './method-section.scss',
})
export class MethodSectionComponent {
  readonly copy = input.required<MethodSectionCopy>();
}
