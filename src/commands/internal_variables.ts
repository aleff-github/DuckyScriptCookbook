import * as vscode from 'vscode';
import { CommandInfo } from './structure'


export const INTERNAL_VARIABLES_COMMANDS: CommandInfo[] = [
{
    label: "INTERNAL-VARIABLES-COMMANDS",
    detail: "",
    doc: new vscode.MarkdownString(`
# INTERNAL VARIABLES

## BUTTON

\`$_BUTTON_ENABLED\` - *Returns \`TRUE\` if the button is enabled or \`FALSE\` if the button is disabled.

\`$_BUTTON_USER_DEFINED\` - *Returns \`TRUE\` if a \`BUTTON_DEF\` has been implemented in the payload or \`FALSE\` if it hasn't been implemented.*

\`$_BUTTON_PUSH_RECEIVED\` - *Returns \`TRUE\` if the button has ever been pressed. May be retrieved or set.*

\`$_BUTTON_TIMEOUT\` - *The button debounce, or cooldown time before counting the next button press, in milliseconds. The default value is 1000.*

## LED

\`$_SYSTEM_LEDS_ENABLED\` - *Default set \`TRUE\`. May be retrieved or set. Boot and \`ATTACKMODE\` change LED.*

\`$_STORAGE_LEDS_ENABLED\` - *Default set \`TRUE\`. May be retrieved or set.\nBlinks the LED red/green on storage read/write in \`ATTACKMODE STORAGE\`.*

\`$_LED_CONTINUOUS_SHOW_STORAGE_ACTIVITY\` - *Default set \`TRUE\`. May be retrieved or set.\nThe LED will light solid green when the storage has been inactive for longer than \`$_STORAGE_ACTIVITY_TIMEOUT\` (default 1000 ms). Otherwise, the LED will light red when active.*

\`$_INJECTING_LEDS_ENABLED\` - *Default set \`TRUE\`. May be retrieved or set. When \`TRUE\` the LED will blink green on payload execution.*

\`$_EXFIL_LEDS_ENABLED\` - *Default set \`TRUE\`. May be retrieved or set. When \`TRUE\` the LED will blink green during Keystroke Reflection.*

\`$_LED_SHOW_CAPS\` - *Default set \`FALSE\`. May be retrieved or set. When \`TRUE\` will bind the GREEN LED state to the \`CAPSLOCK\` state.*

\`$_LED_SHOW_NUM\` - *Default set \`FALSE\`. May be retrieved or set. When \`TRUE\` will bind the RED LED state to the \`NUMLOCK\` state.*

\`$_LED_SHOW_SCROLL\` - *Default set \`FALSE\`. May be retrieved or set. When \`TRUE\` will bind the GREEN LED state to the \`SCROLLOCK\` state.*

## ATTACKMODE

\`$_CURRENT_VID\` - *Returns the currently operating Vendor ID with endian swapped. May only be retrieved. Cannot be set.*

\`$_CURRENT_PID\` - *Returns the currently operating Product ID with endian swapped. May only be retrieved. Cannot be set.*

\`$_CURRENT_ATTACKMODE\` - *Returns the currently operating \`ATTACKMODE\` represented as \`0\` for \`OFF\`, \`1\` for \`HID\`, \`2\` for \`STORAGE\` and 3 for both \`HID\` and \`STORAGE\`.

## RANDOM

\`$_RANDOM_INT\` - *Random integer within set range.*

\`$_RANDOM_MIN\` - *Random integer minimum range (unsigned, 0-65535).*

\`$_RANDOM_MAX\` - *Random integer maximum range (unsigned, 0-65535).*

\`$_RANDOM_SEED\` - *Random seed from seed.bin*

\`$_RANDOM_LOWER_LETTER_KEYCODE\` - *Returns random lower letter scancode (a-z)*

\`$_RANDOM_UPPER_LETTER_KEYCODE\` - *Returns random upper letter scancode (A-Z)*

\`$_RANDOM_LETTER_KEYCODE\` - *Returns random letter scancode (a-zA-Z)*

\`$_RANDOM_NUMBER_KEYCODE\` - *Returns random number scancode (0-9)*

\`$_RANDOM_SPECIAL_KEYCODE\` - *Returns random special char scancode (shift+0-9)*

\`$_RANDOM_CHAR_KEYCODE\` - *Returns random letter number or special scancode*

## JITTER

\`$_JITTER_ENABLED\` - *Set \`TRUE\` to enable jitter. Default \`FALSE\`.*

\`$_JITTER_MAX\` - *Sets the maximum time between key presses in milliseconds. The default maximum is 20 ms.*

## LOCK KEYS

\`$_CAPSLOCK_ON\` - *\`TRUE\` if on, \`FALSE\` if off.*

\`$_NUMLOCK_ON\` - *\`TRUE\` if on, \`FALSE\` if off.*

\`$_SCROLLLOCK_ON\` - *\`TRUE\` if on, \`FALSE\` if off.*

\`$_SAVED_CAPSLOCK_ON\` - *On USB attach or \`SAVE_HOST_KEYBOARD_LOCK_STATE\`, sets \`TRUE\` or \`FALSE\` depending on the reported OS condition.*

\`$_SAVED_NUMLOCK_ON\` - *On USB attach or \`SAVE_HOST_KEYBOARD_LOCK_STATE\`, sets \`TRUE\` or \`FALSE\` depending on the reported OS condition.*

\`$_SAVED_SCROLLLOCK_ON\` - *On USB attach or \`SAVE_HOST_KEYBOARD_LOCK_STATE\`, sets \`TRUE\` or \`FALSE\` depending on the reported OS condition.*

\`$_RECEIVED_HOST_LOCK_LED_REPLY\` - *On receipt of any lock state LED control code, sets \`TRUE\`. This flag is helpful for fingerprinting certain operating systems (e.g. macOS) or systems which do not reflect lock keys.*

## STORAGE

\`$_STORAGE_ACTIVITY_TIMEOUT\` - *As payload is running, this value decrements if storage activity is not detected. Default value is 1000.*

## EXFILTRATION

\`$_EXFIL_MODE_ENABLED\` - *Default \`FALSE\`. Set \`TRUE\` to enable Keystroke Reflection. Will listen for \`CAPSLOCK\` and \`NUMLOCK\` changes, writing binary values to loot.bin. num=1, caps=0.*

## OS_DETECT

\`$_HOST_CONFIGURATION_REQUEST_COUNT\` - *Used by \`OS_DETECT\` EXTENSION to detect device enumeration count.*

\`$_OS\` - *Used by \`OS_DETECT\` EXTENSION to return value of fingerprinted operating system. May return \`WINDOWS\`, \`MACOS\`, \`LINUX\`, \`CHROMEOS\`, \`ANDROID\`, \`IOS\`. These names are reserved and should not be used in user variables.*

`),
    text: ""
},{
  label: "INTERNAL-VARIABLES.BUTTON.$_BUTTON_ENABLED",
  detail: "",
  doc: new vscode.MarkdownString(`
# BUTTON ENABLED

Returns \`TRUE\` if the button is enabled or \`FALSE\` if the button is disabled.

`),
  text: "$_BUTTON_ENABLED"
},{
  label: "INTERNAL-VARIABLES.BUTTON.$_BUTTON_USER_DEFINED",
  detail: "",
  doc: new vscode.MarkdownString(`
# BUTTON USER DEFINED

Returns \`TRUE\` if a BUTTON_DEF has been implemented in the payload or \`FALSE\` if it hasn't been implemented.

`),
  text: "$_BUTTON_USER_DEFINED"
},{
  label: "INTERNAL-VARIABLES.BUTTON.$_BUTTON_PUSH_RECEIVED",
  detail: "",
  doc: new vscode.MarkdownString(`
# BUTTON PUSH RECEIVED

Returns \`TRUE\` if the button has ever been pressed. May be retrieved or set.


`),
  text: "$_BUTTON_PUSH_RECEIVED"
},{
  label: "INTERNAL-VARIABLES.BUTTON.$_BUTTON_TIMEOUT",
  detail: "",
  doc: new vscode.MarkdownString(`
# BUTTON TIMEOUT

The button debounce, or cooldown time before counting the next button press, in milliseconds. The default value is 1000.

`),
  text: "$_BUTTON_TIMEOUT"
},{
  label: "INTERNAL-VARIABLES.LED.$_SYSTEM_LEDS_ENABLED",
  detail: "",
  doc: new vscode.MarkdownString(`
# SYSTEM LEDS ENABLED

Default set \`TRUE\`. May be retrieved or set. Boot and ATTACKMODE change LED.

`),
  text: "$_SYSTEM_LEDS_ENABLED"
},{
  label: "INTERNAL-VARIABLES.LED.$_STORAGE_LEDS_ENABLED",
  detail: "",
  doc: new vscode.MarkdownString(`
# STORAGE LEDS ENABLED

Default set \`TRUE\`. May be retrieved or set.

Blinks the LED red/green on storage read/write in ATTACKMODE STORAGE.

`),
  text: "$_STORAGE_LEDS_ENABLED"
},{
  label: "INTERNAL-VARIABLES.LED.$_LED_CONTINUOUS_SHOW_STORAGE_ACTIVITY",
  detail: "",
  doc: new vscode.MarkdownString(`
# LED CONTINUOUS SHOW STORAGE ACTIVITY

Default set \`TRUE\`. May be retrieved or set.

The LED will light solid green when the storage has been inactive for longer than $_STORAGE_ACTIVITY_TIMEOUT (default 1000 ms). Otherwise, the LED will light red when active.

`),
  text: "$_LED_CONTINUOUS_SHOW_STORAGE_ACTIVITY"
},{
  label: "INTERNAL-VARIABLES.LED.$_INJECTING_LEDS_ENABLED",
  detail: "",
  doc: new vscode.MarkdownString(`
# INJECTING LEDS ENABLED

Default set \`TRUE\`. May be retrieved or set. When \`TRUE\` the LED will blink green on payload execution.

`),
  text: "$_INJECTING_LEDS_ENABLED"
},{
  label: "INTERNAL-VARIABLES.LED.$_EXFIL_LEDS_ENABLED",
  detail: "",
  doc: new vscode.MarkdownString(`
# EXFIL LEDS ENABLED

Default set \`TRUE\`. May be retrieved or set. When \`TRUE\` the LED will blink green during Keystroke Reflection.

`),
  text: "$_EXFIL_LEDS_ENABLED"
},{
  label: "INTERNAL-VARIABLES.LED.$_LED_SHOW_CAPS",
  detail: "",
  doc: new vscode.MarkdownString(`
# LED SHOW CAPS

Default set \`FALSE\`. May be retrieved or set. When \`TRUE\` will bind the GREEN LED state to the CAPSLOCK state.

`),
  text: "$_LED_SHOW_CAPS"
},{
  label: "INTERNAL-VARIABLES.LED.$_LED_SHOW_NUM",
  detail: "",
  doc: new vscode.MarkdownString(`
# LED SHOW NUM

Default set \`FALSE\`. May be retrieved or set. When \`TRUE\` will bind the RED LED state to the NUMLOCK state.

`),
  text: "$_LED_SHOW_NUM"
},{
  label: "INTERNAL-VARIABLES.LED.$_LED_SHOW_SCROLL",
  detail: "",
  doc: new vscode.MarkdownString(`
# LED SHOW SCROLL

Default set \`FALSE\`. May be retrieved or set. When \`TRUE\` will bind the GREEN LED state to the SCROLLLOCK state.

`),
  text: "$_LED_SHOW_SCROLL"
},{
  label: "INTERNAL-VARIABLES.ATTACKMODE.$_CURRENT_VID",
  detail: "",
  doc: new vscode.MarkdownString(`
# CURRENT VID

Returns the currently operating Vendor ID with endian swapped. May only be retrieved. Cannot be set.

`),
  text: "$_CURRENT_VID"
},{
  label: "INTERNAL-VARIABLES.ATTACKMODE.$_CURRENT_PID",
  detail: "",
  doc: new vscode.MarkdownString(`
# CURRENT PID

Returns the currently operating Product ID with endian swapped. May only be retrieved. Cannot be set.

`),
  text: "$_CURRENT_PID"
},{
  label: "INTERNAL-VARIABLES.ATTACKMODE.$_CURRENT_ATTACKMODE",
  detail: "",
  doc: new vscode.MarkdownString(`
# CURRENT ATTACKMODE

Returns the currently operating ATTACKMODE represented as 0 for OFF, 1 for HID, 2 for STORAGE and 3 for both HID and STORAGE

`),
  text: "$_CURRENT_ATTACKMODE"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_INT",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM INT

Random integer within set range.

`),
  text: "$_RANDOM_INT"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_MIN",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM MIN

Random integer minimum range (unsigned, 0-65535)

`),
  text: "$_RANDOM_MIN"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_MAX",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM MAX

Random integer maximum range (unsigned, 0-65535).

`),
  text: "$_RANDOM_MAX"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_SEED",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM SEED

Random seed from seed.bin

`),
  text: "$_RANDOM_SEED"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_LOWER_LETTER_KEYCODE",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM LOWER LETTER KEYCODE

