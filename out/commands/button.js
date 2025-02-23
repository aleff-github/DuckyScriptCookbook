"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUTTON_COMMANDS = void 0;
const vscode = require("vscode");
exports.BUTTON_COMMANDS = [
    {
        label: "BUTTON-COMMANDS",
        detail: "List of all button commands",
        doc: new vscode.MarkdownString(`
# BUTTON COMMANDS

By default, if no other button command is currently in use, pressing the button during payload execution will make the USB Rubber Ducky stop any further keystroke injection. It will then become an ordinary USB flash drive, commonly referred to as "arming mode".

\`WAIT_FOR_BUTTON_PRESS\`

\`BUTTON_DEF\`

\`DISABLE_BUTTON\`

\`ENABLE_BUTTON\`

`),
        text: ""
    }, {
        label: "BUTTON.WAIT_FOR_BUTTON_PRESS",
        detail: "Wait until button is pressed",
        doc: new vscode.MarkdownString(`
# BUTTON COMMANDS

Halts payload execution until a button press is detected. When this command is reached in the payload, no further execution will occur.

\`\`\`
STRING Press the button...
WAIT_FOR_BUTTON_PRESS
STRING The button was pressed!
\`\`\`

`),
        text: "WAIT_FOR_BUTTON_PRESS"
    }, {
        label: "BUTTON.BUTTON_DEF",
        detail: "Define button",
        doc: new vscode.MarkdownString(`
# BUTTON_DEF

The \`BUTTON_DEF\` command defines a function which will execute when the button is pressed anytime within the payload so long as the button control is not already in use by the WAIT_FOR_BUTTON_PRESS command or other such function.

\`\`\`
BUTTON_DEF
    STRINGLN The button was pressed.
END_BUTTON

STRINGLN Press the button with the next 10 seconds
DELAY 10000
\`\`\`

`),
        text: "BUTTON_DEF\n\tREM Hello World!\nEND_BUTTON"
    }, {
        label: "BUTTON.DISABLE_BUTTON",
        detail: "Disable button",
        doc: new vscode.MarkdownString(`
# DISABLE_BUTTON

The \`DISABLE_BUTTON\` command prevents the button from calling the \`BUTTON_DEF\`.

`),
        text: "DISABLE_BUTTON"
    }, {
        label: "BUTTON.ENABLE_BUTTON",
        detail: "",
        doc: new vscode.MarkdownString(`
# ENABLE BUTTON

The \`ENABLE_BUTTON\` command allows pressing the button to call the \`BUTTON_DEF\`.

`),
        text: "ENABLE_BUTTON"
    }
];
//# sourceMappingURL=button.js.map