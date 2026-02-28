# profSandMiner

## Bare-bones setup

`git clone https://github.com/deafwave/osrs-botmaker-typescript`

`cd osrs-botmaker-typescript`

`pnpm i`

## VS Code extensions used in this repo

- `dbaeumer.vscode-eslint`
- `esbenp.prettier-vscode`
- `rvest.vs-code-prettier-eslint`
- `ms-vscode.vscode-typescript-next`

## Script structure

- `index.ts` with base imports + lifecycle hooks
- `State Manager/script-state.ts`
- `State Manager/logging.ts`
- `State Manager/constants.ts`
- `State Manager/state-manager.ts`
- Shared utilities/types from `@prof/imports/*`

This is intentionally minimal and script-agnostic.

