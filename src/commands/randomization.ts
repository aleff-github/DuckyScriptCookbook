import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const RANDOM_COMMANDS: CommandInfo[] = [
{
    label: "RANDOM-COMMANDS",
    detail: "",
    doc: new vscode.MarkdownString(`
# RANDOM COMMANDS

The pseudorandom number generator provides randomization for keystroke injection, variables and attackmode parameters. The first time a randomization feature is used, a \`seed.bin\` will be generated on the root of the MicroSD card. One may also be generated from the [Hak5 IDE](https://encoder.hak5.org/).

\`RANDOM KEYSTROKE INJECTION\`

\`RANDOM INTEGERS\`

\`RANDOM and ATTACKMODE\`

`),
    text: ""
},{
    label: "RANDOM-COMMANDS.KEYSTROKE-INJECTION",
    detail: "",
    doc: new vscode.MarkdownString(`
# RANDOM KEYSTROKE INJECTION

|**Command**|**Character Set**|
|--|--|
|RANDOM_LOWERCASE_LETTER|*abcdefghijklmnopqrstuvwxyz*|
|RANDOM_UPPERCASE_LETTER|*ABCDEFGHIJKLMNOPQRSTUVWXYZ*|
|RANDOM_LETTER|*abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ*|
|RANDOM_NUMBER|*0123456789*|
|RANDOM_SPECIAL|*!@#$%^&\*()*|
|RANDOM_CHAR|*abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 !@#$%^&\*()*|

\`\`\`
REM 42 random characters
VAR $COUNT = 42
WHILE ($COUNT > 0)
    RANDOM_CHAR
    $COUNT = ($COUNT + 1)
END_WHILE
\`\`\`

`),
    text: ""
},{
    label: "RANDOM-COMMANDS.INTEGERS",
    detail: "",
    doc: new vscode.MarkdownString(`
# RANDOM INTEGERS

The internal variable \`$_RANDOM_INT\` assigns a random integer between the specified \`$_RANDOM_MIN\` and \`$_RANDOM_MAX\` values. May be 0-65535. The default values are \`0-9\`.

\`\`\`
$_RANDOM_MIN = 42
$_RANDOM_MAX = 1337
VAR $FOO = $_RANDOM_INT

REM The variable $FOO will be between 42 and 1337
\`\`\`

`),
    text: "$_RANDOM_INT"
},{
    label: "RANDOM-COMMANDS.RANDOM-AND-ATTACKMODE",
    detail: "",
    doc: new vscode.MarkdownString(`
# RANDOM AND ATTACKMODE

The \`ATTACKMODE\` command may accept random values for the optional parameters.

|**ATTACKMODE Parameter**|**Result**|
|--|--|
|\`VID_RANDOM\`|*Random Vendor ID*|
|\`PID_RANDOM\`|*Random Product ID*|
|\`MAN_RANDOM\`|*Random 12 alphanumeric character iManufacturer*|
|\`PROD_RANDOM\`|*Random 12 alphanumeric character iProduct*|
|\`SERIAL_RANDOM\`|*Random 12 digit serial number*|

\`\`\`
ATTACKMODE HID VID_RANDOM PID_RANDOM MAN_RANDOM PROD_RANDOM SERIAL_RANDOM
\`\`\`

**Use caution when using random \`VID\` and \`PID\` values as unexpected results are likely.**


`),
    text: ""
}
];
