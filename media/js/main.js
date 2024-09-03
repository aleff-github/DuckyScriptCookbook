//@ts-check

(function () {
    const vscode = acquireVsCodeApi();

    window.addEventListener('message', event => {
        const v = event.data.command;
    });

    function init() {
        vscode.postMessage({type: 'showPanel'});
    }

    // DuckyScript 3.0 Payloads
    var FunctionList = {
        'PAYLOAD_INTRO_3_0': function () { vscode.postMessage({ type: 'PAYLOAD_INTRO_3_0' }); },
        'DETECT_READY_3_0': function () { vscode.postMessage({ type: 'DETECT_READY_3_0' }); },
        'PASSIVE_WINDOWS_DETECT_3_0': function () { vscode.postMessage({ type: 'PASSIVE_WINDOWS_DETECT_3_0' }); },
        'ERASE_TRACES_POWERSHELL_3_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_POWERSHELL_3_0' }); },
        'ERASE_TRACES_SHELL_3_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_SHELL_3_0' }); },
        'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0': function () { vscode.postMessage({ type: 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_3_0' }); },
        'OPEN_POWERSHELL_3_0': function () { vscode.postMessage({ type: 'OPEN_POWERSHELL_3_0' }); },
        'SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0': function () { vscode.postMessage({ type: 'SAVE_FILES_IN_RUBBER_DUCKY_STORAGE_WINDOWS_3_0' }); },
        'PAYLOAD_INTRO_1_0': function () { vscode.postMessage({ type: 'PAYLOAD_INTRO_1_0' }); },
        'ERASE_TRACES_POWERSHELL_1_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_POWERSHELL_1_0' }); },
        'ERASE_TRACES_SHELL_1_0': function () { vscode.postMessage({ type: 'ERASE_TRACES_SHELL_1_0' }); },
        'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0': function () { vscode.postMessage({ type: 'EXFILTRATE_FILES_USING_DROPBOX_WINDOWS_1_0' }); },
        'OPEN_POWERSHELL_1_0': function () { vscode.postMessage({ type: 'OPEN_POWERSHELL_1_0' }); },
        'OPEN_SHELL': function () { vscode.postMessage({ type: 'OPEN_SHELL' }); },
    };

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (typeof FunctionList[btn.dataset.act] === 'function') FunctionList[btn.dataset.act]();
        }, false);
    });

    init();
}());
