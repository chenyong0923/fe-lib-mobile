import alias from '@rollup/plugin-alias';
import RollupCommonjs from '@rollup/plugin-commonjs';
import RollupJson from '@rollup/plugin-json';
import RollupNodeResolve from '@rollup/plugin-node-resolve';
import NodePath from 'path';
import RollupCopy from 'rollup-plugin-copy';
import RollupTypescript from 'rollup-plugin-typescript2';

import Package from '../package.json';

const resolveFile = (path) => NodePath.resolve(__dirname, '..', path);
const projectRootDir = NodePath.resolve(__dirname);

const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react',
];

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: false,
    },
  ],
  external: externalPackages,
  plugins: [
    alias({
      entries: [
        { find: '~', replacement: NodePath.resolve('/') },
        { find: '@', replacement: NodePath.resolve('src') },
      ],
    }),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json'),
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist'),
        },
      ],
    }),
  ],
};
