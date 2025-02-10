class ThemeManager {
    static instance;
  
    constructor() {
      if (ThemeManager.instance) {
        return ThemeManager.instance;
      }
      this.theme = 'light'; // Thème par défaut
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
  