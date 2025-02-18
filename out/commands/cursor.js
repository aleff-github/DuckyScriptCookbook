"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURSOR_COMMANDS = void 0;
const vscode = require("vscode");
// Here we define our commands with corresponding descriptions
exports.CURSOR_COMMANDS = [
    {
        label: "CURSOR KEYS",
        detail: "Cursor keys to navigate",
        doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`UP\` \`DOWN\` \`LEFT\` \`RIGHT\`

>> \`UPARROW\` \`DOWNARROW\` \`LEFTARROW\` \`RIGHTARROW\`

>> \`PAGEUP\` \`PAGEDOWN\` \`HOME\` \`END\`

>> \`INSERT\` \`DELETE\` \`DEL\` \`BACKSPACE\`

>> \`TAB\`

>> \`SPACE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: ""
    }, {
        label: "CURSOR.UP",
        detail: "Cursor keys to navigate up",
        doc: new vscode.MarkdownString(`
# UP

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`UP\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "UP"
    }, {
        label: "CURSOR.DOWN",
        detail: "Cursor keys to navigate down",
        doc: new vscode.MarkdownString(`
# DOWN

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DOWN\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "DOWN"
    }, {
        label: "CURSOR.LEFT",
        detail: "Cursor keys to navigate left",
        doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`LEFT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "LEFT"
    }, {
        label: "CURSOR.RIGHT",
        detail: "Cursor keys to navigate right",
        doc: new vscode.MarkdownString(`
# RIGHT

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`RIGHT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "RIGHT"
    }, {
        label: "CURSOR.UPARROW",
        detail: "Cursor keys to press UPARROW",
        doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`UPARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "UPARROW"
    }, {
        label: "CURSOR.DOWNARROW",
        detail: "Cursor keys to press DOWNARROW",
        doc: new vscode.MarkdownString(`
# DOWNARROW

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DOWNARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "DOWNARROW"
    }, {
        label: "CURSOR.LEFTARROW",
        detail: "Cursor keys to press LEFTARROW",
        doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`LEFTARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "LEFTARROW"
    }, {
        label: "CURSOR.RIGHTARROW",
        detail: "Cursor keys to press RIGHTARROW",
        doc: new vscode.MarkdownString(`
# LEFTARROW

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`RIGHTARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "RIGHTARROW"
    }, {
        label: "CURSOR.PAGEUP",
        detail: "Cursor keys to press PAGEUP",
        doc: new vscode.MarkdownString(`
# PAGEUP

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`PAGEUP\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "PAGEUP"
    }, {
        label: "CURSOR.PAGEDOWN",
        detail: "Cursor keys to press PAGEDOWN",
        doc: new vscode.MarkdownString(`
# PAGEDOWN

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`PAGEDOWN\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "PAGEDOWN"
    }, {
        label: "CURSOR.HOME",
        detail: "Cursor keys to press HOME",
        doc: new vscode.MarkdownString(`
# HOME

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`HOME\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "HOME"
    }, {
        label: "CURSOR.END",
        detail: "Cursor keys to press END",
        doc: new vscode.MarkdownString(`
# END

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`END\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "END"
    }, {
        label: "CURSOR.INSERT",
        detail: "Cursor keys to press INSERT",
        doc: new vscode.MarkdownString(`
# INSERT

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`INSERT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "INSERT"
    }, {
        label: "CURSOR.DELETE",
        detail: "Cursor keys to press DELETE",
        doc: new vscode.MarkdownString(`
# DELETE

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DELETE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "DELETE"
    }, {
        label: "CURSOR.DEL",
        detail: "Cursor keys to press DEL",
        doc: new vscode.MarkdownString(`
# DEL

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DEL\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "DEL"
    }, {
        label: "CURSOR.BACKSPACE",
        detail: "Cursor keys to press BACKSPACE",
        doc: new vscode.MarkdownString(`
# BACKSPACE

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`BACKSPACE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "BACKSPACE"
    }, {
        label: "CURSOR.TAB",
        detail: "Cursor keys to press TAB",
        doc: new vscode.MarkdownString(`
# TAB

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`TAB\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "TAB"
    }, {
        label: "CURSOR.SPACE",
        detail: "Cursor keys to press SPACE",
        doc: new vscode.MarkdownString(`
# SPACE

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`SPACE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "SPACE"
    }
];
//# sourceMappingURL=cursor.js.map