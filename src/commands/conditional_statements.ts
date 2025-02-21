import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const CONDITIONAL_STATEMENTS_COMMANDS: CommandInfo[] = [
{
    label: "CONDITIONAL-STATEMENTS",
    detail: "",
    doc: new vscode.MarkdownString(`
# CONDITIONAL STATEMENTS

Conditional statements, loops and functions allow for dynamic execution.

\`IF\`

\`ELSE\`

`),
    text: ""
},{
    label: "CONDITIONAL-STATEMENTS.IF",
    detail: "",
    doc: new vscode.MarkdownString(`
# IF

The flow control statement \`IF\` will determine whether or not to execute its block of code based on the evaluation of an expression. One way to interpret an \`IF\` statement is to read it as "\`IF\` this condition is true, \`THEN\` do this".

\`\`\`
$FOO = 42
$BAR = 1337
IF ( $FOO < $BAR ) THEN
  STRING 42 is less than 1337
END_IF
\`\`\`

`),
    text: "IF ( ) THEN"
},{
    label: "CONDITIONAL-STATEMENTS.ELSE",
    detail: "",
    doc: new vscode.MarkdownString(`
# ELSE

The \`ELSE\` statement is an optional component of the \`IF\` statement which will only execute when the \`IF\` statement condition is \`FALSE\`.

\`\`\`
IF ( $_CAPSLOCK_ON == TRUE ) THEN
    STRING Capslock is on!
ELSE IF ( $_CAPSLOCK_ON == FALSE ) THEN
    STRING Capslock is off!
END_IF
\`\`\`

`),
    text: "ELSE IF ( ) THEN"
}
];
