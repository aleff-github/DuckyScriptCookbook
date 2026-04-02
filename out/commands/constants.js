"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANTS_COMMANDS = void 0;
const vscode = require("vscode");
exports.CONSTANTS_COMMANDS = [
    {
        label: "DEFINE",
        detail: "",
        doc: new vscode.MarkdownString(`
# DEFINE

The \`DEFINE\` command is used to define a constant. One may consider the use of a \`DEFINE\` within a payload like a find-and-replace at time of compile.

\`\`\`
DEFINE #WAIT 2000
DEFINE #TEXT Hello World
DEFINE #MYURL example.com
DELAY #WAIT
STRINGLN #TEXT
STRING https://#MYURL
\`\`\`

`),
        text: "DEFINE"
    }
];
//# sourceMappingURL=constants.js.map