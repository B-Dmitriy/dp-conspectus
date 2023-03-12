import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { WebpackBuildOptions } from './types/build.types';

export function buildWebpackPlugins(options: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;

    const progressPlugin = new webpack.ProgressPlugin();

    const htmlPlugin = new HtmlWebpackPlugin({
        template: paths.html,
    });

    const miniCssPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css',
    });

    const bundleAnalisePlugin = new BundleAnalyzerPlugin({
        openAnalyzer: false,
        reportTitle: () => {
            const date = new Date();
            return `DP-conspectus ${date.toLocaleDateString()}`;
        },
    });

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: isDev,
    });

    const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin({
        overlay: false,
    });

    const plugins: webpack.WebpackPluginInstance[] = [htmlPlugin, progressPlugin, definePlugin];

    if (!isDev) {
        plugins.push(miniCssPlugin);
    }

    if (isDev) {
        plugins.push(bundleAnalisePlugin);
        plugins.push(reactRefreshWebpackPlugin);
    }

    return plugins;
}
