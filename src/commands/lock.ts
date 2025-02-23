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

\`SCROLLOCK\`\`\`

`),
  text: "SCROLLOCK"
},{
    label: "LOCK.WAIT-FOR-COMMANDS",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR COMMANDS

USB HID devices contain both IN endpoints for data (keystrokes) from the keyboard to computer, and OUT endpoints for data (LED states) from the computer to the keyboard. In many cases the LED state control codes sent from the computer to the attached keyboard are sent to all attached "keyboards". Versions of macOS behave differently.

\`WAIT_FOR_CAPS_ON\` - *Pause until caps lock is turned on*

\`WAIT_FOR_CAPS_OFF\` - *Pause until caps lock is turned off*

\`WAIT_FOR_CAPS_CHANGE\` - *Pause until caps lock is toggled on or off*

\`WAIT_FOR_NUM_ON\` - *Pause until num lock is turned on*

\`WAIT_FOR_NUM_OFF\` - *Pause until num lock is turned off*

\`WAIT_FOR_NUM_CHANGE\` - *Pause until num lock is toggled on or off*

\`WAIT_FOR_SCROLL_ON\` - *Pause until scroll lock is turned on*

\`WAIT_FOR_SCROLL_OFF\` - *Pause until scroll lock is turned off*

\`WAIT_FOR_SCROLL_CHANGE\` - *Pause until scroll lock is toggled on or off*

\`\`\`
STRINGLN Hello,
STRINGLN [Press caps lock to continue...]
WAIT_FOR_CAPS_CHANGE
STRINGLN World!
\`\`\`

`),
  text: ""
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_CAPS_ON",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR CAPS ON

Pause until caps lock is turned on

`),
  text: "WAIT_FOR_CAPS_ON"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_CAPS_OFF",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR CAPS OFF

Pause until caps lock is turned off

`),
  text: "WAIT_FOR_CAPS_OFF"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_CAPS_CHANGE",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR CAPS CHANGE

Pause until caps lock is toggled on or off

`),
  text: "WAIT_FOR_CAPS_CHANGE"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_NUM_ON",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR NUM ON

Pause until num lock is turned on

`),
  text: "WAIT_FOR_NUM_ON"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_NUM_OFF",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR NUM OFF

Pause until num lock is turned off

`),
  text: "WAIT_FOR_NUM_OFF"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_NUM_CHANGE",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR NUM CHANGE

Pause until num lock is toggled on or off

`),
  text: "WAIT_FOR_NUM_CHANGE"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_SCROLL_ON",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR SCROLL ON

Pause until scroll lock is turned on

`),
  text: "WAIT_FOR_SCROLL_ON"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_SCROLL_OFF",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR SCROLL OFF

Pause until scroll lock is turned off

`),
  text: "WAIT_FOR_SCROLL_OFF"
},{
    label: "LOCK.WAIT-FOR-COMMANDS.WAIT_FOR_SCROLL_CHANGE",
    detail: "",
    doc: new vscode.MarkdownString(`
# WAIT FOR SCROLL CHANGE

Pause until scroll lock is toggled on or off

`),
  text: "WAIT_FOR_SCROLL_CHANGE"
},{
    label: "LOCK.SAVE_HOST_KEYBOARD_LOCK_STATE",
    detail: "",
    doc: new vscode.MarkdownString(`
# SAVE HOST KEYBOARD LOCK STATE

The currently reported lock key states may be saved and later recalled using the \`SAVE_HOST_KEYBOARD_LOCK_STATE\` and \`RESTORE_HOST_KEYBOARD_LOCK_STATE\` commands.

\`\`\`
REM Save the LED states of the primary keyboard
SAVE_HOST_KEYBOARD_LOCK_STATE
REM Change the lock states
CAPSLOCK
NUMLOCK
REM Restore the original lock states
RESTORE_HOST_KEYBOARD_LOCK_STATE
\`\`\`

`),
  text: "SAVE_HOST_KEYBOARD_LOCK_STATE"
},{
    label: "LOCK.RESTORE_HOST_KEYBOARD_LOCK_STATE",
    detail: "",
    doc: new vscode.MarkdownString(`
# RESTORE HOST KEYBOARD LOCK STATE

The currently reported lock key states may be saved and later recalled using the \`SAVE_HOST_KEYBOARD_LOCK_STATE\` and \`RESTORE_HOST_KEYBOARD_LOCK_STATE\` commands.

\`\`\`
REM Save the LED states of the primary keyboard
SAVE_HOST_KEYBOARD_LOCK_STATE
REM Change the lock states
CAPSLOCK
NUMLOCK
REM Restore the original lock states
RESTORE_HOST_KEYBOARD_LOCK_STATE
\`\`\`

`),
  text: "RESTORE_HOST_KEYBOARD_LOCK_STATE"
}
];