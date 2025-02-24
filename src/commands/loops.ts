import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const LOOPS_COMMANDS: CommandInfo[] = [
{
    label: "WHILE",
    detail: "",
    doc: new vscode.MarkdownString(`
# WHILE

The block of code within the \`WHILE\` statement will continue to repeatedly execute for a number of times (called iterations) for as long as the condition of the \`WHILE\` statement is \`TRUE\`.

\`\`\`
VAR $FOO = 42
WHILE ( $FOO > 0 )
    STRINGLN This message will repeat 42 times.
    $FOO = ( $FOO - 1 )
END_WHILE

WHILE TRUE
    STRINGLN This is an infinite loop. This message repeats forever.
END_WHILE
\`\`\`

`),
    text: "WHILE ( )\n\tREM Hello World!\nEND_WHILE"
} 
];
