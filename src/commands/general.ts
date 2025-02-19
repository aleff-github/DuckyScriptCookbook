import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const GENERAL_COMMANDS: CommandInfo[] = [
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
  },{
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
  },{
      label: "STRINGLN",
      detail: "Writes a string then press enter",
      doc: new vscode.MarkdownString(`
# STRINGLN

The \`STRINGLN\` command, like \`STRING\`, will inject a series of keystrokes then terminate with a carriage return (\`ENTER\`).

\`\`\`
STRINGLN    _    _    _    USB     _    _    _
STRINGLN   __(.)< __(.)> __(.)=   Rubber   >(.)__ <(.)__ =(.)__
STRINGLN   \___)  \___)  \___)  Ducky!  (___/  (___/  (___/
\`\`\`

`),
        text: "STRINGLN Hello World!"
  },{
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
  },{
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
  }
];