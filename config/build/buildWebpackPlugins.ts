import {WebpackBuildOptions} from "./types/build.types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildWebpackPlugins(options: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;

    const progressPlugin = new webpack.ProgressPlugin();

    const htmlPlugin = new HtmlWebpackPlugin({
        template: paths.html
    });

    const miniCssPlugin = new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[id].css",
    });

    const bundleAnalisePlugin = new BundleAnalyzerPlugin({
        openAnalyzer: false,
        reportTitle: () => {
            const date = new Date();
            return `DP-conspectus ${date.toLocaleDateString()}`
        },
    });

    const plugins: webpack.WebpackPluginInstance[] = [htmlPlugin, progressPlugin];

    if (!isDev) {
        plugins.push(miniCssPlugin);
    }

    if (isDev) {
        plugins.push(bundleAnalisePlugin);
    }

    return plugins;
}
