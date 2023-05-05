import { html } from 'lit';
import { spread } from '../../directives/spread';
import './heading';

export default {
  title: 'Atoms/Text/Heading',
  component: 'fusion-heading'
};

export const Heading2Default = (args) => html` <fusion-heading ${spread(args)}>Heading 2</fusion-heading> `;
export const Heading1 = () => html` <fusion-heading tagName="h1">Heading 1</fusion-heading> `;
export const Heading3 = () => html` <fusion-heading tagName="h3">Heading 3</fusion-heading> `;
export const Heading4 = () => html` <fusion-heading tagName="h4">Heading 4</fusion-heading> `;
export const Heading5 = () => html` <fusion-heading tagName="h5">Heading 5</fusion-heading> `;
export const Heading6 = () => html` <fusion-heading tagName="h6">Heading 6</fusion-heading> `;

export const Heading2Variant1 = () => html` <fusion-heading variant="display-xl">Heading with Heading 1 preset applied</fusion-heading> `;

export const Heading2Variant3 = () => html` <fusion-heading variant="display">Heading with Heading 3 preset applied</fusion-heading> `;

export const Heading2Variant4 = () => html` <fusion-heading variant="display-sm">Heading with Heading 4 preset applied</fusion-heading> `;

export const Heading2Variant5 = () => html` <fusion-heading variant="headline-lg">Heading with Heading 5 preset applied</fusion-heading> `;

export const Heading2Variant6 = () => html` <fusion-heading variant="headline">Heading with Heading 6 preset applied</fusion-heading> `;
