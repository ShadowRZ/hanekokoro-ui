import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: 'src/index.tsx',
        'panda-preset': 'src/panda-preset/index.ts',
        'style-context': 'src/components/ui/styled/utils/create-style-context.tsx',
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${format}/${entryName}.js`,
    },
    rollupOptions: {
      external: [/@shadowrz\/hanekokoro-ui/, /@ark-ui\/solid/, 'solid-js', 'solid-js/web', 'solid-js/store'],
    },
  },
  plugins: [
    solidPlugin(),
    Icons({ compiler: 'solid' }),
    tsconfigPaths(),
    dts({
      outDir: 'dist/types',
      staticImport: true,
      insertTypesEntry: true,
      copyDtsFiles: false,
      aliasesExclude: [/@shadowrz\/hanekokoro-ui/, /@ark-ui\/solid/, 'solid-js', 'solid-js/web', 'solid-js/store'],
      include: ['src'],
      exclude: ['stories', 'node_modules/**'],
    }),
  ],
});
