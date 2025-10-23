# Theme System Quick Guide

## 🎨 How the Theme System Works

### Theme Context
The theme system is powered by React Context (`ThemeContext.jsx`) which:
- Manages the current theme state (light/dark)
- Persists theme preference to localStorage
- Provides `theme` and `toggleTheme` to all components

### CSS Variables
All colors are defined as CSS variables in `index.css`:
- Light theme: `[data-theme="light"]`
- Dark theme: `[data-theme="dark"]`

### Theme Toggle
Located in the Header component - a sun/moon icon button that switches themes with a smooth animation.

---

## 🎨 Customizing Colors

### To Change Brand Colors:
Edit `src/index.css` and modify the accent colors:

```css
/* Light Theme */
[data-theme="light"] {
    --accent-primary: #6366f1;        /* Change this */
    --accent-primary-hover: #4f46e5;  /* And this */
    --accent-secondary: #8b5cf6;      /* And this */
}

/* Dark Theme */
[data-theme="dark"] {
    --accent-primary: #818cf8;        /* Change this */
    --accent-primary-hover: #6366f1;  /* And this */
    --accent-secondary: #a78bfa;      /* And this */
}
```

### To Modify Gradients:
```css
--accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--accent-gradient-alt: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

---

## 🎯 Using Theme in Components

### Get Current Theme:
```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div>
            Current theme: {theme}
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
}
```

### In CSS:
Just use the CSS variables - they automatically update when theme changes:
```css
.my-element {
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
}
```

---

## 🎨 Available CSS Variables

### Colors
- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- `--text-primary`, `--text-secondary`, `--text-tertiary`
- `--accent-primary`, `--accent-secondary`
- `--border-primary`, `--border-secondary`

### Spacing
- `--spacing-xs` (0.5rem)
- `--spacing-sm` (1rem)
- `--spacing-md` (1.5rem)
- `--spacing-lg` (2rem)
- `--spacing-xl` (3rem)
- `--spacing-2xl` (4rem)
- `--spacing-3xl` (6rem)

### Effects
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- `--transition-fast`, `--transition-base`, `--transition-slow`

### Glass Effect
- `--glass-bg`
- `--glass-border`
- `--backdrop-blur`

---

## 💡 Tips

### Creating Theme-Aware Components:
1. Always use CSS variables instead of hardcoded colors
2. Test in both light and dark themes
3. Ensure sufficient contrast for readability
4. Use the `useTheme()` hook for JavaScript logic

### Adding New Colors:
1. Add to both `[data-theme="light"]` and `[data-theme="dark"]`
2. Use semantic names (`--bg-tertiary` not `--color-gray-300`)
3. Maintain consistency with existing palette

### Performance:
- Theme switches use CSS transitions (hardware accelerated)
- No page reload required
- Preference persisted to localStorage

---

## 🚀 Best Practices

### ✅ DO:
- Use CSS variables for all colors
- Test both themes
- Maintain contrast ratios
- Use semantic naming

### ❌ DON'T:
- Hardcode colors (`color: #000000`)
- Forget to test dark theme
- Override theme colors inline
- Use too many different colors

---

## 🎨 Design Tokens

### Light Theme Philosophy:
- Clean, bright, professional
- High contrast for readability
- Subtle shadows for depth
- Vibrant accents for interaction

### Dark Theme Philosophy:
- Easy on the eyes
- Sufficient contrast
- Deeper shadows for depth
- Glowing accents for focus

---

## 🔍 Troubleshooting

### Theme not switching?
- Check if ThemeProvider wraps your app
- Verify `data-theme` attribute on `<html>`
- Clear localStorage and refresh

### Colors not updating?
- Make sure you're using CSS variables
- Check if you have hardcoded colors
- Verify variable names are correct

### Saved preference not working?
- Check localStorage in DevTools
- Verify ThemeProvider is mounted
- Clear cache and test again

---

Enjoy your beautiful light/dark theme! 🌓✨

