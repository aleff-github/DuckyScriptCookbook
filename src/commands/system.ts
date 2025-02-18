import * as vscode from 'vscode';
import { CommandInfo } from './structure'


// Here we define our commands with corresponding descriptions
export const SYSTEM_COMMANDS: CommandInfo[] = [
{
    label: "SYSTEM-KEYS",
    detail: "System keys",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`ENTER\`

\`ESCAPE\`

\`PAUSE BREAK\`

\`PRINTSCREEN\`

\`MENU APP\`

\`F1\` \`F2\` \`F3\` \`F4\` \`F5\` \`F6\` \`F7\` \`F8\` \`F9\` \`F0\` \`F11\` \`F12\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: ""
},{
    label: "SYSTEM.ENTER",
    detail: "ENTER system key",
    doc: new vscode.MarkdownString(`
# ENTER

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`ENTER\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "ENTER"
},{
    label: "SYSTEM.ESCAPE",
    detail: "ESCAPE system key",
    doc: new vscode.MarkdownString(`
# ESCAPE

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`ESCAPE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "ESCAPE"
},{
    label: "SYSTEM.PAUSE-BREAK",
    detail: "PAUSE BREAK system key",
    doc: new vscode.MarkdownString(`
# PAUSE BREAK

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`PAUSE BREAK\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "PAUSE BREAK"
},{
    label: "SYSTEM.PRINTSCREEN",
    detail: "PRINTSCREEN system key",
    doc: new vscode.MarkdownString(`
# PRINTSCREEN

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`PRINTSCREEN\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "PRINTSCREEN"
},{
    label: "SYSTEM.MENU-APP",
    detail: "MENU APP system key",
    doc: new vscode.MarkdownString(`
# MENU APP

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`MENU APP\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "MENU APP"
},{
    label: "SYSTEM.F1",
    detail: "F1 system key",
    doc: new vscode.MarkdownString(`
# F1

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F1\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F1"
},{
    label: "SYSTEM.F2",
    detail: "F2 system key",
    doc: new vscode.MarkdownString(`
# F2

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F2\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F2"
},{
    label: "SYSTEM.F3",
    detail: "F3 system key",
    doc: new vscode.MarkdownString(`
# F3

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F3\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F3"
},{
    label: "SYSTEM.F4",
    detail: "F4 system key",
    doc: new vscode.MarkdownString(`
# F4

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F4\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F4"
},{
    label: "SYSTEM.F5",
    detail: "F5 system key",
    doc: new vscode.MarkdownString(`
# F5

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F5\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F5"
},{
    label: "SYSTEM.F6",
    detail: "F6 system key",
    doc: new vscode.MarkdownString(`
# F6

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F6\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F6"
},{
    label: "SYSTEM.F7",
    detail: "F7 system key",
    doc: new vscode.MarkdownString(`
# F7

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F7\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F7"
},{
    label: "SYSTEM.F8",
    detail: "F8 system key",
    doc: new vscode.MarkdownString(`
# F8

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F8\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F8"
},{
    label: "SYSTEM.F9",
    detail: "F9 system key",
    doc: new vscode.MarkdownString(`
# F9

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F9\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F9"
},{
    label: "SYSTEM.F10",
    detail: "F10 system key",
    doc: new vscode.MarkdownString(`
# F10

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F10\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F10"
},{
    label: "SYSTEM.F11",
    detail: "F11 system key",
    doc: new vscode.MarkdownString(`
# F11

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F11\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F11"
},{
    label: "SYSTEM.F12",
    detail: "F12 system key",
    doc: new vscode.MarkdownString(`
# F12

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

\`F12\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F12"
}
];