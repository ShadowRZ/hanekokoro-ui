import { solidPlugin } from 'esbuild-plugin-solid';
import { type Options, defineConfig } from 'tsup';

function generateConfig(jsx: boolean): Options {
  return {
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    clean: true,
    dts: !jsx,
    entry: ['src/components/index.tsx', 'src/components/*/index.ts'],
    outDir: 'dist/',
    treeshake: { preset: 'smallest' },
    replaceNodeEnv: true,
    esbuildOptions(options) {
      if (jsx) {
        options.jsx = 'preserve';
      }
      options.chunkNames = '[name]/[hash]';
      options.drop = ['console', 'debugger'];
    },
    external: [/@hanekokoro-ui\/styled-system/, /@kobalte\/core/, 'solid-js', 'solid-js/web', 'solid-js/store'],
    outExtension() {
      return { js: jsx ? '.jsx' : '.mjs' };
    },
    esbuildPlugins: jsx ? [] : [solidPlugin({ solid: { generate: 'dom' } })],
  };
}

export default defineConfig([generateConfig(false), generateConfig(true)]);
