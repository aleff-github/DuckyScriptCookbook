"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPERATORS_COMMANDS = void 0;
const vscode = require("vscode");
exports.OPERATORS_COMMANDS = [
    {
        label: "OPERATORS.MATH",
        detail: "",
        doc: new vscode.MarkdownString(`
# Math

Operators instruct the payload to perform a given mathematical, relational or logical operation.

\`=\` - *Assignment*

\`+\` - *Add*

\`-\` - *Subtract*

\`*\` - *Multiply*

\`/\` - *Divide*

\`%\` - *Modulus*

\`^\` - *Exponent*

\`\`\`
VAR $FOO = 1337
$FOO = ( $FOO - 1295 )
REM $FOO was assigned 1337, subtracted 1295, and ended up equalling 42.
\`\`\`

`),
        text: ""
    }, {
        label: "OPERATORS.COMPARISON",
        detail: "",
        doc: new vscode.MarkdownString(`
# Comparison

Will compare two values to evaluate a single boolean value.

\`==\` - *Equal to*

\`!=\` - *Not equal to*

\`>\` - *Greater than*

\`<\` - *Less than*

\`>=\` - *Greater than or equal to*

\`<=\` - *Less than or equal to*

\`\`\`
VAR $FOO = 42
VAR $BAR = 1337
IF ( $FOO < $BAR ) THEN
    STRING 42 is less than 1337
END_IF
\`\`\`

`),
        text: ""
    }, {
        label: "OPERATORS.ORDER-OF-OPERATIONS",
        detail: "",
        doc: new vscode.MarkdownString(`
# Order of Operations

Parentheses \`( )\` are required to define the precedence conventions.

\`\`\`
VAR $FOO = 42
VAR $BAR = (( 100 * 13 ) + ( $FOO - 5 ))
\`\`\`

`),
        text: ""
    }, {
        label: "OPERATORS.LOGICAL-OPERATORS",
        detail: "",
        doc: new vscode.MarkdownString(`
# Logical Operators

Logical operators may be used to connect two or more expressions.


\`&&\` - *Logical AND. If both the operands are non-zero, the condition is TRUE.*

\`\|\|\` - *Logical OR. If any of the two operands is non-zero, the condition is TRUE.*

\`\`\`
VAR $FOO = 42
VAR $BAR = 1337
IF ( $FOO < $BAR ) || ( $BAR == $FOO ) THEN
    STRING Either 42 is less than 1337 or 42 is equal to 1337
END_IF
\`\`\`

`),
        text: ""
    }, {
        label: "OPERATORS.BITWISE-OPERATORS",
        detail: "",
        doc: new vscode.MarkdownString(`
# Bitwise Operators

Operate on the uint16 values at the binary level.

\`&\` - *Bitwise AND. If the corresponding bits of the two operands is 1, will result in 1. Otherwise if either bit of an operand is 0, the result of the corresponding bit is evaluated as 0.*

\`\|\` - *Bitwise OR. If at least one corresponding bit of the two operands is 1, will result in 1.*

\`>>\` - *Right Shift. Accepts two numbers. Right shifts the bits of the first operand. The second operand determines the number of places to shift.*

\`<<\` - *Left Shift. Accepts two numbers. Left shifts the bits of the first operand. The second operand decides the number of places to shift.*

\`\`\`
ATTACKMODE HID STORAGE VID_05AC PID_021E
VAR $FOO = $_CURRENT_VID
REM Because VID and PID parameters are little endian, 
$FOO = ((($FOO >> 8) & 0x00FF) | (($FOO << 8) & 0xFF00))
REM $FOO will now equal 0xAC05
\`\`\`

`),
        text: ""
    }
];
//# sourceMappingURL=operators.js.map