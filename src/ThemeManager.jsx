class ThemeManager {
  static instance;

  constructor() {
    if (ThemeManager.instance) {
      return ThemeManager.instance;
    }
    this.theme = 'Light'; 
    ThemeManager.instance = this;
  }

  setTheme(theme) {
    this.theme = theme;
  }

  getTheme() {
    return this.theme;
  }
}
export const themeManager = new ThemeManager(); 