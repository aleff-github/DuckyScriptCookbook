"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = require("vscode");
const code_panel_view_provider_1 = require("./cpanel/code_panel_view_provider");
function activate(context) {
    //Cookbook
    const provider = new code_panel_view_provider_1.CodePanelViewProvider(context);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(code_panel_view_provider_1.CodePanelViewProvider.viewType, provider));
    vscode.commands.registerCommand('duckyscript.Cookbook', () => {
        context.subscriptions.push(vscode.window.registerWebviewViewProvider(code_panel_view_provider_1.CodePanelViewProvider.viewType, provider));
    });
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() { }
module.exports = {
    activate,
    deactivate
};
//# sourceMappingURL=extension.js.map