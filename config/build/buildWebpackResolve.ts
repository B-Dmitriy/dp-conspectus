import {WebpackBuildOptions} from "./types/build.types";
import webpack from "webpack";

export function buildWebpackResolve(options: WebpackBuildOptions): webpack.ResolveOptions {
    const { paths } = options;
    return {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            I18n: paths.alias.i18n
        }
    }
}
