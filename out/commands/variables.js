"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VARIABLES_COMMANDS = void 0;
const vscode = require("vscode");
exports.VARIABLES_COMMANDS = [
    {
        label: "VAR",
        detail: "",
        doc: new vscode.MarkdownString(`
# VAR

The \`VAR\` command will initiate a variable. Unlike constants, variables begin with a dollar sign ("\`$\`"). Variables contain unsigned integers with values from 0 to 65535. Booleans may be represented as well, either by \`TRUE\`/\`FALSE\` or any non-zero number and \`0\` respectively.

\`\`\`
VAR $BLINK = TRUE
VAR $BLINK_TIME = 1000
\`\`\`

`),
        text: "VAR"
    }
];
//# sourceMappingURL=variables.js.map