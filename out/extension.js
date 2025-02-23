"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const code_panel_view_provider_1 = require("./cpanel/code_panel_view_provider");
const attackmode_1 = require("./commands/attackmode");
const basic_modifier_1 = require("./commands/basic_modifier");
const button_1 = require("./commands/button");
const combo_1 = require("./commands/combo");
const conditional_statements_1 = require("./commands/conditional_statements");
const constants_1 = require("./commands/constants");
const cursor_1 = require("./commands/cursor");
const functions_1 = require("./commands/functions");
const general_1 = require("./commands/general");
const internal_variables_1 = require("./commands/internal_variables");
const led_1 = require("./commands/led");
const lock_1 = require("./commands/lock");
const loops_1 = require("./commands/loops");
const operators_1 = require("./commands/operators");
const payload_control_1 = require("./commands/payload_control");
const payload_hiding_1 = require("./commands/payload_hiding");
const randomization_1 = require("./commands/randomization");
const system_1 = require("./commands/system");
const variables_1 = require("./commands/variables");
const commandGroups = [
    attackmode_1.ATTACKMODE_COMMANDS,
    basic_modifier_1.BASIC_MODIFIER_COMMANDS,
    button_1.BUTTON_COMMANDS,
    combo_1.COMBO_COMMANDS,
    conditional_statements_1.CONDITIONAL_STATEMENTS_COMMANDS,
    constants_1.CONSTANTS_COMMANDS,
    cursor_1.CURSOR_COMMANDS,
    functions_1.FUNCTIONS_COMMANDS,
    general_1.GENERAL_COMMANDS,
    internal_variables_1.INTERNAL_VARIABLES_COMMANDS,
    led_1.LED_COMMANDS,
    lock_1.LOCK_COMMANDS,
    loops_1.LOOPS_COMMANDS,
    operators_1.OPERATORS_COMMANDS,
    payload_control_1.PAYLOAD_CONTROL_COMMANDS,
    payload_hiding_1.PAYLOAD_HIDING,
    randomization_1.RANDOM_COMMANDS,
    system_1.SYSTEM_COMMANDS,
    variables_1.VARIABLES_COMMANDS
];
const suffix = `\n*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*\n\n*Did you find something incorrect or something missing? [Write it to me](https://github.com/aleff-github/DuckyScriptCookbook/issues) to contribute or edit it yourself!*`;
const updatedCommandGroups = commandGroups.map(group => group.map(command => command.doc.appendMarkdown(suffix)));
const ALL_COMMANDS = commandGroups.flat();
// We implement a CompletionItemProvider for our language
class MyLanguageCompletionItemProvider {
    // This method is called when the user activates the suggestions (e.g., Ctrl+Space)
    provideCompletionItems(document, position, token, context) {
        const completions = ALL_COMMANDS.map((command) => {
            const item = new vscode.CompletionItem(command.label, vscode.CompletionItemKind.Keyword);
            item.detail = command.detail;
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
function activate(context) {
    //Cookbook
    const provider = new code_panel_view_provider_1.CodePanelViewProvider(context);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(code_panel_view_provider_1.CodePanelViewProvider.viewType, provider));
    vscode.commands.registerCommand('duckyscript.Cookbook', () => {
        context.subscriptions.push(vscode.window.registerWebviewViewProvider(code_panel_view_provider_1.CodePanelViewProvider.viewType, provider));
    });
    // Completion provider
    const providerDisposable = vscode.languages.registerCompletionItemProvider({ language: 'duckyscript' }, new MyLanguageCompletionItemProvider());
    context.subscriptions.push(providerDisposable);
}
exports.activate = activate;
function deactivate() { }
module.exports = {
    activate,
    deactivate
};
//# sourceMappingURL=extension.js.map