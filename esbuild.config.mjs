import * as esbuild from 'esbuild';
import unpluginIcons from 'unplugin-icons/esbuild';

await esbuild.build({
  entryPoints: ['src/index.tsx', 'src/components/**/*.tsx'],
  entryNames: '[dir]/[name]',
  outbase: 'src',
  jsx: 'preserve',
  jsxImportSource: 'solid-js',
  outdir: 'dist/solid',
  outExtension: {
    '.js': '.jsx',
  },
  minify: false,
  minifyWhitespace: false,
  format: 'esm',
  plugins: [
    unpluginIcons({ compiler: 'solid' }),
  ],
});
