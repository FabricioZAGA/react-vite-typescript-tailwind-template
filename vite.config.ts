import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': `${path.resolve(__dirname, './src/api/')}`,
      '@app': `${path.resolve(__dirname, './src/app/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@common': `${path.resolve(__dirname, './src/common/')}`,
      '@constants': `${path.resolve(__dirname, './src/constants/')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      '@redux': `${path.resolve(__dirname, './src/redux/')}`,
      '@routes': `${path.resolve(__dirname, './src/routes/')}`,
      '@styles': `${path.resolve(__dirname, './src/styles/')}`,
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@res': `${path.resolve(__dirname, './src/res/')}`,
      '@mocks': `${path.resolve(__dirname, './src/mocks/')}`,
      '@interfaces': `${path.resolve(__dirname, './src/interfaces/')}`,
      '@types': `${path.resolve(__dirname, './src/types/')}`,
      '@utils': `${path.resolve(__dirname, './src/utils/')}`,
      '@enums': `${path.resolve(__dirname, './src/enums/')}`,
    },
  },
});
