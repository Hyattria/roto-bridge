import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/main.esm.js',
      format: 'es'
    },
    {
      file: `dist/main.iife.js`,
      format: 'iife',
      name: 'rotoBridge'
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    eslint(),
    babel({
      plugins: ['external-helpers']
    }),
    uglify({}, minify)
  ],
  external: []
}
