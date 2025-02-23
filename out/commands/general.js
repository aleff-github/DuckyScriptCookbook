"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERAL_COMMANDS = void 0;
const vscode = require("vscode");
exports.GENERAL_COMMANDS = [
    {
        label: "REM",
        detail: "Inline comment",
        doc: new vscode.MarkdownString(`
# REM

The \`REM\` command does not perform any keystroke injection functions. \`REM\` gets its name from the word remark. While \`REM\` may be used to add vertical spacing within a payload, blank lines are also acceptable and will not be processed by the compiler.

\`\`\`
REM This is a comment
\`\`\`
        
`),
        text: "REM Hello World!"
    },
    {
        label: "REM_BLOCK",
        detail: "Block comment",
        doc: new vscode.MarkdownString(`
# REM BLOCK

Defining a comment block is simple! Start the comment with \`REM_BLOCK\` and end the comment with \`END_REM\`; everything in between will be considered a comment without the need to prepend every new line with \`REM\`. Comment blocks can be especially useful when you have multiple lines to be included in a single comment or want to retain formatting.

\`\`\`
REM_BLOCK DOCUMENTATION
  USAGE:
    Place at beginning of payload (besides ATTACKMODE) to act as dynamic boot delay
  TARGETS:
    Any system that reflects CAPSLOCK will detect minimum required delay
    Any system that does not reflect CAPSLOCK will hit the max delay of 3000ms
END_REM
\`\`\`

`),
        text: "REM_BLOCK\n\tHello World!\nEND_REM"
    }, {
        label: "STRING",
        detail: "Writes a string",
        doc: new vscode.MarkdownString(`
# STRING

The \`STRING\` command keystroke injects (types) a series of keystrokes. \`STRING\` will automatically interpret uppercase letters by holding the \`SHIFT\` modifier key where necessary. The \`STRING\` command will also automatically press the SPACE cursor key, however trailing spaces will be omitted.

\`\`\`
STRING The quick brown fox jumps over the lazy dog
\`\`\`

`),
        text: "STRING Hello World!"
    }, {
        label: "STRINGLN",
        detail: "Writes a string then press enter",
        doc: new vscode.MarkdownString(`
# STRINGLN

The \`STRINGLN\` command, like \`STRING\`, will inject a series of keystrokes then terminate with a carriage return (\`ENTER\`).

\`\`\`
STRINGLN      _      _      _      USB       _      _      _
STRINGLN   __(.)< __(.)> __(.)=   Rubber   >(.)__ <(.)__ =(.)__
STRINGLN   \___)  \___)  \___)    Ducky!    (___/  (___/  (___/
\`\`\`

`),
        text: "STRINGLN Hello World!"
    }, {
        label: "STRING BLOCK",
        detail: "A block of strings",
        doc: new vscode.MarkdownString(`
# STRING BLOCK

\`STRING\` blocks can be used effectively to convert multiple lines into one without needing to prepend each line with \`STRING\`

\`\`\`
STRING
  a
  b
  c
END_STRING
\`\`\`

is the equivalent of 

\`\`\`
STRING a
STRING b
STRING c
\`\`\`

Or in this case: \`STRING abc\`

`),
        text: "STRING\n\tHello \n\tWorld!\nEND_STRING"
    }, {
        label: "STRINGLN BLOCK",
        detail: "A block of strings and enter",
        doc: new vscode.MarkdownString(`
# STRINGLN BLOCK

\`STRINGLN\` blocks can be used like [here-doc](https://en.wikipedia.org/wiki/Here_document); allowing you to inject multiple lines as they are written in the payload. 

\`\`\`
STRINGLN
a
b
c
END_STRINGLN
\`\`\`

is the equivalent of 

\`\`\`
STRINGLN a
STRINGLN b
STRINGLN c
\`\`\`

## Result

Deploying this payload will produce the following keystroke injection on the target machine:

\`\`\`
a
b
c
\`\`\`

`),
        text: "STRINGLN\n\tHello \n\tWorld!\nEND_STRINGLN"
    }, {
        label: "DELAY",
        detail: "Difficult to see. Always in motion is the future...",
        doc: new vscode.MarkdownString(`
# DELAY

The \`DELAY\` command instructs the USB Rubber Ducky to momentarily pause execution of the payload. This is useful when deploying a payload which must "wait" for an element — such as a window — to load. The \`DELAY\` command accepts the time parameter in milliseconds.

\`\`\`
DELAY for 100 milliseconds (one tenth of a second)
DELAY 100
\`\`\`

**The minimum delay value is 20!**

The \`DELAY\` command may also accept an integer variable.

\`\`\`
VAR $WAIT = 500
DELAY $WAIT
\`\`\`

`),
        text: "DELAY"
    }, {
        label: "INJECT_MOD",
        detail: "Standalone Modifier Keys",
        doc: new vscode.MarkdownString(`
# INJECT_MOD

Injecting a modifier key alone without another key — such as pressing the \`WINDOWS\` key — may be achieved by prepending the modifier key with the \`INJECT_MOD\` command.

\`\`\`
REM Example pressing Windows key alone
INJECT_MOD WINDOWS
\`\`\`

`),
        text: "INJECT_MOD"
    }, {
        label: "HOLDING KEYS",
        detail: "Standalone Modifier Keys",
        doc: new vscode.MarkdownString(`
# HOLDING KEYS

A key may be held, rather than pressed, by specifying a \`HOLD\` and \`RELEASE\` command with a \`DELAY\` in between the two. Both \`HOLD\` and \`RELEASE\` must specify a key. [Multiple simultaneous keys](https://docs.hak5.org/hak5-usb-rubber-ducky/advanced-features/holding-keys#holding-multiple-keys) may be held.

\`\`\`
HOLD a
DELAY 2000
RELEASE a

REM May produce any mumber of "aaaaa" keys, depending on the repeat rate of
REM the target OS. On macOS may open the accent menu.

INJECT_MOD
HOLD WINDOWS
DELAY 4000
RELEASE WINDOWS

REM Will hold the Windows key for 4 seconds. Note the use of INJECT_MOD
REM when using a modifier key without a key combination.
\`\`\`

`),
        text: "HOLD ...\nDELAY 500 \nRELEASE ..."
    }, {
        label: "JITTER",
        detail: "",
        doc: new vscode.MarkdownString(`
# JITTER

Jitter randomly varies the delay between individual key presses based on the seed.bin value.

\`$_JITTER_ENABLED\` - Set TRUE to enable and FALSE to disable jitter.

\`$_JITTER_MAX\` - Integer (0-65535) of maximum time in milliseconds between keystrokes. Default 20.

\`\`\`
$_JITTER_MAX = 60
$_JITTER_ENABLED = TRUE
STRINGLN The quick brown fox jumps over the lazy dog
\`\`\`

`),
        text: "$_JITTER_"
    }
];
//# sourceMappingURL=general.js.map