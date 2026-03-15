# 🎨 ThemeSwitch — React Design Patterns

A **React + Vite** application that implements a theme-switching feature as a practical demonstration of three essential React design patterns: **Singleton**, **Hooks**, and **Higher-Order Components (HOC)**.

---

## 🚀 Features

- 🌗 Light/Dark theme switching
- 🏛️ **Singleton Pattern** — single shared theme manager instance across the app
- 🪝 **Hooks Pattern** — custom React hook for consuming theme state
- 🧩 **Higher-Order Components (HOC)** — wrapping components with theme-aware behavior
- ⚡ Fast development with Vite + HMR
- 🎨 CSS-driven theming with smooth transitions
- 🧹 ESLint configured for clean, consistent code

---

## 🛠️ Tech Stack

| Technology   | Purpose                              |
|--------------|--------------------------------------|
| React        | UI component library                 |
| Vite         | Build tool & dev server              |
| JavaScript   | Primary language                     |
| CSS          | Styling & theme variables            |
| ESLint       | Code linting & quality enforcement   |

---

## 📁 Project Structure

```
ThemeSwitch/
├── public/               # Static assets
├── src/                  # React source code
│   ├── components/       # UI components (with HOC wrappers)
│   ├── hooks/            # Custom React hooks (Hooks Pattern)
│   ├── singleton/        # Theme manager singleton instance
│   ├── App.jsx           # Root component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles & CSS theme variables
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Project metadata & scripts
```

---

## 🧠 Design Patterns Explained

### 1. 🏛️ Singleton Pattern
A single `ThemeManager` instance is created once and shared throughout the entire application. This ensures a consistent, centralized source of truth for the current theme state — no duplication, no conflicts.

```js
// Only one instance is ever created
class ThemeManager {
  constructor() {
    if (ThemeManager.instance) return ThemeManager.instance;
    this.theme = 'light';
    ThemeManager.instance = this;
  }
}
```

### 2. 🪝 Hooks Pattern
A custom `useTheme` hook encapsulates the logic for reading and toggling the theme, making it easy to consume theme state in any functional component without prop drilling.

```js
// Clean, reusable hook
const { theme, toggleTheme } = useTheme();
```

### 3. 🧩 Higher-Order Components (HOC)
A `withTheme` HOC wraps components to automatically inject theme-related props, separating theming concerns from component logic and enabling reuse across multiple components.

```js
// Wrap any component with theme awareness
export default withTheme(MyComponent);
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rouamansour/ThemeSwitch.git
cd ThemeSwitch
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📦 Available Scripts

| Script            | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start the development server       |
| `npm run build`   | Build the app for production       |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint to check code quality   |

