import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackBuildOptions } from './types/build.types';

export function buildWebpackRules(options: WebpackBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const tsLoader = {
        test: /\.([cm]?ts|tsx)$/,
        loader: 'ts-loader',
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const assetsResource = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/,
        type: 'asset/resource',
    };

    return [stylesLoader, babelLoader, tsLoader, svgLoader, assetsResource];
}
