import webpack from "webpack";
import {WebpackBuildOptions} from "./types/build.types";
import {buildWebpackPlugins} from "./buildWebpackPlugins";
import {buildWebpackRules} from "./buildWebpackRules";
import {buildWebpackDevServer} from "./buildWebpackDevServer";
import {buildWebpackResolve} from "./buildWebpackResolve";

export function buildWebpackConfig(options: WebpackBuildOptions): webpack.Configuration {
    const {mode, isDev, paths} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            publicPath: '/',
            clean: true,
        },
        resolve: buildWebpackResolve(options),
        plugins: buildWebpackPlugins(options),
        module: {
            rules: buildWebpackRules(options),
        },
        devServer: buildWebpackDevServer(options),
        devtool: isDev ? 'inline-source-map' : undefined,
    }
}
