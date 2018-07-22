# ABC Product Management: AngularJS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Why Angular
- Expressive HTML
- Powerful Data binding
- Modular by design
- Built-in Backend Integration

### Anatomy of Angular
![alt text](images/anatomy1.png)

- Component
![alt text](images/component1.png)

Selecting a Language
--------------------
There are many languages to choose from. i.e.

The Java Script Language Specification officially called - ECMAScript(ES)
- The current version of ECMAScript is ES-5 and ES-2015(formerly known as ES-6)
- ES-2015 must be transpiled; means ES-2015 must be converted to ES5 syntax by a tool before browser process it.
- TypeScript (Super set of Java Script and Strong typing)
![alt text](images/selectinglang.png)

### What is TypeScript
- TypeScript is a open source Language
- Super set of JavaScript.
- Transpiles to plain JavaScript.
- Strongly typed.

TypeScript playground on [live coding](http://www.typescriptlang.org/play/).

### What is NPM(Node Package Manager)
- npm is a command line utility
- The package manager for JavaScript.
- Using we can install libraries, packages and applications and their dependencies.
- We can download npm from the following link. [Download NPM](https://nodejs.org/en/download/)

### Boilerplate code for Angular Application using CLI

### Modules
![alt text](images/es2015modules.png)

## Components
What is a component?
Application Architecture
![alt text](images/apparch.png)

![alt text](images/component2.png)

### Decorator
- A function that adds `metadata` to a class, its members, or its method argument.
- Prefixed with @
- Angular provides built-in decorators.
- **@Component()**

```TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC Product Management';
}
```

Defining Template
------------------
![alt text](images/definingtemplate.png)

Styling Framework: http://getbootstrap.com/
Nice Font: https://fontawesome.com/

To install bootstrap and font-awesome use the following command
```console
npm install bootstrap font-awesome
```
To make it available in our component, we need to import in our styles.css


Angular Directives
------------------
![alt text](images/directive1.png)

For of VS For in
----------------
- For in : Iterating over the index
- For of : Iterating over the values
![alt text](images/forifvsforin.png)

Life Cycle
----------
- OnInit: Perform component initialization, retrieve data.
- OnChanges: Perform action after change to input properties.
- OnDestroy: Perform cleanup

Building a custom Pipe
----------------------
![alt text](images/customepipe.png)
