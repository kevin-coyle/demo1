import { html } from 'lit';
import '../../.storybook/components/f-po/f-po';
import { spread } from '../../directives/spread';
import './grid';

export default {
  title: 'Molecules/Layout & Containers/Grid',
  component: 'fusion-grid'
};

export const Default = (args) => html`<fusion-grid ${spread(args)}>
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const SideBySide = () => html`<fusion-grid variant="side-by-side">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const TwoUp = () => html`<fusion-grid variant="2up">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const TwoUpBreakFaster = () => html`<fusion-grid variant="2up" break="faster">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const TwoUpBreakSlower = () => html`<fusion-grid variant="2up" break="slower">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const ThreeUp = () => html`<fusion-grid variant="3up">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const OneToThreeUp = () => html`<fusion-grid variant="1-3up">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const OneToThreeUpBreakFaster = () => html`<fusion-grid variant="1-3up" break="faster">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const OneToThreeUpBreakSlower = () => html`<fusion-grid variant="1-3up" break="slower">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const OneToFourUp = () => html`<fusion-grid variant="1-4up">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const OneToTwoToFourUp = () => html`<fusion-grid variant="1-2-4up">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const FourUp = () => html`<fusion-grid variant="4up">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 7</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 8</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const GapNoneFourUp = () => html`<fusion-grid variant="4up" gap="none">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 7</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 8</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const GapSmallFourUp = () => html`<fusion-grid variant="4up" gap="sm">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 7</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 8</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const GapLargeFourUp = () => html`<fusion-grid variant="4up" gap="lg">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 7</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 8</f-po>
  </fusion-grid-item>
</fusion-grid>`;

export const TwoTo4to6Up = () => html`<fusion-grid variant="2-4-6up">
  <fusion-grid-item>
    <f-po>Grid Item 1</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 2</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 3</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 4</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 5</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 6</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 7</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 8</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 9</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 10</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 11</f-po>
  </fusion-grid-item>
  <fusion-grid-item>
    <f-po>Grid Item 12</f-po>
  </fusion-grid-item>
</fusion-grid>`;
