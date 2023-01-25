// CONFIG

/*

{
  // "typescript.tsdk": "node_modules/typescript/lib",
  // "typescript.enablePromptUseWorkspaceTsdk": true,
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "window.title": "${activeEditorMedium}${separator}${rootName}",
  "explorer.compactFolders": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.editor.labelFormat": "short",
  "workbench.startupEditor": "newUntitledFile",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.integrated.fontSize": 14,
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontSize": 16,
  "editor.lineHeight": 26,
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.rulers": [80, 120],
  "stylelint.validate": [
    "css",
    "scss"
    // ".module.scss"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true
  },
  "files.trimTrailingWhitespace": true,
  "files.associations": {
    ".eslintrc": "jsonc",
    ".stylelintrc": "jsonc",
    ".prettierrc": "jsonc",
    "*.tsx": "typescriptreact",
    ".env.*": "dotenv"
  },
  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
  // "[json]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // Plugins
  "tabnine.experimentalAutoImports": true,
  "material-icon-theme.files.associations": {
    "tsconfig.json": "tune",
    "tsconfig-build.json": "tune",
    "*.webpack.js": "webpack",
    "*.e2e-test.ts": "test-ts"
  },
  "workbench.colorTheme": "Aura Soft Dark",
  "security.workspace.trust.untrustedFiles": "newWindow",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}

*/

// HUSKY

/*

Executar o comando no terminal para adicioanr o hook ao husky que irá executar o lint-stage

npx husky add .husky/pre-commit "npx lint-staged"


para pre-push
npx husky add .husky/pre-push "npm run test:coverage"


Após instalar o pacote como dependência de desenvolvimento git-commit-msg-linter
executar no terminal

npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"

*/
