import path from "path";
import webpack from "webpack";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import HtmlWebpackPlugin from 'html-webpack-plugin';

const devConfig: DevServerConfiguration = {
    port: 8080,
    open: true
}

export default (): webpack.Configuration => {
    return {
        mode: 'development',
        entry: './src/index.tsx',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"]
        },
        plugins: [new HtmlWebpackPlugin({
            template: './public/index.html'
        })],
        module: {
            rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
                // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
                {test: /\.([cm]?ts|tsx)$/, loader: "ts-loader"},
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                            }
                        },
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
            ]
        },
        devServer: devConfig
    }
}
