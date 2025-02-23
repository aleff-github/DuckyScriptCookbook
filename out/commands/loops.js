"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOOPS_COMMANDS = void 0;
const vscode = require("vscode");
exports.LOOPS_COMMANDS = [
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
    SRINGLN This is an infinite loop. This message repeats forever.
END_WHILE
\`\`\`

`),
        text: "WHILE ( )\n\tREM Hello World!\nEND_WHILE"
    }
];
//# sourceMappingURL=loops.js.map