"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LED_COMMANDS = void 0;
const vscode = require("vscode");
exports.LED_COMMANDS = [
    {
        label: "LED-COMMANDS",
        detail: "List of all led commands",
        doc: new vscode.MarkdownString(`
# The LED

The USB Rubber Ducky includes an LED which may be helpful when deploying certain payloads where feedback is important.

\`LED_OFF\`

\`LED_R\`

\`LED_G\`

`),
        text: ""
    }, {
        label: "LED.LED_OFF",
        detail: "",
        doc: new vscode.MarkdownString(`
# LED_OFF

The \`LED_OFF\` command will disable all LED modes.

`),
        text: "LED_OFF"
    }, {
        label: "LED.LED_R",
        detail: "",
        doc: new vscode.MarkdownString(`
# LED_R

The \`LED_R\` command will enable the red LED.

`),
        text: "LED_R"
    }, {
        label: "LED.LED_G",
        detail: "",
        doc: new vscode.MarkdownString(`
# LED_G

The \`LED_G\` command will enable the green LED.

`),
        text: "LED_G"
    }
];
//# sourceMappingURL=led.js.map