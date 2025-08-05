// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ Use relative paths for Vercel deployment
  server: { port: 5173 }
});
