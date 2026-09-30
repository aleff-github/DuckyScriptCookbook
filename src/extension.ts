import * as vscode from 'vscode';
import { CodePanelViewProvider } from './cpanel/code_panel_view_provider';
import { ATTACKMODE_COMMANDS } from './commands/attackmode'
import { BASIC_MODIFIER_COMMANDS } from './commands/basic_modifier';
import { BUTTON_COMMANDS } from './commands/button';
import { COMBO_COMMANDS } from './commands/combo';
import { CONDITIONAL_STATEMENTS_COMMANDS } from './commands/conditional_statements';
import { CONSTANTS_COMMANDS } from './commands/constants';
import { CURSOR_COMMANDS } from './commands/cursor';
import { FUNCTIONS_COMMANDS } from './commands/functions';
import { GENERAL_COMMANDS } from './commands/general';
import { INTERNAL_VARIABLES_COMMANDS } from './commands/internal_variables';
import { LED_COMMANDS } from './commands/led';
import { LOCK_COMMANDS } from './commands/lock';
import { LOOPS_COMMANDS } from './commands/loops';
import { OPERATORS_COMMANDS } from './commands/operators';
import { PAGER_COMMANDS } from './commands/pager';
import { PAYLOAD_CONTROL_COMMANDS } from './commands/payload_control';
import { PAYLOAD_HIDING } from './commands/payload_hiding';
import { RANDOM_COMMANDS } from './commands/randomization';
import { SYSTEM_COMMANDS } from './commands/system';
import { VARIABLES_COMMANDS } from './commands/variables';



const commandGroups = [
    ATTACKMODE_COMMANDS,
    BASIC_MODIFIER_COMMANDS,
    BUTTON_COMMANDS,
    COMBO_COMMANDS,
    CONDITIONAL_STATEMENTS_COMMANDS,
    CONSTANTS_COMMANDS,
    CURSOR_COMMANDS,
    FUNCTIONS_COMMANDS,
    GENERAL_COMMANDS,
    INTERNAL_VARIABLES_COMMANDS,
    LED_COMMANDS,
    LOCK_COMMANDS,
    LOOPS_COMMANDS,
    OPERATORS_COMMANDS,
    PAGER_COMMANDS,
    PAYLOAD_CONTROL_COMMANDS,
    PAYLOAD_HIDING,
    RANDOM_COMMANDS,
    SYSTEM_COMMANDS,
    VARIABLES_COMMANDS
  ];

const suffix = `\n*Source: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference*\n\n*Did you find something incorrect or something missing? [Write it to me](https://github.com/aleff-github/DuckyScriptCookbook/issues) to contribute or edit it yourself!*`;

const updatedCommandGroups = commandGroups.map(group =>
    group.map(command => command.doc.appendMarkdown(suffix))
);

const ALL_COMMANDS = commandGroups.flat();

const CUSTOM_COMMAND_TOKEN = 'duckyscriptCustomCommand';

const semanticTokenLegend = new vscode.SemanticTokensLegend([CUSTOM_COMMAND_TOKEN], []);

function escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

class CustomCommandSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider, vscode.Disposable {
    private commandPattern: RegExp | undefined;
    private readonly _emitter = new vscode.EventEmitter<void>();
    private readonly _configListener: vscode.Disposable;
    onDidChangeSemanticTokens = this._emitter.event;

    constructor() {
        this.updateCustomCommands();
        this._configListener = vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('duckyscript.customCommands')) {
                this.updateCustomCommands();
                this._emitter.fire();
            }
        });
    }

    private updateCustomCommands() {
        const config = vscode.workspace.getConfiguration('duckyscript');
        const commands = config.get<string[]>('customCommands', [])
            .filter(c => typeof c === 'string' && c.trim().length > 0)
            .map(c => c.trim())
            // Longest first, so PREFIX_LONG wins over PREFIX.
            .sort((a, b) => b.length - a.length);

        this.commandPattern = commands.length
            ? new RegExp(`^\\s*(${commands.map(escapeRegExp).join('|')})(?![\\w-])`, 'i')
            : undefined;
    }

    provideDocumentSemanticTokens(
        document: vscode.TextDocument,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.SemanticTokens> {
        const builder = new vscode.SemanticTokensBuilder(semanticTokenLegend);
        if (!this.commandPattern) {
            return builder.build();
        }

        for (let i = 0; i < document.lineCount; i++) {
            if (token.isCancellationRequested) {
                return builder.build();
            }
            const match = this.commandPattern.exec(document.lineAt(i).text);
            if (match) {
                const startColumn = match[0].length - match[1].length;
                builder.push(i, startColumn, match[1].length, 0, 0);
            }
        }
        return builder.build();
    }

    dispose() {
        this._configListener.dispose();
        this._emitter.dispose();
    }
}

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

    // Custom commands syntax highlighting
    const customCommandProvider = new CustomCommandSemanticTokensProvider();
    context.subscriptions.push(
        customCommandProvider,
        vscode.languages.registerDocumentSemanticTokensProvider(
            { language: 'duckyscript' },
            customCommandProvider,
            semanticTokenLegend
        )
    );
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};
