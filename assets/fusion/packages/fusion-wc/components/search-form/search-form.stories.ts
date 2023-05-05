import { html } from 'lit';
import { spread } from '../../directives/spread';
import './search-form';

export default {
  title: 'Components/Search Form',
  component: 'fusion-search-form',
  parameters: {
    status: { type: 'stable' },
    actions: {
      handles: ['change', 'closeMobileOverlay']
    }
  }
};

function sampleOnClickFunction() {
  console.log('Hello There!');
}
export const Default = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''} ?hideLabel=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const WithLabel = () => html`
  <fusion-search-form label="Search" .value=${''} ?notListItems=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" variant="static">List Item 1</fusion-list-item>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" variant="static">List Item 2</fusion-list-item>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" variant="static">List Item 3</fusion-list-item>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" variant="static">List Item 4</fusion-list-item>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 5" variant="static">List Item 5</fusion-list-item>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 6" variant="static">List Item 6</fusion-list-item>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 7" variant="static">List Item 7</fusion-list-item>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 8" variant="static">List Item 8</fusion-list-item>
    </fusion-list>
  </fusion-search-form>
`;

export const EmptyStateWithMessage = (args) => html`
  <fusion-search-form .value=${''} ?isEmpty=${true}>
    <fusion-text-passage slot="emptyMessage" ?capLinelength=${true}
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</fusion-text-passage
    >
  </fusion-search-form>
`;

export const EmptyStateNoMessage = (args) => html` <fusion-search-form .value=${''} ?isEmpty=${true}> </fusion-search-form> `;

export const Disabled = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''} ?disabled=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const Error = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''} errorNote="This is errorNote" ?isError=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const BareWithLabel = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''} variant="bare">
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const Bare = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''} variant="bare" ?hideLabel=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const WithButtonAndLabel = () => html`
  <fusion-search-form .value=${''} buttonText="Search">
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const WithButtonDisabled = () => html`
  <fusion-search-form .value=${''} buttonText="Search" ?disabled=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const WithButtonError = () => html`
  <fusion-search-form .value=${''} buttonText="Search" ?isError=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const WithButton = () => html`
  <fusion-search-form .value=${''} buttonText="Search" ?hideLabel=${true}>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const DynamicPosition = () => html`
  <div style="display: flex; height: 100vh; align-items: flex-end">
    <fusion-search-form .value=${''} ?isDynamic=${true} buttonText="Search">
      <fusion-list>
        <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
          >List Item 1</fusion-list-item
        >
        <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
          >List Item 2</fusion-list-item
        >
        <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
          >List Item 3</fusion-list-item
        >
        <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
          >List Item 4</fusion-list-item
        >
      </fusion-list>
    </fusion-search-form>
  </div>
`;

export const Fieldnote = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''} fieldNote="This is fieldNote">
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const FieldnoteAsSlot = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''}>
    <span slot="field-note">This is fieldNote as slot</span>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;

export const ErrorNoteAsSlot = (args) => html`
  <fusion-search-form ${spread(args)} .value=${''} ?isError=${true}>
    <span slot="error">This is errorNote as slot</span>
    <fusion-list>
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 1" id="search-item-1" variant="static"
        >List Item 1</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 2" id="search-item-2" variant="static"
        >List Item 2</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 3" id="search-item-3" variant="static"
        >List Item 3</fusion-list-item
      >
      <fusion-list-item .onClick=${sampleOnClickFunction} value="Value from List Item 4" id="search-item-4" variant="static"
        >List Item 4</fusion-list-item
      >
    </fusion-list>
  </fusion-search-form>
`;
