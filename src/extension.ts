import * as vscode from 'vscode';
import { CodePanelViewProvider } from './cpanel/code_panel_view_provider';

export function activate(context: vscode.ExtensionContext) {
	//Cookbook
	const provider = new CodePanelViewProvider(context);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	vscode.commands.registerCommand('duckyscript.Cookbook', () => {
		context.subscriptions.push(
			vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	});

}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() { }

module.exports = {
	activate,
	deactivate
};
