import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { WebpackBuildOptions } from './types/build.types';

export function buildWebpackDevServer(options: WebpackBuildOptions):DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
