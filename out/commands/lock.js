"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCK_COMMANDS = void 0;
const vscode = require("vscode");
exports.LOCK_COMMANDS = [
    {
        label: "LOCK-KEYS",
        detail: "Lock keys toggle the lock state",
        doc: new vscode.MarkdownString(`
# LOCK KEYS

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

>> \`CAPSLOCK\`

>> \`NUMLOCK\`

>> \`SCROLLOCK\`


*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: ""
    }, {
        label: "LOCK.CAPSLOCK",
        detail: "CAPSLOCK key",
        doc: new vscode.MarkdownString(`
# CAPSLOCK

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

>> \`CAPSLOCK\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "CAPSLOCK"
    }, {
        label: "LOCK.NUMLOCK",
        detail: "NUMLOCK key",
        doc: new vscode.MarkdownString(`
# NUMLOCK

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

>> \`NUMLOCK\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "NUMLOCK"
    }, {
        label: "LOCK.SCROLLOCK",
        detail: "SCROLLOCK key",
        doc: new vscode.MarkdownString(`
# SCROLLOCK

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

>> \`SCROLLOCK\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
        text: "SCROLLOCK"
    }
];
//# sourceMappingURL=lock.js.map