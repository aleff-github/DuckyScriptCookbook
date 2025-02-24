import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const FUNCTIONS_COMMANDS: CommandInfo[] = [
{
    label: "FUNCTION",
    detail: "",
    doc: new vscode.MarkdownString(`
# FUNCTION

Functions are blocks of organized single-task code that let you more efficiently run the same code multiple times without the need to copy and paste large blocks of code over and over again. 

\`\`\`
REM Types "Hello.....World!"

FUNCTION COUNTDOWN()
    WHILE ($TIMER > 0)
        STRING .
        $TIMER = ($TIMER - 1)
        DELAY 500
    END_WHILE
END_FUNCTION

STRING Hello
VAR $TIMER = 5
COUNTDOWN()
STRING World!
\`\`\`

`),
    text: "FUNCTION ...()\n\tREM Hello World!\nEND_FUNCTION"
},{
    label: "RETURN",
    detail: "",
    doc: new vscode.MarkdownString(`
# FUNCTION

A function may return a integer or boolean value which may also be evaluated.

\`\`\`
FUNCTION TEST_CAPS_AND_NUM()
    IF (($_CAPSLOCK_ON == TRUE) && ($_NUMLOCK_ON == TRUE)) THEN
        RETURN TRUE
    ELSE
        RETURN FALSE
    END_IF
END_FUNCTION

IF (TEST_CAPS_AND_NUM() == TRUE) THEN
    STRINGLN Caps lock and num lock are on.
END_IF
\`\`\`

`),
    text: "RETURN ..."
}
];
