import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  const PLACEHOLDER = 'https://via.placeholder.com/1200x800?text=Condor+asset'

  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        return '\u0000figma:asset:' + source
      }
      return null
    },
    load(id: string) {
      if (!id.startsWith('\u0000figma:asset:')) return null

      const source = id.slice('\u0000figma:asset:'.length)

      const map: Record<string, string> = {
        'figma:asset/b569dd567ea2795ee4dab8dbde7028b9e421190e.png':
          PLACEHOLDER,
        'figma:asset/03ad1422ac65c3b3cf9ba1cb065eb44f027f0e3e.png':
          PLACEHOLDER,
      }

      const url = map[source] ?? PLACEHOLDER

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
})
