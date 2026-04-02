//@ts-check

(function () {
    const vscode = acquireVsCodeApi();

    // const statusElement = /** @type {HTMLElement | null} */ (document.getElementById('editor-status'));
    const hintElement = /** @type {HTMLElement | null} */ (document.getElementById('editor-hint'));

    window.addEventListener('message', event => {
        const message = event.data;
        if (!message || message.command !== 'editorState') {
            return;
        }

        updateEditorState(message);
    });

    function init() {
        vscode.postMessage({ type: 'showPanel' });
    }

    // function updateEditorState(message) {
    //     if (!statusElement || !hintElement) {
    //         return;
    //     }

    //     statusElement.classList.remove('is-ready', 'is-warning');

    //     if (!message.languageId) {
    //         statusElement.textContent = 'No active editor';
    //         statusElement.classList.add('is-warning');
    //         hintElement.textContent = 'Open a DuckyScript file to insert a payload into the current selection.';
    //         return;
    //     }

    //     const extension = message.fileType ? `.${message.fileType}` : 'unknown file';

    //     if (message.isDuckyScript) {
    //         statusElement.textContent = `Ready for ${extension}`;
    //         statusElement.classList.add('is-ready');
    //         hintElement.textContent = 'The selected recipe will replace the current selection in the active DuckyScript editor.';
    //         return;
    //     }

    //     statusElement.textContent = `Editing ${extension}`;
    //     statusElement.classList.add('is-warning');
    //     hintElement.textContent = 'Recipes can still be inserted, but the best experience is in a DuckyScript file.';
    // }

    // DuckyScript 3.0 Payloads
    const FunctionList = {
        'PAYLOAD_INTRO_3_0': function () { vscode.postMessage({ type: 'PAYLOAD_INTRO_3_0' }); },
        'DETECT_READY_3_0': function () { vscode.postMessage({ type: 'DETECT_READY_3_0' }); },
        'PASSIVE_WINDOWS_DETECT_3_0': function () { vscode.postMessage({ type: 'PASSIVE_WINDOWS_DETECT_3_0' }); },
        'ERASE_TRACES_POWERSHELL_3_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_POWERSHELL_3_0' }); },
        'ERASE_TRACES_SHELL_3_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_SHELL_3_0' }); },
        'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0': function () { vscode.postMessage({ type: 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0' }); },
        'OPEN_POWERSHELL_3_0': function () { vscode.postMessage({ type: 'OPEN_POWERSHELL_3_0' }); },
        'SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0': function () { vscode.postMessage({ type: 'SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0' }); },
        'GENERALIZED_WINDOWS_USER_PATH_3_0': function () { vscode.postMessage({ type: 'GENERALIZED_WINDOWS_USER_PATH_3_0' }); },
        'NETWORK_EXFILTRATION_3_0': function () { vscode.postMessage({ type: 'NETWORK_EXFILTRATION_3_0' }); },
        'PHYSICAL_EXFILTRATION_3_0': function () { vscode.postMessage({ type: 'PHYSICAL_EXFILTRATION_3_0' }); },
        'PAYLOAD_INTRO_1_0': function () { vscode.postMessage({ type: 'PAYLOAD_INTRO_1_0' }); },
        'ERASE_TRACES_POWERSHELL_1_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_POWERSHELL_1_0' }); },
        'ERASE_TRACES_SHELL_1_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_SHELL_1_0' }); },
        'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0': function () { vscode.postMessage({ type: 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0' }); },
        'OPEN_POWERSHELL_1_0': function () { vscode.postMessage({ type: 'OPEN_POWERSHELL_1_0' }); },
        'GENERALIZED_WINDOWS_USER_PATH_1_0': function () { vscode.postMessage({ type: 'GENERALIZED_WINDOWS_USER_PATH_1_0' }); },
        'OPEN_SHELL': function () { vscode.postMessage({ type: 'OPEN_SHELL' }); },
    };

    document.querySelectorAll('.recipe-action').forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            const action = btn.getAttribute('data-act');
            if (action && typeof FunctionList[action] === 'function') {
                FunctionList[action]();
            }
        }, false);
    });

    init();
}());
