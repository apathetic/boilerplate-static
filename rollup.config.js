import buble from 'rollup-plugin-buble';              // quicker, simpler babel
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const name = require('./package.json').name;
const version = require('./package.json').version;

export default {
  entry: `src/js/main.js`,
  dest: `dist/js/main.min.js`,
  banner: '/* ' + name + '. v.' + version + ' */\n',
  moduleName: name,
  format: 'iife',
  sourceMap: true,
  plugins: [
    resolve({
      jsnext: true,
    }),
    commonjs(),
    buble(),
    uglify()
  ]
};
