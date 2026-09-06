import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        servizi: resolve(__dirname, 'servizi/index.html'),
        matrimoni: resolve(__dirname, 'matrimoni/index.html'),
        aziendali: resolve(__dirname, 'eventi-aziendali/index.html'),
        compleanni: resolve(__dirname, 'compleanni-18esimi/index.html'),
        cerimonie: resolve(__dirname, 'cerimonie/index.html'),
        genderReveal: resolve(__dirname, 'gender-reveal/index.html'),
        portfolio: resolve(__dirname, 'portfolio/index.html'),
        casiStudio: resolve(__dirname, 'casi-studio/index.html'),
        chiSiamo: resolve(__dirname, 'chi-siamo/index.html'),
        contatti: resolve(__dirname, 'contatti/index.html'),
      },
    },
  },
});