Returns random lower letter scancode (a-z)

`),
  text: "$_RANDOM_LOWER_LETTER_KEYCODE"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_UPPER_LETTER_KEYCODE",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM UPPER LETTER KEYCODE

Returns random upper letter scancode (A-Z)

`),
  text: "$_RANDOM_UPPER_LETTER_KEYCODE"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_LETTER_KEYCODE",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM LETTER KEYCODE

Returns random letter scancode (a-zA-Z)

`),
  text: "$_RANDOM_LETTER_KEYCODE"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_NUMBER_KEYCODE",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM NUMBER KEYCODE

Returns random number scancode (0-9)

`),
  text: "$_RANDOM_NUMBER_KEYCODE"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_SPECIAL_KEYCODE",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM SPECIAL KEYCODE

Returns random special char scancode (shift+0-9)

`),
  text: "$_RANDOM_SPECIAL_KEYCODE"
},{
  label: "INTERNAL-VARIABLES.RANDOM.$_RANDOM_CHAR_KEYCODE",
  detail: "",
  doc: new vscode.MarkdownString(`
# RANDOM CHAR KEYCODE

Returns random letter number or special scancode

`),
  text: "$_RANDOM_CHAR_KEYCODE"
},{
  label: "INTERNAL-VARIABLES.JITTER.$_JITTER_ENABLED",
  detail: "",
  doc: new vscode.MarkdownString(`
