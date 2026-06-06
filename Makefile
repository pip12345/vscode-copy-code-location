.PHONY: build

build:
	docker run --rm \
		-u "$$(id -u):$$(id -g)" \
		-e HOME=/tmp \
		-e npm_config_prefix=/tmp/npm-global \
		-v "$$(pwd):/workspace" \
		-w /workspace \
		node:24 \
		sh -lc 'npm ci && npm install -g @vscode/vsce && PATH="/tmp/npm-global/bin:$$PATH" vsce package'
