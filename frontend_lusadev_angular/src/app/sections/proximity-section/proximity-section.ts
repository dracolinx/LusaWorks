import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProximitySectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-proximity-section',
  imports: [CommonModule],
  templateUrl: './proximity-section.html',
  styleUrl: './proximity-section.scss',
})
export class ProximitySectionComponent {
  readonly copy = input.required<ProximitySectionCopy>();

  readonly mapUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.copy().mapEmbedUrl),
  );

  constructor(private readonly sanitizer: DomSanitizer) {}
}
