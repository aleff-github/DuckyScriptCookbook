"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const code_panel_view_provider_1 = require("./cpanel/code_panel_view_provider");
const general_1 = require("./commands/general");
const cursor_1 = require("./commands/cursor");
const basic_modifier_1 = require("./commands/basic_modifier");
const combo_1 = require("./commands/combo");
const lock_1 = require("./commands/lock");
const system_1 = require("./commands/system");
const ALL_COMMANDS = [...general_1.GENERAL_COMMANDS, ...cursor_1.CURSOR_COMMANDS, ...basic_modifier_1.BASIC_MODIFIER_COMMANDS, ...combo_1.COMBO_COMMANDS, ...lock_1.LOCK_COMMANDS, ...system_1.SYSTEM_COMMANDS];
// We implement a CompletionItemProvider for our language
class MyLanguageCompletionItemProvider {
    // This method is called when the user activates the suggestions (e.g., Ctrl+Space)
    provideCompletionItems(document, position, token, context) {
        const completions = ALL_COMMANDS.map((command) => {
            const item = new vscode.CompletionItem(command.label, vscode.CompletionItemKind.Keyword);
            item.detail = command.detail;
            item.documentation = command.doc.appendMarkdown(`\n*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*`);
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