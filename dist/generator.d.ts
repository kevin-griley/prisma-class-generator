import { GeneratorOptions } from '@prisma/generator-helper';
export declare const GENERATOR_NAME = "Prisma Class Generator";
export declare const PrismaClassGeneratorOptions: {
    readonly makeIndexFile: {
        readonly desc: "make index file";
        readonly defaultValue: true;
    };
    readonly dryRun: {
        readonly desc: "dry run";
        readonly defaultValue: false;
    };
    readonly separateRelationFields: {
        readonly desc: "separate relation fields";
        readonly defaultValue: true;
    };
    readonly useSwagger: {
        readonly desc: "use swagger decorator";
        readonly defaultValue: true;
    };
    readonly useGraphQL: {
        readonly desc: "use graphql";
        readonly defaultValue: false;
    };
    readonly useUndefinedDefault: {
        readonly desc: "use undefined default";
        readonly defaultValue: false;
    };
    readonly clientImportPath: {
        readonly desc: "set prisma import path instead @prisma/client";
        readonly defaultValue: any;
    };
    readonly useNonNullableAssertions: {
        readonly desc: "applies non-nullable assertions (!) to class properties";
        readonly defaultValue: false;
    };
    readonly preserveDefaultNullable: {
        readonly defaultValue: true;
        readonly desc: "preserve default nullable behavior";
    };
};
export type PrismaClassGeneratorOptionsKeys = keyof typeof PrismaClassGeneratorOptions;
export type PrismaClassGeneratorConfig = Partial<Record<PrismaClassGeneratorOptionsKeys, any>>;
export declare class PrismaClassGenerator {
    static instance: PrismaClassGenerator;
    _options: GeneratorOptions;
    rootPath: string;
    clientPath: string;
    constructor(options?: GeneratorOptions);
    get options(): GeneratorOptions;
    set options(value: GeneratorOptions);
    static getInstance(options?: GeneratorOptions): PrismaClassGenerator;
    getClientImportPath(): string;
    setPrismaClientPath(): void;
    run: () => Promise<void>;
    getConfig: () => PrismaClassGeneratorConfig;
}
