import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        icons: [
          {
            src: '/pwa-64x64.png',
            type: 'image/png',
            sizes: '64x64',
          },
          {
            src: '/pwa-192x192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/pwa-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
          {
            src: '/maskable-icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
