"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodePanelViewProvider = void 0;
const vscode = require("vscode");
const consts_1 = require("../utils/consts");
const cpanel = require("./run");
class CodePanelViewProvider {
    constructor(_extension) {
        this._extension = _extension;
    }
    resolveWebviewView(webviewView, context, _token) {
        webviewView.webview.options = {
            // Allow scripts in the webview
            enableScripts: true,
            enableForms: true,
            enableCommandUris: true,
            localResourceRoots: [
                this._extension.extensionUri
            ]
        };
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage(data => {
            // select text
            const active = vscode.window.activeTextEditor;
            if (!active) {
                return;
            } // null check
            const selection = active.selection;
            if (!selection) {
                return;
            } // null check
            switch (data.type) {
                // DuckyScript 3.0 Payloads
                case 'PAYLOAD_INTRO_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.PAYLOAD_INTRO_3_0)));
                    });
                    break;
                case 'DETECT_READY_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.DETECT_READY_3_0)));
                    });
                    break;
                case 'PASSIVE_WINDOWS_DETECT_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.PASSIVE_WINDOWS_DETECT_3_0)));
                    });
                    break;
                case 'ERASE_TRACES_SHELL_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.ERASE_TRACES_SHELL_3_0)));
                    });
                    break;
                case 'ERASE_TRACES_POWERSHELL_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.ERASE_TRACES_POWERSHELL_3_0)));
                    });
                    break;
                case 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0)));
                    });
                    break;
                case 'OPEN_POWERSHELL_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.OPEN_POWERSHELL_3_0)));
                    });
                    break;
                case 'SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0)));
                    });
                    break;
                // DuckyScript 1.0 Payloads
                case 'PAYLOAD_INTRO_1_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.PAYLOAD_INTRO_1_0)));
                    });
                    break;
                case 'ERASE_TRACES_POWERSHELL_1_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.ERASE_TRACES_POWERSHELL_1_0)));
                    });
                    break;
                case 'ERASE_TRACES_SHELL_1_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.ERASE_TRACES_SHELL_1_0)));
                    });
                    break;
                case 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0)));
                    });
                    break;
                case 'OPEN_POWERSHELL_1_0':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.OPEN_POWERSHELL_1_0)));
                    });
                    break;
                // Both
                case 'OPEN_SHELL':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extension.extensionUri);
                        editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(consts_1.PATH_TO_COOKBOOK.OPEN_SHELL)));
                    });
                    break;
                // showPanel
                case 'showPanel':
                    this.showPanel(webviewView.webview);
                    break;
            }
        });
        vscode.window.onDidChangeActiveTextEditor((editor) => {
            this.showPanel(webviewView.webview);
        });
    }
    _getHtmlForWebview(webview) {
        // Do the same for the stylesheet.
        const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extension.extensionUri, 'media', 'css', 'main.css'));
        // Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
        const scriptMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extension.extensionUri, 'media', 'js', 'main.js'));
        // Use a nonce to only allow a specific script to be run.
        const nonce = getNonce();
        const cpBody = getCodePanelBody();
        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self' data: ${webview.cspSource}; font-src 'self' data: ${webview.cspSource}; img-src 'self' data: ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleMainUri}" rel="stylesheet">

				<title>DuckyScript Cookbook</title>
			</head>
			<body class="text-white" oncopy="return false;">
				${cpBody}
				<script nonce="${nonce}" src="${scriptMainUri}"></script>
			</body>
			</html>`;
    }
    showPanel(webview) {
        const active = vscode.window.activeTextEditor;
        if (!active)
            return;
        const type = active.document.fileName.split('.').pop();
        webview.postMessage({ command: type });
    }
}
exports.CodePanelViewProvider = CodePanelViewProvider;
CodePanelViewProvider.viewType = 'duckyscript.Cookbook';
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
function getCodePanelBody() {
    const htmlBody = `
    <div class="container m-2">
    <h1>Cookbook</h1>
    <div class="panel panel-primary panel-duckyscript">
        <div class="panel-heading">
            <h3>DuckyScript 3.0</h3>
        </div>
        <div class="panel-body">

		<div class="list">
			<ul>
				<a href="#" class="btn" role="button" data-act="PAYLOAD_INTRO_3_0">
					<li><span>Payload Intro</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="DETECT_READY_3_0">
					<li><span>Detect Ready</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="PASSIVE_WINDOWS_DETECT_3_0">
					<li><span>Passive Windows Detect</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="ERASE_TRACES_POWERSHELL_3_0">
					<li><span>Erase Traces Powershell</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="ERASE_TRACES_SHELL_3_0">
					<li><span>Erase Traces Shell</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0">
					<li><span>Exfiltrate Files Using Dropbox - Windows</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="OPEN_POWERSHELL_3_0">
					<li><span>Open Powershell</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0">
					<li><span>Save Files In Rubber Ducky Storage - Windows</span></li>
				</a>
				<a href="#" class="btn" role="button" data-act="OPEN_SHELL">
					<li><span>Open A Shell</span></li>
				</a>
			</ul>
		</div>
		
		<hr/>

		<div class="panel-heading">
            <h3>DuckyScript 1.0</h3>
        </div>
        <div class="panel-body">
			<div class="list">
				<ul>
					<a href="#" class="btn" role="button" data-act="PAYLOAD_INTRO_1_0">
						<li><span>Payload Intro</span></li>
					</a>
					<a href="#" class="btn" role="button" data-act="ERASE_TRACES_POWERSHELL_1_0">
						<li><span>Erase Traces Powershell</span></li>
					</a>
					<a href="#" class="btn" role="button" data-act="ERASE_TRACES_SHELL_1_0">
						<li><span>Erase Traces Shell</span></li>
					</a>
					<a href="#" class="btn" role="button" data-act="EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0">
						<li><span>Exfiltrate Files Using Dropbox Windows</span></li>
					</a>
					<a href="#" class="btn" role="button" data-act="OPEN_POWERSHELL_1_0">
						<li><span>Open Powershell</span></li>
					</a>
					<a href="#" class="btn" role="button" data-act="OPEN_SHELL">
						<li><span>Open A Shell</span></li>
					</a>
				</ul>
			</div>
        </div>
    </div><div id="check"></div>
	`;
    return htmlBody;
}
//# sourceMappingURL=code_panel_view_provider.js.map