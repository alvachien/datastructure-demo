import { Injectable, EventEmitter } from '@angular/core';

export interface DemoAppTheme {
  href: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
};

@Injectable()
export class ThemeStorage {
  static storageKey: string = 'demoapp-theme-storage-current';

  public onThemeUpdate: EventEmitter<DemoAppTheme> = new EventEmitter<DemoAppTheme>();

  public storeTheme(theme: DemoAppTheme): void {
    window.localStorage[ThemeStorage.storageKey] = JSON.stringify(theme);
    this.onThemeUpdate.emit(theme);
  }

  public getStoredTheme(): DemoAppTheme {
    return JSON.parse(window.localStorage[ThemeStorage.storageKey] || null);
  }

  public clearStorage(): void {
    window.localStorage.removeItem(ThemeStorage.storageKey);
  }
}
