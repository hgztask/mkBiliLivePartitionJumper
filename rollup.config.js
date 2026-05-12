import importContent from 'rollup-plugin-import-content'
import esbuild from 'rollup-plugin-esbuild';
import test_plugin from './plugin/rollup-test-plugin.js'
import typescript from "@rollup/plugin-typescript";

// 开发环境为 true，生产环境为 false，默认为开发环境
const __DEV__ = (process.env.ROLLUP_ENV || 'development') === 'development';
export default {
    // 性能监控
    perf: !__DEV__,
    input: 'src/main.ts',
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: false,
            outputToFilesystem: true
        }),
        esbuild({
            include: /src\/.*\.(ts|js)$/, // 仅处理src目录下的ts/js文件
            // 核心配置
            target: 'es2020',
            loaders: {'.ts': 'ts', '.js': 'js'},
            charset: 'utf8', // 明确使用 UTF-8 编码
            // 生产环境优化
            minify: false,
            // none不保留注释，inline注释
            legalComments: __DEV__ ? 'inline' : 'none',
        }),
        importContent({
            fileName: ['.css']
        }),
        test_plugin({
            isDev: __DEV__,
            clearComments: !__DEV__
        })
    ],
    output: {
        file: 'dist/local_build.js',
        format: 'iife',
        compact: true,
    }
};
