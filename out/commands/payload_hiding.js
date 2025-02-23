"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYLOAD_HIDING = void 0;
const vscode = require("vscode");
exports.PAYLOAD_HIDING = [
    {
        label: "PAYLOAD-HIDING-COMMANDS",
        detail: "",
        doc: new vscode.MarkdownString(`
# PAYLOAD HIDING

The \`inject.bin\` and \`seed.bin\` file may be hidden from the MicroSD card before implementing \`ATTACKMODE STORAGE\`. The \`HIDE_PAYLOAD\` and \`RESTORE_PAYLOAD\` commands must be run while using \`ATTACKMODE OFF\` or \`ATTACKMODE HID\`.

\`HIDE_PAYLOAD\`

\`RESTORE_PAYLOAD\`

`),
        text: ""
    }, {
        label: "PAYLOAD-HIDING.HIDE_PAYLOAD",
        detail: "",
        doc: new vscode.MarkdownString(`
# HIDE PAYLOAD

Hides the inject.bin and seed.bin files from the MicroSD card.

`),
        text: "HIDE_PAYLOAD"
    }, {
        label: "PAYLOAD-HIDING.RESTORE_PAYLOAD",
        detail: "",
        doc: new vscode.MarkdownString(`
# RESTORE PAYLOAD

Restores the inject.bin and seed.bin files to the MicroSD card.

\`\`\`
ATTACKMODE OFF
HIDE_PAYLOAD
ATTACKMODE HID STORAGE
DELAY 2000
STRINGLN The payload files are hidden.
ATTACKMODE HID
RESTORE_PAYLOAD
DELAY 2000
STRINGLN Restoring the payload files...
ATTACKMODE HID STORAGE
DELAY 2000
STRINGLN The payload files have been restored.
\`\`\`

`),
        text: "RESTORE_PAYLOAD"
    }
];
//# sourceMappingURL=payload_hiding.js.map