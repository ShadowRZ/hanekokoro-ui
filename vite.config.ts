import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [solidPlugin(), Icons({ compiler: 'solid' }), tsconfigPaths()],
});
