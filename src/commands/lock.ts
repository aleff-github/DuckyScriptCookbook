import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const LOCK_COMMANDS: CommandInfo[] = [
{
    label: "LOCK-KEYS",
    detail: "Lock keys toggle the lock state",
    doc: new vscode.MarkdownString(`
# LOCK KEYS

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

\`CAPSLOCK\`

\`NUMLOCK\`

\`SCROLLOCK\`


`),
    text: ""
},{
    label: "LOCK.CAPSLOCK",
    detail: "CAPSLOCK key",
    doc: new vscode.MarkdownString(`
# CAPSLOCK

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

\`CAPSLOCK\`

`),
    text: "CAPSLOCK"
},{
    label: "LOCK.NUMLOCK",
    detail: "NUMLOCK key",
    doc: new vscode.MarkdownString(`
# NUMLOCK

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

\`NUMLOCK\`

`),
    text: "NUMLOCK"
},{
    label: "LOCK.SCROLLOCK",
    detail: "SCROLLOCK key",
    doc: new vscode.MarkdownString(`
# SCROLLOCK

Lock keys toggle the lock state (on or off) and typically change the interpretation of subsequent keypresses. For example, caps lock generally makes all subsequent letter keys appear in uppercase.

\`SCROLLOCK\``),
    text: "SCROLLOCK"
}
];