# [DS React]

The React wrapper layer for the [DS Web Components]

## Running Storybook

1. At the root of the project, run `yarn workspace fusion-wc build` to build the web components needed for the React wrappers.
2. Run `yarn workspace fusion-react start` to spin up the React storybook.

## How to use web components in [DS React]

[TODO] Solidify and elaborate on the process

1. Install the `fusion-web-components` package
2. Build the `fusion-web-components` package
3. Run `yarn workspace fusion-react plop` to automatically build the React wrapper. Name the component like the dash case, but with Pascal case. So `fusion-button` would become `FusionButton`. That will automatically bring in the proper web component.

If you are creating a `Button` component using the `fusion-web-components` `fusion-button`, you would write your `Button.tsx` file like this:
