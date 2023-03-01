import {WebpackBuildOptions} from "./types/build.types";
import webpack from "webpack";

export function buildWebpackRules(options: WebpackBuildOptions): webpack.RuleSetRule[] {

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
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
