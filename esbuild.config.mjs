import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/components/**/*.tsx', 'src/components/**/*.ts', 'src/utils/**/*.tsx'],
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
});
