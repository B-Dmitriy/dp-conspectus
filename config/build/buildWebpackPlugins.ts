import {WebpackBuildOptions} from "./types/build.types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function buildWebpackPlugins(options: WebpackBuildOptions): webpack.WebpackPluginInstance[] {

    const { paths } = options;

    const htmlPlugin = new HtmlWebpackPlugin({
        template: paths.html
    });

    const plugins = [htmlPlugin];

    return plugins;
}
