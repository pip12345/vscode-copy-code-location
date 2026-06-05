# Copy Code Location

Copies the active editor's workspace-relative path with line numbers.

Default keybinding:

```json
{
  "key": "ctrl+shift+c",
  "command": "copyCodeLocation.copy",
  "when": "!isSessionsWindow && !terminalFocus"
}
```

Output examples:

```txt
src/foo.ts:42
src/foo.ts:42-59
src/foo.ts:42-59,69-88
```
