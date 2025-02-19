import * as vscode from 'vscode';
import { CodePanelViewProvider } from './cpanel/code_panel_view_provider';
import { GENERAL_COMMANDS } from './commands/general';
import { CURSOR_COMMANDS } from './commands/cursor';
import { BASIC_MODIFIER_COMMANDS } from './commands/basic_modifier';
import { COMBO_COMMANDS } from './commands/combo';
import { LOCK_COMMANDS } from './commands/lock';
import { SYSTEM_COMMANDS } from './commands/system';


const ALL_COMMANDS = [...GENERAL_COMMANDS, ...CURSOR_COMMANDS, ...BASIC_MODIFIER_COMMANDS, ...COMBO_COMMANDS, ...LOCK_COMMANDS, ...SYSTEM_COMMANDS];

// We implement a CompletionItemProvider for our language
class MyLanguageCompletionItemProvider implements vscode.CompletionItemProvider {
    // This method is called when the user activates the suggestions (e.g., Ctrl+Space)
    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        const completions: vscode.CompletionItem[] = ALL_COMMANDS.map((command) => {
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

function deactivate() { }

module.exports = {
	activate,
	deactivate
};
