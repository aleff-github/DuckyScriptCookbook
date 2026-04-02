import * as vscode from 'vscode';
import { PATH_TO_COOKBOOK } from '../utils/consts';
import * as cpanel from './run';

export class CodePanelViewProvider implements vscode.WebviewViewProvider {

	public static readonly viewType = 'duckyscript.Cookbook';

	constructor(
		private readonly _extension: vscode.ExtensionContext,
	) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {

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
			if (!active) { return; } // null check

			const selection = active.selection;
			if (!selection) { return; } // null check

			switch (data.type) {
				// DuckyScript 3.0 Payloads
				case 'PAYLOAD_INTRO_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.PAYLOAD_INTRO_3_0)));
					});
					break;
				case 'DETECT_READY_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.DETECT_READY_3_0)));
					});
					break;
				case 'PASSIVE_WINDOWS_DETECT_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.PASSIVE_WINDOWS_DETECT_3_0)));
					});
					break;
				case 'ERASE_TRACES_SHELL_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.ERASE_TRACES_SHELL_3_0)));
					});
					break;
				case 'ERASE_TRACES_POWERSHELL_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.ERASE_TRACES_POWERSHELL_3_0)));
					});
					break;
				case 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0)));
					});
					break;
				case 'OPEN_POWERSHELL_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.OPEN_POWERSHELL_3_0)));
					});
					break;
				case 'SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0)));
					});
					break;
				case 'GENERALIZED_WINDOWS_USER_PATH_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.GENERALIZED_WINDOWS_USER_PATH_3_0)));
					});
					break;
				case 'PHYSICAL_EXFILTRATION_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.PHYSICAL_EXFILTRATION_3_0)));
					});
					break;
				case 'NETWORK_EXFILTRATION_3_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.NETWORK_EXFILTRATION_3_0)));
					});
					break;

				// DuckyScript 1.0 Payloads
				case 'PAYLOAD_INTRO_1_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.PAYLOAD_INTRO_1_0)));
					});
					break;
				case 'ERASE_TRACES_POWERSHELL_1_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.ERASE_TRACES_POWERSHELL_1_0)));
					});
					break;
				case 'ERASE_TRACES_SHELL_1_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.ERASE_TRACES_SHELL_1_0)));
					});
					break;
				case 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0)));
					});
					break;
				case 'OPEN_POWERSHELL_1_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.OPEN_POWERSHELL_1_0)));
					});
					break;
				case 'GENERALIZED_WINDOWS_USER_PATH_1_0':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.GENERALIZED_WINDOWS_USER_PATH_1_0)));
					});
					break;

				// Both
				case 'OPEN_SHELL':
					active.edit(editBuilder => {
						const code = new cpanel.Code(this._extension.extensionUri);
						editBuilder.replace(selection, code.duckyscript(this._extension.asAbsolutePath(PATH_TO_COOKBOOK.OPEN_SHELL)));
					});
					break;

				// showPanel
				case 'showPanel':
					this.showPanel(webviewView.webview);
					break;
			}
		});

		vscode.window.onDidChangeActiveTextEditor(() => {
			this.showPanel(webviewView.webview);
		});
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		const resetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extension.extensionUri, 'media', 'css', 'reset.css'));
		const vscodeCssUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extension.extensionUri, 'media', 'css', 'vscode.css'));
		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extension.extensionUri, 'media', 'css', 'main.css'));
		const scriptMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extension.extensionUri, 'media', 'js', 'main.js'));
		const nonce = getNonce();
		const cpBody = getCodePanelBody();

		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self' data: ${webview.cspSource}; font-src 'self' data: ${webview.cspSource}; img-src 'self' data: ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${resetUri}" rel="stylesheet">
				<link href="${vscodeCssUri}" rel="stylesheet">
				<link href="${styleMainUri}" rel="stylesheet">
				<title>DuckyScript Cookbook</title>
			</head>
			<body class="cookbook-body" oncopy="return false;">
				${cpBody}
				<script nonce="${nonce}" src="${scriptMainUri}"></script>
			</body>
			</html>`;
	}

	private showPanel(webview: vscode.Webview) {
		const active = vscode.window.activeTextEditor;
		if (!active) {
			webview.postMessage({
				command: 'editorState',
				fileType: null,
				languageId: null,
				isDuckyScript: false,
			});
			return;
		}

		const fileName = active.document.fileName;
		const fileType = fileName.includes('.') ? fileName.split('.').pop() ?? null : null;
		webview.postMessage({
			command: 'editorState',
			fileType,
			languageId: active.document.languageId,
			isDuckyScript: active.document.languageId === 'duckyscript',
		});
	}
}

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

type RecipeItem = {
	action: string;
	label: string;
};

type RecipeSection = {
	title: string;
	badge: string;
	description: string;
	items: RecipeItem[];
};

const recipeSections: RecipeSection[] = [
	{
		title: 'DuckyScript 3.0',
		badge: 'Modern payloads',
		description: 'Ready-to-insert recipes for Rubber Ducky workflows based on DuckyScript 3.0.',
		items: [
			{ action: 'PAYLOAD_INTRO_3_0', label: 'Payload Intro' },
			{ action: 'DETECT_READY_3_0', label: 'Detect Ready' },
			{ action: 'PASSIVE_WINDOWS_DETECT_3_0', label: 'Passive Windows Detect' },
			{ action: 'ERASE_TRACES_POWERSHELL_3_0', label: 'Erase Traces Powershell' },
			{ action: 'ERASE_TRACES_SHELL_3_0', label: 'Erase Traces Shell' },
			{ action: 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0', label: 'Exfiltrate Files Using Dropbox - Windows' },
			{ action: 'OPEN_POWERSHELL_3_0', label: 'Open Powershell' },
			{ action: 'SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0', label: 'Save Files In Rubber Ducky Storage - Windows' },
			{ action: 'GENERALIZED_WINDOWS_USER_PATH_3_0', label: 'Generalized Windows User Path' },
			{ action: 'NETWORK_EXFILTRATION_3_0', label: 'Network Exfiltration' },
			{ action: 'PHYSICAL_EXFILTRATION_3_0', label: 'Physical Exfiltration' },
			{ action: 'OPEN_SHELL', label: 'Open A Shell' },
		],
	},
	{
		title: 'DuckyScript 1.0',
		badge: 'Legacy payloads',
		description: 'Classic payload templates kept available for backwards-compatible workflows.',
		items: [
			{ action: 'PAYLOAD_INTRO_1_0', label: 'Payload Intro' },
			{ action: 'ERASE_TRACES_POWERSHELL_1_0', label: 'Erase Traces Powershell' },
			{ action: 'ERASE_TRACES_SHELL_1_0', label: 'Erase Traces Shell' },
			{ action: 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0', label: 'Exfiltrate Files Using Dropbox Windows' },
			{ action: 'OPEN_POWERSHELL_1_0', label: 'Open Powershell' },
			{ action: 'GENERALIZED_WINDOWS_USER_PATH_1_0', label: 'Generalized Windows User Path' },
			{ action: 'OPEN_SHELL', label: 'Open A Shell' },
		],
	},
];

function getRecipeMarkup(items: RecipeItem[]) {
	return items.map(item => `
		<li class="recipe-list-item">
			<button class="recipe-action" type="button" data-act="${item.action}" title="Insert ${item.label}">
				<span class="recipe-label">${item.label}</span>
				<span class="recipe-meta">Insert</span>
			</button>
		</li>`).join('');
}

function getSectionMarkup(section: RecipeSection) {
	return `
		<section class="cookbook-card" aria-label="${section.title}">
			<div class="section-header">
				<div>
					<div class="section-badge">${section.badge}</div>
					<h2>${section.title}</h2>
					<p>${section.description}</p>
				</div>
			</div>
			<ul class="recipe-list">
				${getRecipeMarkup(section.items)}
			</ul>
		</section>`;
}

function getCodePanelBody() {
	const sections = recipeSections.map(getSectionMarkup).join('');
	const htmlBody = `
		<main class="cookbook-shell">
			<header class="hero-card">
				<div class="hero-copy">
					<div class="eyebrow">DuckyScript Cookbook</div>
					<h1>List of Recurring Code</h1>
					<p>Select text in the active editor and click a recipe to replace it with a ready-to-use payload template.</p>
				</div>
			</header>
			<div class="section-grid">
				${sections}
			</div>
		</main>
	`;
	return htmlBody;
}
