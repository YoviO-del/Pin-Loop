import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // This builds your popup (the main React app)
        main: resolve(__dirname, 'index.html'),
        // This builds your content script specifically
        content: resolve(__dirname, 'src/content.jsx') 
      },
      output: {
        // This prevents the random letters (hashes) in filenames
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})