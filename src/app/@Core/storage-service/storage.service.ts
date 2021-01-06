import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private appLang: string;

  constructor() {
    this.getAppLang();
  }

  private getAppLang(): void {
    const currentLang = localStorage.getItem('appLang');

    if (currentLang) {
      this.appLang = currentLang;
    }
  }

  get AppLang(): string {
    return this.appLang;
  }

  set AppLang(lang: string) {
    localStorage.setItem('appLang', lang);
    this.appLang = lang;
  }
}
