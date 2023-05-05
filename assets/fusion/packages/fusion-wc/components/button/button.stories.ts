import { html } from 'lit';
import { spread } from '../../directives/spread';
import './button';

export default {
  title: 'Molecules/Buttons/Button',
  component: 'fusion-button'
};

export const Default = (args) => {
  return html` <fusion-button ${spread(args)} text="Button"></fusion-button> `;
};
export const IconBefore = () => html` <fusion-button text="Button" iconPosition="before" iconName="keyboard-arrow-left"></fusion-button> `;
export const IconAfter = () => html` <fusion-button text="Button" iconPosition="after" iconName="keyboard-arrow-right"></fusion-button> `;
export const DefaultInverted = () => {
  return html`
    <div style="background: #000; padding: 2rem;">
      <fusion-button text="Button" ?inverted=${true}></fusion-button>
    </div>
  `;
};
export const Disabled = () => html` <fusion-button ?disabled=${true} text="Button"></fusion-button> `;
export const Primary = () => html` <fusion-button variant="primary" text="Button"></fusion-button> `;
export const PrimaryDisabled = () => html` <fusion-button variant="primary" ?disabled=${true} text="Button"></fusion-button> `;
export const Tertiary = () => html` <fusion-button variant="tertiary" text="Button"></fusion-button> `;
export const TertiaryIconOnly = () =>
  html` <fusion-button text="Button" iconPosition="after" iconName="search" ?hideText=${true} variant="tertiary"></fusion-button> `;
export const TertiaryInverted = () =>
  html` <div style="background: #000; padding: 2rem;"><fusion-button variant="tertiary" ?inverted=${true} text="Button"></fusion-button></div>`;
export const TertiaryDisabled = () => html` <fusion-button variant="tertiary" ?disabled=${true} text="Button"></fusion-button> `;
export const Link = () => html` <fusion-button text="Button" variant="link"></fusion-button> `;
export const LinkInverted = () =>
  html` <div style="background: #000; padding: 2rem;"><fusion-button variant="link" ?inverted=${true} text="Button"></fusion-button></div>`;
export const LinkDisabled = () => html` <fusion-button variant="link" ?disabled=${true} text="Button"></fusion-button> `;
export const FullWidth = () => html` <fusion-button ?fullWidth=${true} text="Button"></fusion-button> `;
export const Small = () => html` <fusion-button size="sm" text="Button"></fusion-button> `;
export const SmallIconAfter = () =>
  html` <fusion-button size="sm" text="Button" iconPosition="after" iconName="keyboard-arrow-right"></fusion-button> `;
export const Large = () => html` <fusion-button size="lg" text="Button"></fusion-button> `;
export const LargeIconAfter = () =>
  html` <fusion-button size="lg" text="Button" iconPosition="after" iconName="keyboard-arrow-right"></fusion-button> `;
