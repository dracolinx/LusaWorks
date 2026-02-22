import { Injectable, signal } from '@angular/core';
import { LanguageCode } from '../models/localized-copy';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private static readonly STORAGE_KEY = 'lusadev_lang';

  private readonly currentLanguageSignal = signal<LanguageCode>(this.resolveInitialLanguage());
  readonly currentLanguage = this.currentLanguageSignal.asReadonly();

  setLanguage(language: LanguageCode): void {
    this.currentLanguageSignal.set(language);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LanguageService.STORAGE_KEY, language);
    }
  }

  private resolveInitialLanguage(): LanguageCode {
    if (typeof window === 'undefined') {
      return 'es';
    }

    const stored = window.localStorage.getItem(LanguageService.STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      return stored;
    }

    const browserLanguage = window.navigator.language.toLowerCase();
    return browserLanguage.startsWith('es') ? 'es' : 'en';
  }
}