# JITTER ENABLED

Set \`TRUE\` to enable jitter. Default \`FALSE\`.

`),
  text: "$_JITTER_ENABLED"
},{
  label: "INTERNAL-VARIABLES.JITTER.$_JITTER_MAX",
  detail: "",
  doc: new vscode.MarkdownString(`
# JITTER MAX

Sets the maximum time between key presses in milliseconds. The default maximum is 20 ms.

`),
  text: "$_JITTER_MAX"
},{
  label: "INTERNAL-VARIABLES.LOCK-KEYS.$_CAPSLOCK_ON",
  detail: "",
  doc: new vscode.MarkdownString(`
# CAPSLOCK ON

\`TRUE\` if on, \`FALSE\` if off.

`),
  text: "$_CAPSLOCK_ON"
},{
  label: "INTERNAL-VARIABLES.LOCK-KEYS.$_NUMLOCK_ON",
  detail: "",
  doc: new vscode.MarkdownString(`
# NUMLOCK ON

\`TRUE\` if on, \`FALSE\` if off.

`),
  text: "$_NUMLOCK_ON"
},{
  label: "INTERNAL-VARIABLES.LOCK-KEYS.$_SCROLLLOCK_ON",
  detail: "",
  doc: new vscode.MarkdownString(`
# SCROLLLOCK ON

\`TRUE\` if on, \`FALSE\` if off.

`),
  text: "$_SCROLLLOCK_ON"
},{
  label: "INTERNAL-VARIABLES.LOCK-KEYS.$_SAVED_CAPSLOCK_ON",
  detail: "",
  doc: new vscode.MarkdownString(`
# SAVED CAPSLOCK ON

On USB attach or SAVE_HOST_KEYBOARD_LOCK_STATE, sets \`TRUE\` or \`FALSE\` depending on the reported OS condition.

`),
  text: "$_SAVED_CAPSLOCK_ON"
},{
  label: "INTERNAL-VARIABLES.LOCK-KEYS.$_SAVED_NUMLOCK_ON",
  detail: "",
  doc: new vscode.MarkdownString(`
# SAVED NUMLOCK ON

On USB attach or SAVE_HOST_KEYBOARD_LOCK_STATE, sets \`TRUE\` or \`FALSE\` depending on the reported OS condition.

`),
  text: "$_SAVED_NUMLOCK_ON"
},{
  label: "INTERNAL-VARIABLES.LOCK-KEYS.$_SAVED_SCROLLLOCK_ON",
  detail: "",
  doc: new vscode.MarkdownString(`
# SAVED SCROLLLOCK ON

On USB attach or SAVE_HOST_KEYBOARD_LOCK_STATE, sets \`TRUE\` or \`FALSE\` depending on the reported OS condition.

`),
  text: "$_SAVED_SCROLLLOCK_ON"
},{
  label: "INTERNAL-VARIABLES.LOCK-KEYS.$_RECEIVED_HOST_LOCK_LED_REPLY",
  detail: "",
  doc: new vscode.MarkdownString(`
# RECEIVED HOST LOCK LED REPLY

On receipt of any lock state LED control code, sets \`TRUE\`. This flag is helpful for fingerprinting certain operating systems (e.g. macOS) or systems which do not reflect lock keys.

`),
  text: "$_RECEIVED_HOST_LOCK_LED_REPLY"
},{
  label: "INTERNAL-VARIABLES.STORAGE.$_STORAGE_ACTIVITY_TIMEOUT",
  detail: "",
  doc: new vscode.MarkdownString(`
# STORAGE ACTIVITY TIMEOUT

As payload is running, this value decrements if storage activity is not detected. Default value is 1000.

`),
  text: "$_STORAGE_ACTIVITY_TIMEOUT"
},{
  label: "INTERNAL-VARIABLES.EXFILTRATION.$_EXFIL_MODE_ENABLED",
  detail: "",
  doc: new vscode.MarkdownString(`
# EXFIL MODE ENABLED

Default \`FALSE\`. Set \`TRUE\` to enable Keystroke Reflection. Will listen for CAPSLOCK and NUMLOCK changes, writing binary values to loot.bin. num=1, caps=0.

`),
  text: "$_EXFIL_MODE_ENABLED"
},{
  label: "INTERNAL-VARIABLES.OS-DETECT.$_HOST_CONFIGURATION_REQUEST_COUNT",
  detail: "",
  doc: new vscode.MarkdownString(`
# HOST CONFIGURATION REQUEST COUNT

Used by OS_DETECT EXTENSION to detect device enumeration count.

`),
  text: "$_HOST_CONFIGURATION_REQUEST_COUNT"
},{
  label: "INTERNAL-VARIABLES.OS-DETECT.$_OS",
  detail: "",
  doc: new vscode.MarkdownString(`
# OS

Used by OS_DETECT EXTENSION to return value of fingerprinted operating system. May return WINDOWS, MACOS, LINUX, CHROMEOS, ANDROID, IOS. These names are reserved and should not be used in user variables.

`),
  text: "$_OS"
}
];