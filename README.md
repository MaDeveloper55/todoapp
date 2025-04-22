# TodoApp

A modern, responsive To-Do List Manager built with Angular 17+, NgRx, SignalStore, and Angular Material.  
This project demonstrates hybrid state management, and feature-based architecture in Angular development.
Hybrid State Management: NgRx for global user data, Signals for local to-do state.

## Features

-  Manage multiple To-Do Lists
-  Add, complete, and view tasks
-  Summarized views and detailed pages
-  State persisted with **LocalStorage**
-  Global user feature with **NgRx**
-  Fast local list/task state with **SignalStore**
-  Beautiful UI using **Angular Material**
-  Unit tests with **Jasmine & Karma**
-  Code formatting with **Prettier**, linting with **ESLint**
-  Lazy loading & standalone components as modern Angular practices.

## Tech Stack

- **Angular 19**
- **TypeScript**
- **NgRx** (Store, Effects, Devtools)
- **Angular Signals / SignalStore**
- **Angular Material**
- **SCSS Modules**
- **Prettier + ESLint**
- **Karma + Jasmine**


## Installation

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
npm install

## Development server

To start a local development server, run:

```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

To generate a code coverage report:

```bash
   ng test --code-coverage
```

## Linting & Formatting

To lint:
```bash
   npm run lint
```

To format all files:
```bash
   npm run format
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
