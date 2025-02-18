import * as vscode from 'vscode';
import { CodePanelViewProvider } from './cpanel/code_panel_view_provider';

type CommandInfo = {
    label: string;
    detail: string;
    doc: vscode.MarkdownString;
    text: string;
};

// Here we define our commands with corresponding descriptions
const COMMANDS: CommandInfo[] = [
    {
        label: "REM",
        detail: "Inline comment",
        doc: new vscode.MarkdownString(`
# REM

The \`REM\` command does not perform any keystroke injection functions. \`REM\` gets its name from the word remark. While \`REM\` may be used to add vertical spacing within a payload, blank lines are also acceptable and will not be processed by the compiler.

\`\`\`
  REM This is a comment
\`\`\`
        
*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
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

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
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

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
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

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
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

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
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

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "STRINGLN\n\tHello \n\tWorld!\nEND_STRINGLN"
  },{
      label: "CURSOR KEYS",
      detail: "Cursor keys to navigate",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`UP\` \`DOWN\` \`LEFT\` \`RIGHT\`

>> \`UPARROW\` \`DOWNARROW\` \`LEFTARROW\` \`RIGHTARROW\`

>> \`PAGEUP\` \`PAGEDOWN\` \`HOME\` \`END\`

>> \`INSERT\` \`DELETE\` \`DEL\` \`BACKSPACE\`

>> \`TAB\`

>> \`SPACE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: ""
  },{
      label: "CURSOR.UP",
      detail: "Cursor keys to navigate up",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`UP\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "UP"
  },{
      label: "CURSOR.DOWN",
      detail: "Cursor keys to navigate down",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DOWN\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "DOWN"
  },{
      label: "CURSOR.LEFT",
      detail: "Cursor keys to navigate left",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`LEFT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "LEFT"
  },{
      label: "CURSOR.RIGHT",
      detail: "Cursor keys to navigate right",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`RIGHT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "RIGHT"
  },{
      label: "CURSOR.UPARROW",
      detail: "Cursor keys to press UPARROW",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`UPARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "UPARROW"
  },{
      label: "CURSOR.DOWNARROW",
      detail: "Cursor keys to press DOWNARROW",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DOWNARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "DOWNARROW"
  },{
      label: "CURSOR.LEFTARROW",
      detail: "Cursor keys to press LEFTARROW",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`LEFTARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "LEFTARROW"
  },{
      label: "CURSOR.RIGHTARROW",
      detail: "Cursor keys to press RIGHTARROW",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`RIGHTARROW\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "RIGHTARROW"
  },{
      label: "CURSOR.PAGEUP",
      detail: "Cursor keys to press PAGEUP",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`PAGEUP\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "PAGEUP"
  },{
      label: "CURSOR.PAGEDOWN",
      detail: "Cursor keys to press PAGEDOWN",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`PAGEDOWN\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "PAGEDOWN"
  },{
      label: "CURSOR.HOME",
      detail: "Cursor keys to press HOME",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`HOME\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "HOME"
  },{
      label: "CURSOR.END",
      detail: "Cursor keys to press END",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`END\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "END"
  },{
      label: "CURSOR.INSERT",
      detail: "Cursor keys to press INSERT",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`INSERT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "INSERT"
  },{
      label: "CURSOR.DELETE",
      detail: "Cursor keys to press DELETE",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DELETE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "DELETE"
  },{
      label: "CURSOR.DEL",
      detail: "Cursor keys to press DEL",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`DEL\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "DEL"
  },{
      label: "CURSOR.BACKSPACE",
      detail: "Cursor keys to press BACKSPACE",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`BACKSPACE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "BACKSPACE"
  },{
      label: "CURSOR.TAB",
      detail: "Cursor keys to press TAB",
      doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`TAB\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
      text: "TAB"
  },{
    label: "CURSOR.SPACE",
    detail: "Cursor keys to press SPACE",
    doc: new vscode.MarkdownString(`
# CURSOR KEYS

The cursor keys are used to navigate the cursor to a different position on the screen.

>> \`SPACE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "SPACE"
},{
    label: "SYSTEM-KEYS",
    detail: "System keys",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`ENTER\`

>> \`ESCAPE\`

>> \`PAUSE BREAK\`

>> \`PRINTSCREEN\`

>> \`MENU APP\`

>> \`F1\` \`F2\` \`F3\` \`F4\` \`F5\` \`F6\` \`F7\` \`F8\` \`F9\` \`F0\` \`F11\` \`F12\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: ""
},{
    label: "SYSTEM.ENTER",
    detail: "ENTER system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: ENTER

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`ENTER\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "ENTER"
},{
    label: "SYSTEM.ESCAPE",
    detail: "ESCAPE system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: ESCAPE

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`ESCAPE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "ESCAPE"
},{
    label: "SYSTEM.PAUSE-BREAK",
    detail: "PAUSE BREAK system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: PAUSE BREAK

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`PAUSE BREAK\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "PAUSE BREAK"
},{
    label: "SYSTEM.PRINTSCREEN",
    detail: "PRINTSCREEN system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: PRINTSCREEN

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`PRINTSCREEN\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "PRINTSCREEN"
},{
    label: "SYSTEM.MENU-APP",
    detail: "MENU APP system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: MENU APP

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`MENU APP\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "MENU APP"
},{
    label: "SYSTEM.F1",
    detail: "F1 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F1

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F1\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F1"
},{
    label: "SYSTEM.F2",
    detail: "F2 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F2

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F2\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F2"
},{
    label: "SYSTEM.F3",
    detail: "F3 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F3

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F3\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F3"
},{
    label: "SYSTEM.F4",
    detail: "F4 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F4

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F4\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F4"
},{
    label: "SYSTEM.F5",
    detail: "F5 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F5

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F5\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F5"
},{
    label: "SYSTEM.F6",
    detail: "F6 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F6

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F6\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F6"
},{
    label: "SYSTEM.F7",
    detail: "F7 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F7

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F7\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F7"
},{
    label: "SYSTEM.F8",
    detail: "F8 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F8

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F8\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F8"
},{
    label: "SYSTEM.F9",
    detail: "F9 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F9

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F9\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F9"
},{
    label: "SYSTEM.F10",
    detail: "F10 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F10

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F10\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F10"
},{
    label: "SYSTEM.F11",
    detail: "F11 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F11

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F11\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F11"
},{
    label: "SYSTEM.F12",
    detail: "F12 system key",
    doc: new vscode.MarkdownString(`
# SYSTEM KEYS: F12

System keys are primarily used by the operating system for special functions and may be used to interact with both text areas and navigating the user interface.

>> \`F12\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "F12"
},{
    label: "BASIC-MODIFIER-KEYS",
    detail: "Modifier keys held in combination",
    doc: new vscode.MarkdownString(`
# BASIC-MODIFIER

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`SHIFT\`
>> \`ALT\`
>> \`CONTROL\` or \`CTRL\`
>> \`COMMAND\`
>> \`WINDOWS\` or \`GUI\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: ""
},{
    label: "BASIC-MODIFIER.SHIFT",
    detail: "SHIFT modifier key",
    doc: new vscode.MarkdownString(`
# BASIC MODIFIER: SHIFT

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`SHIFT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "SHIFT"
},{
    label: "BASIC-MODIFIER.ALT",
    detail: "ALT modifier key",
    doc: new vscode.MarkdownString(`
# BASIC MODIFIER: ALT

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`ALT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "ALT"
},{
    label: "BASIC-MODIFIER.CONTROL",
    detail: "CONTROL modifier key",
    doc: new vscode.MarkdownString(`
# BASIC MODIFIER: CONTROL

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`CONTROL\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "CONTROL"
},{
    label: "BASIC-MODIFIER.CTRL",
    detail: "CTRL modifier key",
    doc: new vscode.MarkdownString(`
# BASIC MODIFIER: CTRL

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`CTRL\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "CTRL"
},{
    label: "BASIC-MODIFIER.COMMAND",
    detail: "COMMAND modifier key",
    doc: new vscode.MarkdownString(`
# BASIC MODIFIER: COMMAND

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`COMMAND\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "COMMAND"
},{
    label: "BASIC-MODIFIER.WINDOWS",
    detail: "WINDOWS modifier key",
    doc: new vscode.MarkdownString(`
# BASIC MODIFIER: WINDOWS

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`WINDOWS\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "WINDOWS"
},{
    label: "BASIC-MODIFIER.GUI",
    detail: "GUI modifier key",
    doc: new vscode.MarkdownString(`
# BASIC MODIFIER: GUI

Modifier keys held in combination with another key to perform a special function. Common keyboard combinations for the PC include the familiar \`CTRL c\` for copy, \`CTRL x\` for cut, and \`CTRL v\` for paste. 

>> \`GUI\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "GUI"
},{
    label: "COMBO-KEYS",
    detail: "Modifier Key Combinations",
    doc: new vscode.MarkdownString(`
# COMBO KEYS

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`CTRL SHIFT\`
>> \`ALT SHIFT\`
>> \`COMMAND CTRL\`
>> \`COMMAND CTRL SHIFT\`
>> \`COMMAND OPTION\`
>> \`COMMAND OPTION SHIFT\`
>> \`CONTROL ALT DELETE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: ""
},{
    label: "COMBO.CTRL-SHIFT",
    detail: "CTRL SHIFT modifier key combo",
    doc: new vscode.MarkdownString(`
# COMBO KEY: CTRL SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`CTRL SHIFT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "CTRL SHIFT"
},{
    label: "COMBO.ALT-SHIFT",
    detail: "ALT SHIFT modifier key combo",
    doc: new vscode.MarkdownString(`
# COMBO KEY: ALT SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`ALT SHIFT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "ALT SHIFT"
},{
    label: "COMBO.COMMAND-CTRL",
    detail: "COMMAND CTRL modifier key combo",
    doc: new vscode.MarkdownString(`
# COMBO KEY: COMMAND CTRL

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`COMMAND CTRL\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "COMMAND CTRL"
},{
    label: "COMBO.COMMAND-CTRL-SHIFT",
    detail: "COMMAND CTRL SHIFT modifier key combo",
    doc: new vscode.MarkdownString(`
# COMBO KEY: COMMAND CTRL SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`COMMAND CTRL SHIFT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "COMMAND CTRL SHIFT"
},{
    label: "COMBO.COMMAND-OPTION",
    detail: "COMMAND OPTION modifier key combo",
    doc: new vscode.MarkdownString(`
# COMBO KEY: COMMAND OPTION

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`COMMAND OPTION\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "COMMAND OPTION"
},{
    label: "COMBO.COMMAND-OPTION-SHIFT",
    detail: "COMMAND OPTION SHIFT modifier key combo",
    doc: new vscode.MarkdownString(`
# COMBO KEY: COMMAND OPTION SHIFT

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`COMMAND OPTION SHIFT\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "COMMAND OPTION SHIFT"
},{
    label: "COMBO.CONTROL-ALT-DELETE",
    detail: "CONTROL ALT DELETE modifier key combo",
    doc: new vscode.MarkdownString(`
# COMBO KEY: CONTROL ALT DELETE

In addition to the basic modifier key combinations, such as \`CTRL c\`, modifiers and keys may be combined arbitrarily.

>> \`CONTROL ALT DELETE\`

*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`),
    text: "CONTROL ALT DELETE"
}
  
];

// We implement a CompletionItemProvider for our language
class MyLanguageCompletionItemProvider implements vscode.CompletionItemProvider {
    // This method is called when the user activates the suggestions (e.g., Ctrl+Space)
    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        // We generate an array of CompletionItem from the defined commands
        const completions: vscode.CompletionItem[] = COMMANDS.map((command) => {
            const item = new vscode.CompletionItem(command.label, vscode.CompletionItemKind.Keyword);
            item.detail = command.detail;
            // We can use MarkdownString for documentation so that we can also insert Markdown formatting 
            item.documentation = command.doc;
            item.insertText = command.text;
            return item;
        });

        return completions;
    }
}


/**
 * Extension activation function.
 * 
 */
export function activate(context: vscode.ExtensionContext) {
	//Cookbook
	const provider = new CodePanelViewProvider(context);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	vscode.commands.registerCommand('duckyscript.Cookbook', () => {
		context.subscriptions.push(
			vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	});

	// Completion provider
    const providerDisposable = vscode.languages.registerCompletionItemProvider(
        { language: 'duckyscript' },
        new MyLanguageCompletionItemProvider()
    );

    context.subscriptions.push(providerDisposable);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() { }

module.exports = {
	activate,
	deactivate
};
