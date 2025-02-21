import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const ATTACKMODE_COMMANDS: CommandInfo[] = [
{
    label: "",
    detail: "List of all attack mode commands",
    doc: new vscode.MarkdownString(`
# ATTACKMODE

An attack mode is the device type that a USB Rubber Ducky, is functioning as or emulating. If no \`ATTACKMODE\` command is specified as the first command (excluding \`REM\`), the \`HID\` attack mode will execute, allowing the device to function as a keyboard. The \`ATTACKMODE\` command may be run multiple times within a payload, which may cause the device to be re-enumerated by the target if the attack mode changes.

## Required Parameters

|**ATTACKMODE Parameter**|**Description**|
|--|--|
|\`HID\`|*Functions as a Human Interface Device, or Keyboard, for keystroke injection.*|
|\`STORAGE\`|*Functions as USB Mass Storage, or a Flash Drive, for copying files to/from the target.*|
|\`HID STORAGE\`|*Functions as both USB Mass Storage and Human Interface Device*|
|\`OFF\`|*Will not function as any device. May be used to disconnect the device from the target.*|

\`\`\`
ATTACKMODE HID STORAGE
REM The USB Rubber Ducky will act as both a flash drive and keyboard
\`\`\`

## Optional Parameters

When using these optional parameters, \`VID\` and \`PID\` must be used as a set. Further, \`MAN\`, \`PROD\` and \`SERIAL\` must also be used as a set.

|**ATTACKMODE Parameter**|**Description**|
|--|--|
|\`VID_\`|*Vendor ID (16-bit HEX)*|
|\`PID_\`|*Product ID (16-bit HEX)*|
|\`MAN_\`|*Manufacturer (32 alphanumeric characters)*|
|\`PROD_\`|*Product (32 alphanumeric characters)*|
|\`SERIAL_\`|*Serial (12 digits)*|

\`\`\`
ATTACKMODE HID VID_046D PID_C31C MAN_HAK5 PROD_DUCKY SERIAL_1337
REM Emulated a Keyboard with the following values:
REM  - Vendor ID: 046D
REM  - Product ID: C31C
REM  - Manufacturer: HAK5
REM  - Product: DUCKY
REM  - Serial: 1337
\`\`\`

`),
    text: "ATTACKMODE "
},{
    label: "ATTACKMODE.SAVE_ATTACKMODE",
    detail: "",
    doc: new vscode.MarkdownString(`
# SAVE_ATTACKMODE

The \`SAVE_ATTACKMODE\` command will save the currently running \`ATTACKMODE\` state (including any specified \`VID\`, \`PID\`, \`MAN\`, \`PROD\` and \`SERIAL\` parameters) such that it may be later restored.

`),
    text: "SAVE_ATTACKMODE"
},{
    label: "ATTACKMODE.RESTORE_ATTACKMODE",
    detail: "",
    doc: new vscode.MarkdownString(`
# RESTORE_ATTACKMODE

The \`RESTORE_ATTACKMODE\` command will restore a previously saved \`ATTACKMODE\` state.

\`\`\`
ATTACKMODE HID VID_046D PID_C31C MAN_HAK5 PROD_DUCKY SERIAL_1337
DELAY 2000
SAVE_ATTACKMODE
STRING Hello
ATTACKMODE OFF
DELAY 5000
RESTORE_ATTACKMODE
DELAY 2000
STRING , World!
\`\`\`
`),
    text: "RESTORE_ATTACKMODE"
}
];
