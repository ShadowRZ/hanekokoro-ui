import { solidPlugin } from 'esbuild-plugin-solid';
import { type Options, defineConfig } from 'tsup';
import Icons from 'unplugin-icons/esbuild';

function generateConfig(jsx: boolean): Options {
  return {
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    clean: true,
    dts: !jsx,
    entry: ['src/index.tsx', 'src/panda-preset/index.ts'],
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
    outExtension() {
      return jsx ? { js: '.jsx' } : {};
    },
    external: [/@shadowrz\/hanekokoro-ui/],
    esbuildPlugins: [Icons({ compiler: 'solid' }), ...(jsx ? [] : [solidPlugin({ solid: { generate: 'dom' } })])],
  };
}

export default defineConfig([generateConfig(false), generateConfig(true)]);