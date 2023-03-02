import {WebpackBuildOptions} from "./types/build.types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildWebpackPlugins(options: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;

    const htmlPlugin = new HtmlWebpackPlugin({
        template: paths.html
    });

    const miniCssPlugin = new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[id].css",
    });

    const plugins: webpack.WebpackPluginInstance[] = [htmlPlugin];

    if (!isDev) {
        plugins.push(miniCssPlugin);
    }

    return plugins;
}
