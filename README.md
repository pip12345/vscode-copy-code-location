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

## Build

Requires Docker and Make.

```sh
make build
```

This builds the extension in a `node:24` container and creates:

```txt
copy-code-location-0.0.1.vsix
```

## Install in VS Code

```sh
code --install-extension copy-code-location-0.0.1.vsix
```

Then reload VS Code.