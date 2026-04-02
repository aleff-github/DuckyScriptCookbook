import * as vscode from 'vscode';
import { CommandInfo } from './structure'

type PagerCommandDefinition = {
    command: string;
    description: string;
};

const PAGER_COMMAND_DEFINITIONS: PagerCommandDefinition[] = [
    { command: "ALERT", description: "Raise an alert message for the user" },
    { command: "PAYLOAD_GET_CONFIG", description: "Retrieve a permanent payload configuration option" },
    { command: "PAYLOAD_SET_CONFIG", description: "Set a permanent payload configuration option" },
    { command: "PAYLOAD_DEL_CONFIG", description: "Delete a permanent payload configuration option" },
    { command: "CONFIRMATION_DIALOG", description: "Ask the user to confirm an action via the UI" },
    { command: "ERROR_DIALOG", description: "Show the user an error dialog via the UI" },
    { command: "IP_PICKER", description: "Ask the user to interactively enter an IP via the UI" },
    { command: "LOG", description: "Send data to the payload console" },
    { command: "MAC_PICKER", description: "Ask the user to interactively enter a MAC via the UI" },
    { command: "NUMBER_PICKER", description: "Ask the user to interactively enter a number via the UI" },
    { command: "PROMPT", description: "Raise a modal dialog and wait for the user to dismiss it" },
    { command: "RINGTONE", description: "Play a ringtone or ringtone file. A ringtone is a RTTTL format monophonic series of notes." },
    { command: "START_SPINNER", description: "Show an indeterminate spinner indicating a long-running task is running" },
    { command: "STOP_SPINNER", description: "Cancel a spinner" },
    { command: "TEXT_PICKER", description: "Ask the user to interactively enter text via the UI" },
    { command: "VIBRATE", description: "Play a ringtone or ringtone file as vibration. A ringtone is a RTTTL format monophonic series of notes." },
    { command: "WAIT_FOR_INPUT", description: "Wait for the user to press any physical button, returning the button pressed" },
    { command: "FIND_CLIENT_IP", description: "Search ARP and DHCP records for an associated client's IP" },
    { command: "DEAUTH_CLIENT", description: "Attempt to deauthenticate clients by sending spoofed deauthentication and disassociation packets." },
    { command: "PINEAPPLE_DEVICE_FILTER_ADD", description: "Add a MAC address to a Pineapple device filter list" },
    { command: "PINEAPPLE_DEVICE_FILTER_ADD_FILE", description: "Add a list of MAC addresses in a file to a Pineapple device filter list" },
    { command: "PINEAPPLE_DEVICE_FILTER_DELETE", description: "Delete a MAC address from a Pineapple device filter list" },
    { command: "PINEAPPLE_DEVICE_FILTER_CLEAR", description: "Clear a Pineapple device filter list" },
    { command: "PINEAPPLE_DEVICE_FILTER_LIST", description: "Show a Pineapple device filter list" },
    { command: "PINEAPPLE_DEVICE_FILTER_MODE", description: "Set the Pineapple device filter mode" },
    { command: "PINEAPPLE_EXAMINE_BSSID", description: "Stop channel hopping and examine the channel of a known access point" },
    { command: "PINEAPPLE_EXAMINE_CHANNEL", description: "Stop channel hopping and examine a channel" },
    { command: "PINEAPPLE_EXAMINE_RESET", description: "Resume channel hopping" },
    { command: "PINEAPPLE_RECON_NEW", description: "Start a new recon session" },
    { command: "PINEAPPLE_SET_BANDS", description: "Set the Wi-Fi bands for Recon channel hopping" },
    { command: "PINEAPPLE_MIMIC_DISABLE", description: "Disable mimic mode on the Pineapple Open AP" },
    { command: "PINEAPPLE_MIMIC_ENABLE", description: "Enable mimic mode on the Pineapple Open AP" },
    { command: "PINEAPPLE_NETWORK_FILTER_ADD", description: "Add a SSID to a Pineapple network filter list" },
    { command: "PINEAPPLE_NETWORK_FILTER_ADD_FILE", description: "Add a list of SSIDs from a file to a Pineapple network filter list" },
    { command: "PINEAPPLE_NETWORK_FILTER_DELETE", description: "Delete a SSID from a Pineapple network filter list" },
    { command: "PINEAPPLE_NETWORK_FILTER_CLEAR", description: "Clear a Pineapple network filter list" },
    { command: "PINEAPPLE_NETWORK_FILTER_LIST", description: "Show a Pineapple network filter list" },
    { command: "PINEAPPLE_NETWORK_FILTER_MODE", description: "Set the Pineapple network filter mode" },
    { command: "PINEAPPLE_SSID_POOL_ADD", description: "Add a SSID to a Pineapple SSID impersonation pool" },
    { command: "PINEAPPLE_SSID_POOL_ADD_FILE", description: "Add multiple SSIDs from a file to the Pineapple SSID impersonation pool" },
    { command: "PINEAPPLE_SSID_POOL_DELETE", description: "Delete a SSID from the Pineapple SSID impersonation pool" },
    { command: "PINEAPPLE_SSID_POOL_CLEAR", description: "Clear the Pineapple SSID impersonation pool" },
    { command: "PINEAPPLE_SSID_POOL_LIST", description: "Show a Pineapple SSID impersonation pool" },
    { command: "PINEAPPLE_SSID_POOL_COLLECT_START", description: "Start automatic SSID collection mode" },
    { command: "PINEAPPLE_SSID_POOL_COLLECT_STOP", description: "Stop automatic SSID collection mode" },
    { command: "PINEAPPLE_SSID_POOL_START", description: "Start advertising SSIDs from the impersonation pool" },
    { command: "PINEAPPLE_SSID_POOL_STOP", description: "Stop advertising SSIDs from the impersonation pool" },
    { command: "WIFI_PCAP_START", description: "Start an optimized pcap log of Wi-Fi packets" },
    { command: "WIFI_PCAP_STOP", description: "Stop a running pcap log" },
    { command: "WIGLE_LOGIN", description: "Log into a Wigle account and obtain an API key" },
    { command: "WIGLE_LOGOUT", description: "Delete any saved API keys" },
    { command: "WIGLE_UPLOAD", description: "Upload Wigle csv logs to the Wigle service" },
    { command: "WIGLE_START", description: "Start a new log file" },
    { command: "WIGLE_STOP", description: "Stop logging" },
    { command: "ANY", description: "Send the signal corresponding to the press of any button" },
    { command: "A", description: "Send the signal corresponding to the press of button 'A'" },
    { command: "B", description: "Send the signal corresponding to the press of button 'B'" },
];

export const PAGER_COMMANDS: CommandInfo[] = [
{
    label: "PAGER-COMMANDS",
    detail: "Pager-related commands and values",
    doc: new vscode.MarkdownString(`
# PAGER COMMANDS

Base integration for Pager-related DuckyScript commands.

This first pass adds command discovery and inline documentation without examples yet, so the commands can be completed and documented safely while the syntax details are refined.

## Included in this pass

- Pager UI and payload interaction commands
- Wi-Fi and recon commands
- Pineapple integration commands
- Wigle logging commands

## Notes

- \`WAIT_FOR_BUTTON_PRESS\`, \`UP\`, \`DOWN\`, \`LEFT\` and \`RIGHT\` already existed in the extension, so they were not duplicated in completion items.
- \`ANY\`, \`A\` and \`B\` are included in completion items, but only the device-specific commands were added to syntax highlighting to avoid broad false positives in normal DuckyScript code.

`),
    text: ""
},
...PAGER_COMMAND_DEFINITIONS.map(({ command, description }) => ({
    label: `PAGER.${command}`,
    detail: "",
    doc: new vscode.MarkdownString(`
# ${command}

${description}

`),
    text: command
}))
];
