const webpack = require('webpack');
const path = require('path');

// Create a separate module for fs/promises
const fsPromisesModulePath = path.resolve(__dirname, 'fs-promises-module.js');

module.exports = {
    configureWebpack: {
        resolve: {
            fallback: {
                "child_process": false,
                "fs": false,
                "fs/promises": fsPromisesModulePath,
                "os": false,
                "util": require.resolve("util/"),
                "path": require.resolve("path-browserify"),
                "stream": require.resolve("stream-browserify"),
                "buffer": require.resolve("buffer/")
            },
            alias: {
                'empty-module': path.resolve(__dirname, 'empty-module.js'),
                'fs-promises-module': fsPromisesModulePath
            }
        },
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
                const mod = resource.request.replace(/^node:/, '');
                switch (mod) {
                    case 'child_process':
                    case 'fs':
                    case 'os':
                        resource.request = 'empty-module';
                        break;
                    case 'fs/promises':
                        resource.request = 'fs-promises-module';
                        break;
                    case 'util':
                        resource.request = 'util/';
                        break;
                    case 'path':
                        resource.request = 'path-browserify';
                        break;
                    default:
                        resource.request = mod;
                }
            }),
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: 'process/browser'
            })
        ]
    }
}