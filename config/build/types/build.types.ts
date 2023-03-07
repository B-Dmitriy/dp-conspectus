export type ModeType = 'production' | 'development';

export interface EnvVariables {
    mode: ModeType,
    port?: number;
}

export interface WebpackBuildOptions {
    mode: ModeType;
    isDev: boolean;
    port: number;
    paths: {
        entry: string;
        output: string;
        html: string;
        src: string;
        alias: {
            i18n: string;
        }
    }
}
