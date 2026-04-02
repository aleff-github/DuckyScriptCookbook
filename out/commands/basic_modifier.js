"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASIC_MODIFIER_COMMANDS = void 0;
const vscode = require("vscode");
exports.BASIC_MODIFIER_COMMANDS = [
    {
        label: "BASIC-MODIFIER-KEYS",
        detail: "Modifier keys held in combination",
        doc: new vscode.MarkdownString(`
# BASIC-MODIFIER

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`SHIFT\`

\`ALT\`

\`CONTROL\` or \`CTRL\`

\`COMMAND\`

\`WINDOWS\` or \`GUI\`

`),
        text: ""
    }, {
        label: "BASIC-MODIFIER.SHIFT",
        detail: "SHIFT modifier key",
        doc: new vscode.MarkdownString(`
# SHIFT

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`SHIFT\`

`),
        text: "SHIFT"
    }, {
        label: "BASIC-MODIFIER.ALT",
        detail: "ALT modifier key",
        doc: new vscode.MarkdownString(`
# ALT

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`ALT\`

`),
        text: "ALT"
    }, {
        label: "BASIC-MODIFIER.CONTROL",
        detail: "CONTROL modifier key",
        doc: new vscode.MarkdownString(`
# CONTROL

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`CONTROL\`

`),
        text: "CONTROL"
    }, {
        label: "BASIC-MODIFIER.CTRL",
        detail: "CTRL modifier key",
        doc: new vscode.MarkdownString(`
# CTRL

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`CTRL\`

`),
        text: "CTRL"
    }, {
        label: "BASIC-MODIFIER.COMMAND",
        detail: "COMMAND modifier key",
        doc: new vscode.MarkdownString(`
# COMMAND

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`COMMAND\`

`),
        text: "COMMAND"
    }, {
        label: "BASIC-MODIFIER.WINDOWS",
        detail: "WINDOWS modifier key",
        doc: new vscode.MarkdownString(`
# WINDOWS

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`WINDOWS\`

`),
        text: "WINDOWS"
    }, {
        label: "BASIC-MODIFIER.GUI",
        detail: "GUI modifier key",
        doc: new vscode.MarkdownString(`
# GUI

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

\`GUI\`

`),
        text: "GUI"
    }
];
//# sourceMappingURL=basic_modifier.js.map