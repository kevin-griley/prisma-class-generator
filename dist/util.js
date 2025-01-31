"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTSFile = exports.toArray = exports.parseNumber = exports.parseBoolean = exports.log = exports.wrapQuote = exports.wrapArrowFunction = exports.arrayify = exports.uniquify = exports.getRelativeTSPath = exports.capitalizeFirst = void 0;
const internals_1 = require("@prisma/internals");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const generator_1 = require("./generator");
const error_handler_1 = require("./error-handler");
const capitalizeFirst = (src) => {
    return src.charAt(0).toUpperCase() + src.slice(1);
};
exports.capitalizeFirst = capitalizeFirst;
const getRelativeTSPath = (from, to) => {
    let rel = path
        .relative(path.resolve(path.dirname(from)), to)
        .replace('.ts', '');
    if (path.dirname(from) === path.dirname(to)) {
        rel = `./${rel}`;
    }
    return rel;
};
exports.getRelativeTSPath = getRelativeTSPath;
const uniquify = (src) => {
    return [...new Set(src)];
};
exports.uniquify = uniquify;
const arrayify = (src) => {
    return src + '[]';
};
exports.arrayify = arrayify;
const wrapArrowFunction = (field) => {
    if (typeof field.type !== 'string') {
        return `() => unknown`;
    }
    return `() => ${field.type}`;
};
exports.wrapArrowFunction = wrapArrowFunction;
const wrapQuote = (field) => {
    if (typeof field.type !== 'string') {
        return `'unknown'`;
    }
    return `'${field.type}'`;
};
exports.wrapQuote = wrapQuote;
const log = (src) => {
    internals_1.logger.info(`[${generator_1.GENERATOR_NAME}]:${src}`);
};
exports.log = log;
const parseBoolean = (value) => {
    if (['true', 'false'].includes(value.toString()) === false) {
        throw new error_handler_1.GeneratorFormatNotValidError(`parseBoolean failed : "${value}" is not boolean type`);
    }
    return value.toString() === 'true';
};
exports.parseBoolean = parseBoolean;
const parseNumber = (value) => {
    const numbered = Number(value);
    if (Number.isNaN(numbered)) {
        throw new error_handler_1.GeneratorFormatNotValidError(`parseNumber failed : "${value}" is not number type`);
    }
    return numbered;
};
exports.parseNumber = parseNumber;
const toArray = (value) => {
    return Array.isArray(value) ? value : [value];
};
exports.toArray = toArray;
const writeTSFile = (fullPath, content, dryRun = true) => {
    (0, exports.log)(`${dryRun ? '[dryRun] ' : ''}Generate ${fullPath}`);
    if (dryRun) {
        console.log(content);
        return;
    }
    const dirname = path.dirname(fullPath);
    if (fs.existsSync(dirname) === false) {
        fs.mkdirSync(dirname, { recursive: true });
    }
    fs.writeFileSync(fullPath, content);
};
exports.writeTSFile = writeTSFile;
//# sourceMappingURL=util.js.map