## Padronização de Versionamento (Git)

- GitFlow
    - Nomes de branch: feature/nome-da-feature; bugfix/nome-do-bugfix
    - Branch `raphael-henrique-braga-leivas` atua como branch `develop`  
- Commits: [Commits convencionais](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657) enforçado via [Commitlint](https://commitlint.js.org/#/)
    - type: subject(imperative)
    - sempre em português
    - possíveis `types` são
        - test: indica qualquer tipo de criação ou alteração de códigos de teste. 
        - feat: indica o desenvolvimento de uma nova feature ao projeto
        - refactor: usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. 
        - style: empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.
        - fix: utilizado quando há correção de erros que estão gerando bugs no sistema.
        - chore: indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
        - docs: usado quando há mudanças na documentação do projeto.
        - build: utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
        - perf: indica uma alteração que melhorou a performance do sistema.
        - ci: utilizada para mudanças nos arquivos de configuração de CI.
        - revert: indica a reverão de um commit anterior.

## Styleguide

Convenções de estilo são enforçados por [ESLint](.eslintrc.js) e [Prettier](.prettierrc).

- Always semicolons
- Single quotes
- Two space indentation
- Trailing commas in arrays and objects
- [Non-default exports](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/) are preferred for components
- Module imports are ordered and separated: **built-in** -> **external** -> **internal** -> **css/assets/other**
- TypeScript: strict mode, with no implicitly any
- React: functional style with Hooks (no classes)
- `const` preferred over `let`

<!-- Falta atualizar as duas seções abaixo -->

## Scripts

An explanation of the `package.json` scripts.

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `dev`           | Run TakeNote in a development environment   |
| `dev:test`      | Run TakeNote in a testing environment       |
| `client`        | Start a webpack dev server for the frontend |
| `server`        | Start a nodemon dev server for the backend  |
| `build`         | Create a production build of TakeNote       |
| `start`         | Start a production server for TakeNote      |
| `test`          | Run unit and component tests                |
| `test:e2e`      | Run end-to-end tests in the command line    |
| `test:e2e:open` | Open end-to-end tests in a browser          |
| `test:coverage` | Get test coverage                           |

## Technologies

This project is possible thanks to all these open source languages, libraries, and frameworks.

| Tech                                          | Description                               |
| --------------------------------------------- | ----------------------------------------- |
| [Codemirror](https://codemirror.net/)         | Browser-based text editor                 |
| [TypeScript](https://www.typescriptlang.org/) | Static type-checking programming language |
| [Node.js](https://nodejs.org/en/)             | JavaScript runtime for the backend        |
| [Express](https://expressjs.com/)             | Server framework                          |
| [React](https://reactjs.org/)                 | Front end user interface                  |
| [Redux](https://redux.js.org/)                | Global state management                   |
| [Webpack](https://webpack.js.org/)            | Asset bundler                             |
| [Sass](https://sass-lang.com/)                | Style preprocessor                        |
| [OAuth](https://oauth.net/)                   | Protocol for secure authorization         |
| [ESLint](https://eslint.org/)                 | TypeScript linting                        |
| [Jest](https://jestjs.io/)                    | Unit testing framework                    |
| [Cypress](https://www.cypress.io/)            | End-to-end testing framework              |