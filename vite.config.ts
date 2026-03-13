import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
    <rect width="1200" height="800" fill="#0b0b0b"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="64" fill="#ffffff">
      Condor Consulting Group
    </text>
  </svg>`

  const DATA_URI = 'data:image/svg+xml,' + encodeURIComponent(svg)

  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) return '\u0000figma:asset:' + source
      return null
    },
    load(id: string) {
      if (!id.startsWith('\u0000figma:asset:')) return null

      const source = id.slice('\u0000figma:asset:'.length)

      const map: Record<string, string> = {
        'figma:asset/b569dd567ea2795ee4dab8dbde7028b9e421190e.png': DATA_URI,
        'figma:asset/03ad1422ac65c3b3cf9ba1cb065eb44f027f0e3e.png': DATA_URI,
      }

      const url = map[source] ?? DATA_URI
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
