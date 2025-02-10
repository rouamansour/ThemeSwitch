import { themeObserver } from './ThemeObserver';

class ThemeManager {
  static instance;

  constructor() {
    if (ThemeManager.instance) {
      return ThemeManager.instance;
    }
    this.theme = localStorage.getItem('theme') || 'light';
    ThemeManager.instance = this;
  }

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    themeObserver.notify(theme); // Notifier les abonnés
  }

  getTheme() {
    return this.theme;
  }
}

export const themeManager = new ThemeManager();
