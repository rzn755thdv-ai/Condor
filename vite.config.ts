import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) return '\u0000figma:asset:' + source
      return null
    },
    load(id: string) {
      if (!id.startsWith('\u0000figma:asset:')) return null

      const url = 'https://placehold.co/1000x700/111111/FFFFFF.png?text=Condor'
      return `export default "${url}";`
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.vcf'],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        digitalCard: path.resolve(__dirname, 'digital-card.html'),
      },
    },
  },
})
