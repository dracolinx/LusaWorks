import { CommonModule } from '@angular/common';
import { Component, OnDestroy, effect, input, signal } from '@angular/core';
import { HeroSectionCopy } from '../../models/localized-copy';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSectionComponent implements OnDestroy {
  readonly copy = input.required<HeroSectionCopy>();
  protected readonly typedDescription = signal('');
  private typingTimer?: number;

  constructor() {
    effect(() => {
      const text = this.getLeadText(this.copy().description);
      this.startTyping(text);
    });
  }

  ngOnDestroy(): void {
    this.clearTypingTimer();
  }

  private startTyping(text: string): void {
    this.clearTypingTimer();
    this.typedDescription.set('');

    if (typeof window === 'undefined') {
      this.typedDescription.set(text);
      return;
    }

    let index = 0;
    this.typingTimer = window.setInterval(() => {
      index += 1;
      this.typedDescription.set(text.slice(0, index));
      if (index >= text.length) {
        this.clearTypingTimer();
      }
    }, 16);
  }

  private clearTypingTimer(): void {
    if (this.typingTimer !== undefined) {
      window.clearInterval(this.typingTimer);
      this.typingTimer = undefined;
    }
  }

  private getLeadText(description: string): string {
    if (description.length <= 240) return description;
    const clip = description.slice(0, 240);
    const cutAt = clip.lastIndexOf(' ');
    return `${clip.slice(0, cutAt > 120 ? cutAt : 240)}...`;
  }
}
