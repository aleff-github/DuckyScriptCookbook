"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYLOAD_CONTROL_COMMANDS = void 0;
const vscode = require("vscode");
exports.PAYLOAD_CONTROL_COMMANDS = [
    {
        label: "PAYLOAD-CONTROL-COMMANDS",
        detail: "",
        doc: new vscode.MarkdownString(`
# PAYLOAD CONTROL COMMANDS

These simple commands exist to control the execution of a payload.

\`RESTART_PAYLOAD\`

\`STOP_PAYLOAD\`

\`RESET\`

`),
        text: ""
    }, {
        label: "PAYLOAD-CONTROL.RESTART_PAYLOAD",
        detail: "",
        doc: new vscode.MarkdownString(`
# RESTART PAYLOAD

The \`RESTART_PAYLOAD\` command ceases execution, restarting the payload from the beginning.

`),
        text: "RESTART_PAYLOAD"
    }, {
        label: "PAYLOAD-CONTROL.STOP_PAYLOAD",
        detail: "",
        doc: new vscode.MarkdownString(`
# STOP PAYLOAD

The \`STOP_PAYLOAD\` command ceases and further execution.

`),
        text: "STOP_PAYLOAD"
    }, {
        label: "PAYLOAD-CONTROL.RESET",
        detail: "",
        doc: new vscode.MarkdownString(`
# RESET

The \`RESET\` command clears the keystroke buffer, useful for debugging complex hold key states.

`),
        text: "RESET"
    }
];
//# sourceMappingURL=payload_control.js.map