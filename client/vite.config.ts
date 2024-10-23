import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
         '@app': path.resolve(__dirname, './src/app'),
         '@config': path.resolve(__dirname, './src/config'),
         '@modules': path.resolve(__dirname, './src/modules'),
         '@pages': path.resolve(__dirname, './src/pages'),
         '@providers': path.resolve(__dirname, './src/providers'),
         '@theme': path.resolve(__dirname, './src/theme'),
         '@ui': path.resolve(__dirname, './src/ui')
      },
   },
});
