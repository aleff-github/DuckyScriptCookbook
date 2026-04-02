"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMBO_COMMANDS = void 0;
const vscode = require("vscode");
exports.COMBO_COMMANDS = [
    {
        label: "COMBO-KEYS",
        detail: "Modifier Key Combinations",
        doc: new vscode.MarkdownString(`
# COMBO KEYS

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`CTRL SHIFT\`

\`ALT SHIFT\`

\`COMMAND CTRL\`

\`COMMAND CTRL SHIFT\`

\`COMMAND OPTION\`

\`COMMAND OPTION SHIFT\`

\`CONTROL ALT DELETE\`

`),
        text: ""
    }, {
        label: "COMBO.CTRL-SHIFT",
        detail: "CTRL SHIFT modifier key combo",
        doc: new vscode.MarkdownString(`
# CTRL SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`CTRL SHIFT\`

`),
        text: "CTRL SHIFT"
    }, {
        label: "COMBO.ALT-SHIFT",
        detail: "ALT SHIFT modifier key combo",
        doc: new vscode.MarkdownString(`
# ALT SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`ALT SHIFT\`

`),
        text: "ALT SHIFT"
    }, {
        label: "COMBO.COMMAND-CTRL",
        detail: "COMMAND CTRL modifier key combo",
        doc: new vscode.MarkdownString(`
# COMMAND CTRL

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`COMMAND CTRL\`

`),
        text: "COMMAND CTRL"
    }, {
        label: "COMBO.COMMAND-CTRL-SHIFT",
        detail: "COMMAND CTRL SHIFT modifier key combo",
        doc: new vscode.MarkdownString(`
# COMMAND CTRL SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`COMMAND CTRL SHIFT\`

`),
        text: "COMMAND CTRL SHIFT"
    }, {
        label: "COMBO.COMMAND-OPTION",
        detail: "COMMAND OPTION modifier key combo",
        doc: new vscode.MarkdownString(`
# COMMAND OPTION

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`COMMAND OPTION\`

`),
        text: "COMMAND OPTION"
    }, {
        label: "COMBO.COMMAND-OPTION-SHIFT",
        detail: "COMMAND OPTION SHIFT modifier key combo",
        doc: new vscode.MarkdownString(`
# COMMAND OPTION SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`COMMAND OPTION SHIFT\`

`),
        text: "COMMAND OPTION SHIFT"
    }, {
        label: "COMBO.CONTROL-ALT-DELETE",
        detail: "CONTROL ALT DELETE modifier key combo",
        doc: new vscode.MarkdownString(`
# CONTROL ALT DELETE

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

\`CONTROL ALT DELETE\`

`),
        text: "CONTROL ALT DELETE"
    }
];
//# sourceMappingURL=combo.js.map