# nuxt-my-template

Not yet complete!!!

## Provides the following
- Full TypeScript support (including Vuex)
- Efficient coding with Pug and Stylus
- Static analysis and automatic format by ESLint
- Indicator of component division by AtomicDesign
- Efficient build by webpack setting

## Features Vue Settings
- Nuxt.js
  - Default is SSR
  - Router
  - Vuex
- TypeScript
  - Client / Server
- HTML template engine
  - Pug
- CSS Pre-Processors
  - Stylus
- Linter / Formatter
  - ESLint
  - Prettier
- API Server
  - Express
  - like BFF
- Unit Test
  - Jest

## Features

- TypeScript full support(client /server side)
- nuxt-property-decorator
  - Component & TypeScript
  - SFC(single-file-component) Style
- Pug as a HTML template engine
  - Rewriting vue's initial template using pug and stylus
- Auto Format CSS to Stylus
  - Auto Sort Stylus Property
- vuex-module-decorators
  - Great decorators that can type check in Vuex store
  - Sample module  ~/store/
  - [championswimmer/vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators).
- Auto Lint on save
- Atomic Design to separate the components, but it's not that exact
  - Template element is not implemented

## Coding Style

### Style Guide

- Vue: Based on official Style Guide
  - [Style Guide — Vue.js](https://vuejs.org/v2/style-guide/index.html)
- TypeScript: Based on unofficial Style Guide (TypeScript Deep Dive)
  - [StyleGuide · TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/docs/styleguide/styleguide.html)

### TypeScript Settings

```
	"strict": true,
	"noUnusedLocals": true,
	"noUnusedParameters": true,
	"noImplicitReturns": true,
	"noFallthroughCasesInSwitch": true,
```

### Others

- 2 spaces per indentation

## TODO

- [x] Nuxt Basic Setup
- [x] Install ESLint/Pretter
  - [x] Setup ESLint
  - [x] Setup Prettier
  - [x] Setup Vue/Vetur basic Linter/Formatter
  - [x] LintOnSave(VSCode)
- [x] Install TypeScript
  - [x] Setup tsconfig.json
    - [x] Client Side
    - [x] Server Side
- [x] Install CSS Pre-Processors
  - [x] Install Stylus or Sass
    - [x] Setup Format
    - [x] Setup Lint
    - [x] Add Global Style File
- [x] nuxt-property-decorator (class-style-component)
- [x] Install HTML Template Engine (Pug)
- [x] Install vuex-module-decorators
  - [x] Setup Basic Vuex store
- [x] Setup Atomic Design
  - [x] Rewrite Sample Component
- [x] Add Script to package.json
  - [x] Report/Modern Build
- [x] Jest Test
  - [x] Add basic test
    - [x] SnapShot
    - [x] Vue component
    - [x] Vue component method
    - [x] Vuex
      - [x] State
      - [x] Mutation
      - [x] Action
      - [x] MutationAction
- [ ] Add .vscode file
  - [x] settings.json
  - [ ] Reccomend Extentions
- [ ] Write Readme.md
  - [x] Coding style Guide
  - [ ] Snippets
  - [x] Build Setup
- [ ] Setup Webpack
  - [ ] Purge CSS
- [ ] Setup Express
  - [x] Create Simple API
  - [ ] Setup Layered Architecture
  - [ ] Create asyncData Sample
- [ ] Setup OGP

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# build for production including modern bundle 
$ npm run build:modern

# Generate report.html to help analyze bundle content
$ npm run report

# Run Lint and Auto fix format
$ npm run Lint
$ npm run Lint:fix

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
