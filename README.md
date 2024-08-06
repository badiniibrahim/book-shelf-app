<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>Book Shelf App</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style&logo=SemVer&logoColor=white" alt="SemVer" />

</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running book-shelf-app](#-running-book-shelf-app)
  - [🧪 Tests](#-tests)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

## 📂 Repository Structure

The repository structure section provides an overview of how files and directories are organized within the project. Here's a detailed explanation of each part:

```sh
└── book-shelf-app/
    ├── .eslintrc.json
    ├── .gitignore
    ├── .vscode/
    │   └── settings.json
    ├── README.md
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── providers.tsx
    ├── components/
    │   ├── shared/
    │   └── ui/
    ├── components.json
    ├── cypress/
    │   └── e2e/
    ├── cypress.config.js
    ├── get-server-url.ts
    ├── jest.config.js
    ├── jest.setup.js
    ├── lib/
    │   └── utils.ts
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.mjs
    ├── public/
    │   ├── book.png
    │   ├── loader.svg
    │   ├── logo.svg
    │   ├── next.svg
    │   ├── sun.svg
    │   ├── thirdweb.png
    │   ├── type.svg
    │   └── vercel.svg
    ├── src/
    │   ├── __tests__/
    │   ├── domain/
    │   ├── hooks/
    │   ├── infrastructure/
    │   ├── lib/
    │   ├── presentation/
    │   └── usecases/
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── yarn.lock
```

## Explanation of Each Element:

## .eslintrc.json

    Configuration file for ESLint, which defines rules for linting JavaScript/TypeScript code.

## .gitignore

    Specifies files and directories that Git should ignore when committing code.

## .vscode/

    Contains configuration settings for the Visual Studio Code editor.
        settings.json : Project-specific settings for VS Code.

## README.md

    This file, providing important information about the project.

## app/

    Contains files related to the Next.js application.
        favicon.ico : The favicon for the web application.
        globals.css : Global CSS file for application styles.
        layout.tsx : Component for the application layout.
        page.tsx : Component for the main page of the application.
        providers.tsx : Components for context providers (e.g., theme context, global state).

## components/

    Contains React components used in the application.
        shared/ : Components that are shared across the application.
        ui/ : Reusable user interface (UI) components.

## cypress/

    Contains files and directories for end-to-end tests with Cypress.
        e2e/ : Directory for end-to-end tests.

    cypress.config.js
    Configuration file for Cypress.

## get-server-url.ts

    Configuration or utility file for obtaining the server URL (possibly for API calls).

## jest.config.js

    Configuration file for Jest, a JavaScript testing framework.

## jest.setup.js

    Setup file for Jest, used for configuring the testing environment.

## lib/

    Contains utilities and reusable functions for the application.
        utils.ts : File with utility functions.

## next.config.mjs

    Configuration file for Next.js, used to customize the framework's settings.

## package.json

    Project configuration file containing dependencies and npm/yarn scripts.

## postcss.config.mjs

    Configuration file for PostCSS, used for CSS transformations.

## public/

    Contains static files accessible publicly.
        book.png, loader.svg, etc. : Images and static files used in the application.

## src/

    Contains the main source code for the application.
        __tests__/ : Directory for unit tests.
        domain/ : Domain entities and types.
        hooks/ : Custom hooks used in the application.
        infrastructure/ : Infrastructure-related code (e.g., API services).
        lib/ : Project-specific utilities.
        presentation/ : Presentation components and UI logic.
        usecases/ : Use cases and business logic.

## tailwind.config.ts

    Configuration file for Tailwind CSS.

## tsconfig.json

    TypeScript configuration file.

## yarn.lock

    Yarn lock file for version locking of dependencies.

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the book-shelf-app repository:

```sh
git clone https://github.com/badiniibrahim/book-shelf-app.git
```

2. Change to the project directory:

```sh
cd book-shelf-app
```

3. Install the dependencies:

```sh
yarn install
```

---

### 🤖 Running book-shelf-app

```sh
yarn dev
```

---

### 🧪 Tests

```sh
yarn test
```

---

### 🧪 Cypress Tests

```sh
yarn cypress:run or yarn cypress:open
```

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

[↑ Return](#Top)

---
