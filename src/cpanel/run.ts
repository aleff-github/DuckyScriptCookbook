import * as fs from 'fs';
import * as vscode from 'vscode';

export interface CodeInterface {
    _extensionUri: vscode.Uri;
    duckyscript(code_type: string): string;
}

export class Code implements CodeInterface {
    constructor(readonly _extensionUri: vscode.Uri) { }

    duckyscript(code_type: string) {
        let code = '';
        if (fs.existsSync(code_type)) {
            code = fs.readFileSync(code_type,'utf-8');
        }
        return code;
    }
}