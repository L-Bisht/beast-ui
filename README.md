# Beast UI 🦁

A bold, expressive, and highly accessible React component library built for speed and developer experience.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/L-Bisht/beast-ui)

## Features

- 🎨 **Bold & Expressive:** Vibrant, saturated colors and premium aesthetics.
- ♿️ **Accessible by Default:** Built on top of `react-aria` and `react-stately` for top-tier ARIA compliance, focus management, and keyboard navigation.
- 📦 **Modular:** Consume the whole library or just the pieces you need.
- 🌓 **Dark Mode:** Seamless light and dark mode switching via CSS variables.
- 🧩 **Comprehensive:** 30+ components covering Layout, Display, Inputs, Surfaces, Feedback, Overlays, and Navigation.
- 🛠 **Strongly Typed:** Written in strict TypeScript for excellent autocomplete and developer feedback.

## Packages

Beast UI is a modular ecosystem consisting of several core packages.

| Package | Description |
| --- | --- |
| `@beast-ui/system` | Design tokens, CSS variables, and global styling infrastructure. |
| `@beast-ui/core` | The core React component library. |
| `@beast-ui/icons` | Custom SVG icon components. |

## Quick Start

### Installation

```bash
npm install @beast-ui/core @beast-ui/system
# or
yarn add @beast-ui/core @beast-ui/system
# or
pnpm add @beast-ui/core @beast-ui/system
```

### Setup

Import the global styles at the root of your application (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@beast-ui/system/styles.css';
import { BeastProvider } from '@beast-ui/core';

function App() {
  return (
    <BeastProvider theme="light">
      <YourApp />
    </BeastProvider>
  );
}
```

### Usage

```tsx
import { Button, ToastProvider, useToast } from '@beast-ui/core';

function MyComponent() {
  const toast = useToast();

  return (
    <Button 
      variant="solid" 
      color="primary" 
      onClick={() => toast.success('It works!')}
    >
      Click Me
    </Button>
  );
}

// Ensure <ToastProvider /> is rendered somewhere near the root of your app
```

## Links

- **GitHub Repository:** [https://github.com/L-Bisht/beast-ui](https://github.com/L-Bisht/beast-ui)

## License

MIT
