import {WebpackBuildOptions} from "./types/build.types";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildWebpackDevServer(options: WebpackBuildOptions):DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}
