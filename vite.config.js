import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createVuePlugin } from 'vite-plugin-vue2'
// import viteCompression from 'vite-plugin-compression';

import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import styleImport, { VantResolve } from 'vite-plugin-style-import';

import path from 'path';

const HOST = "0.0.0.0"
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

export default (/** if you want to use mode : { mode }*/) => {
    return defineConfig({
        base: "./",
        server: {
            host: HOST,
            port: process.env.PORT,
        },
        resolve: {
            alias: [
                {
                    find: '@/',
                    replacement: REPLACEMENT,
                },
                {
                    find: 'src/',
                    replacement: REPLACEMENT,
                },
            ],
        },
        plugins: [
            createVuePlugin(/* options */),
            Components({
                resolvers: [VantResolver()],
            }),
            styleImport({
                libs: [VantResolve()]
            }),
            legacy({
                targets: ['ie >= 11'],
                additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            }),
            // viteCompression()
        ],
    })
}


