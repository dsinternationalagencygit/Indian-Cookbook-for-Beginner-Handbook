
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Shims process.env to ensure compatibility with the provided Gemini API guidelines
    'process.env': process.env
  }
});
