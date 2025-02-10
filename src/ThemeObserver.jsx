class ThemeObserver {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(callback) {
      this.subscribers.push(callback);
    }
  
    unsubscribe(callback) {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }
  
    notify(theme) {
      this.subscribers.forEach(callback => callback(theme));
    }
  }
  
  export const themeObserver = new ThemeObserver();
  