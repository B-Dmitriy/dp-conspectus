import {WebpackBuildOptions} from "./types/build.types";
import webpack from "webpack";

export function buildWebpackResolve(options: WebpackBuildOptions): webpack.ResolveOptions {
    return {
        extensions: [".ts", ".tsx", ".js"],
    }
}
