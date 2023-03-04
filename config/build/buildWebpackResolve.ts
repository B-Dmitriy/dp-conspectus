import {WebpackBuildOptions} from "./types/build.types";
import webpack from "webpack";

export function buildWebpackResolve(options: WebpackBuildOptions): webpack.ResolveOptions {
    const { paths } = options;
    return {
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            I18n: paths.alias.i18n
        }
    }
}
