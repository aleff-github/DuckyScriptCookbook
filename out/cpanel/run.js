"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const fs = require("fs");
class Code {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    duckyscript(code_type) {
        let code = '';
        if (fs.existsSync(code_type)) {
            code = fs.readFileSync(code_type, 'utf-8');
        }
        return code;
    }
}
exports.Code = Code;
//# sourceMappingURL=run.js.map