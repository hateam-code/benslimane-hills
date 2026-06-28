import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // Important pour Hostinger / GitHub Pages :
    // génère des chemins relatifs au lieu de chemins absolus
    base: './',

    plugins: [
      react(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },

    build: {
      // Le dossier final à envoyer sur Hostinger
      outDir: 'dist',

      // Le dossier où Vite mettra les fichiers JS/CSS/images compilés
      assetsDir: 'assets',

      // Nettoie dist avant chaque nouveau build
      emptyOutDir: true,

      // Désactive les sourcemaps en production
      sourcemap: false,
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});