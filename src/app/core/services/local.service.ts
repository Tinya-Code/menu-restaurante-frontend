import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Local {
  private readonly _platformId = inject(PLATFORM_ID);

  /**
   * Checks if the current environment is a browser.
   */
  private get isBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }


  set<T>(key: string, value: T): void {
    if (this.isBrowser) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error saving to localStorage: ${key}`, error);
      }
    }
  }


  get<T>(key: string): T | null {
    if (!this.isBrowser) return null;

    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${key}`, error);
      return null;
    }
  }

  remove(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }


  clear(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }


  exists(key: string): boolean {
    if (!this.isBrowser) return false;
    return localStorage.getItem(key) !== null;
  }
}
