import * as vscode from 'vscode';

export type CommandInfo = {
    label: string;
    detail: string;
    doc: vscode.MarkdownString;
    text: string;
};