import webpack from "webpack";
import {WebpackBuildOptions} from "./types/build.types";
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';

export function buildWebpackRules(options: WebpackBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
            },
            {
                loader: "css-loader",
                options: {
                    modules: true,
                }
            },
            "sass-loader",
        ],
    };

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    const tsLoader = {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader"
    }

    return [stylesLoader, babelLoader, tsLoader]
}
