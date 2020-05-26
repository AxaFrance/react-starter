# GUIDELINES REACT JS

> Here you can find the Axa Front End Community recommandations for developping React Application

- [GUIDELINES REACT JS](#guidelines-react-js)
  - [Philosophy](#philosophy)
  - [Organize your application](#organize-your-application)
    - [General structure](#general-structure)
    - [Naming convention](#naming-convention)
  - [Stack:](#stack)
    - [ES Lint Configuration](#es-lint-configuration)
    - [Recommanded Tools](#recommanded-tools)

## Philosophy

When you develop React application you **MUST** follow somes principles:

- **DDD**: Grouping by feature. It is recommended to group the files by functionality, as the application evolves.
- **Make it simple:** Starting application with simple components. Don't use abstractions, or complexe patterns until you need it.
- **AHA Programming:** [Prefer duplication over the wrong abstraction](https://kentcdodds.com/blog/aha-programming).
- **State:** Keep state as close to where it's needed as possible. Read [Gérer son état React](https://medium.com/@olivier.youf/g%C3%A9rer-l%C3%A9tat-de-son-application-react-d160210ce68c)
- **Functionnal programming:** Fonctions pures et prog fonctionnelle => TODO JOHN

## Organize your application

### General structure

    shared
        components
            SharedComponent
        helpers
        images
        styles
    layout
        App
        Header
        Footer
        Routes
    pages
        MyComponent1
        MyComponent2

- **shared:** All shared components/functions.
- **layout:** Contains general components of the application like header, footer, menu, etc.
- **pages:** Contains content of pages.

### Naming convention

- PascalCase for component files name (except index.js)
- Components files:
  - ** \_\_tests\_\_:** **CAN** contains all tests. Depends of the team choice for better readability.
    - **[Component].\*.test/spec**
    - **[Component].feature**
    - **[Component].steps**
    - **[Component].stories**
  - index.js: **MUST** expose public interface of the component.
  - **[Component].js/jsx/ts/tsx:** **MUST** expose the view. The file **CAN**, within reason, contains multiple subcomponents in the same file.
  - **[Component].container:** The container **MUST** link view and logic. API Call, computing data, calculating, Redux call etc. Generally call external hooks.
  - **[Component].hooks:** **CAN** contains hooks of the component.
  - **[Component].reducer:** **CAN** contains state management.
  - **[Component].services:** **CAN** contains API calls.
  - **[Component].pure:** **CAN** contains a set of pure functions.
  - **[Component].constants:** **CAN** contains constants.
  - **[Component].scss/css:** **MUST** contains css/scss properties

## Stack:

- Npm
- Git
- [React](https://fr.reactjs.org/)
- [React Script (Create React APP)](https://github.com/facebook/create-react-app#readme)
- [ES Lint](https://github.com/eslint/eslint/blob/master/README.md)
- [Prettier](https://github.com/prettier/prettier/blob/master/README.md)
- [Jest](https://github.com/facebook/jest/blob/master/README.md)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Toolkit Axa](https://github.com/AxaGuilDEv/react-toolkit)
- [React OIDC](https://github.com/AxaGuilDEv/react-oidc)

### ES Lint Configuration

- [AirBnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/README.md)
- [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- TODO: A completer

### Recommanded Tools

**For VsCode**

- ESLint
- SonarLint
- Prettier
- GitLens
- Jest

**For IntelliJ**

- SonarLint
- Prettier
- EditorConfig

// TODO: Other editor

// TODO: React Script
