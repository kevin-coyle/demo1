# Fusion Web Components

Fusion Web Components provides presentational UI components to be consumed by [COMPANY NAME] web applications.

## Developing Locally

First, clone the repository and install the project dependencies:

```bash
npm install --legacy-peer-deps
```

Note, because of a peer dependency issue with `reach/router` it is necessary to install with `--legacy-peer-deps` for the
time being. This will no longer be necessary once Storybook updates to 6.4, tracked here:
https://github.com/storybookjs/storybook/issues/14619.

Then, run the project with the following command

```bash
npm start
```

This will build the project and open Storybook at http://localhost:6006 in your browser.

## Working with the library

Please read the [code guidelines documentation](docs/CODE_GUIDELINES.md) in order to successfully develop with and contribute to the library.

If you use VS Code, we highly recommend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

## Build

TODO

## Support

TODO
