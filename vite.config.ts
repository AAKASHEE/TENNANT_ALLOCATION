import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Remove the video-player chunk since we don't have that component
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
    hmr: {
      clientPort: 5173, // Force WebSocket to use the same port
    },
    // For Docker/WSL or remote dev:
    // host: true,
  },
});
