# Para Nuxt 3 Starter Template

This template provides a minimal setup to get Para working in a Nuxt 3 application. It includes a basic Para client
initialization and the necessary configurations to support React components within Nuxt.

## Features

- Minimal Para client configuration using `@getpara/react-sdk`
- Pre-configured Para Modal setup
- Environment-based API key configuration
- React integration within Nuxt 3
- Client-side only rendering configuration
- Vite configuration with required plugins

## Prerequisites

- Para API Key (obtain from [developer.getpara.com](https://developer.getpara.com))

## Getting Started

1. Copy this template folder to your project location and rename it:

   ```bash
   cp -r path/to/para-starter-templates/with-vue-nuxt my-para-project
   cd my-para-project
   ```

2. Install dependencies (choose your preferred package manager):

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun
   bun install
   ```

3. Set up your Para API key:

   - Rename `.env.example` to `.env`
   - Update the API key:

   ```bash
   NUXT_PUBLIC_PARA_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

## Framework-Specific Details

This Nuxt 3 starter template includes several important configurations:

### Nuxt Configuration

The template includes specific Nuxt configuration to support React components and disable SSR. This is configured in
`nuxt.config.ts`:

```typescript
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  vite: {
    plugins: [react(), nodePolyfills()],
  },
});
```

Key points:

- Disables SSR for compatibility with Para Modal
- Configures Vite to process React components
- Includes necessary Node.js polyfills
- Uses @vitejs/plugin-react for React support

## Usage

1. Build upon the provided example component
2. Implement additional Para features as needed
3. Modify the ParaModal component props as required

For detailed documentation, visit [docs.getpara.com](https://docs.getpara.com)

## Example Implementation

For more complex implementations and examples, check out our [Examples Hub](https://github.com/para-org/Examples-Hub/).
You'll find examples of:

- Authentication options
- Signer implementations
- Session management
- Interactive tutorials
- Framework-specific code snippets
