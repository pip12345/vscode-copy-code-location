const vscode = require('vscode');
const path = require('path');

function activate(context) {
  const disposable = vscode.commands.registerCommand('copyCodeLocation.copy', async () => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      vscode.window.showWarningMessage('No active editor to copy from.');
      return;
    }

    const relativePath = getWorkspaceRelativePath(editor.document.uri);
    const ranges = editor.selections.map(formatSelection).filter(Boolean);
    const text = `${relativePath}:${ranges.join(',')}`;

    await vscode.env.clipboard.writeText(text);
    vscode.window.setStatusBarMessage(`Copied ${text}`, 2000);
  });

  context.subscriptions.push(disposable);
}

function getWorkspaceRelativePath(uri) {
  const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);

  if (!workspaceFolder) {
    return path.basename(uri.fsPath);
  }

  return path.relative(workspaceFolder.uri.fsPath, uri.fsPath).replaceAll(path.sep, '/');
}

function formatSelection(selection) {
  const startLine = selection.start.line + 1;
  const endLine = selection.end.line + 1;

  if (selection.isEmpty || startLine === endLine) {
    return String(startLine);
  }

  return `${startLine}-${endLine}`;
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
