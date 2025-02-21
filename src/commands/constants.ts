import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const CONSTANTS_COMMANDS: CommandInfo[] = [
{
    label: "DEFINE",
    detail: "",
    doc: new vscode.MarkdownString(`
# DEFINE

The \`DEFINE\` command is used to define a constant. One may consider the use of a \`DEFINE\` within a payload like a find-and-replace at time of compile.

\`\`\`
DEFINE #WAIT 2000
DEFINE #TEXT Hello World
DEFINE #MYURL example.com
DELAY #WAIT
STRINGLN #TEXT
STRING https://#MYURL
\`\`\`

`),
    text: "DEFINE"
} 
];
