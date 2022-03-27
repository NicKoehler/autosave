import * as vscode from 'vscode';

function saveDocument(e: vscode.TextDocumentChangeEvent) {
	e.document.save();
}

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand(
		'autosave.autosave',
		() => vscode.workspace.onDidChangeTextDocument(saveDocument)
	);
	context.subscriptions.push(disposable);

	vscode.commands.executeCommand('autosave.autosave');
}

export function deactivate() {}
