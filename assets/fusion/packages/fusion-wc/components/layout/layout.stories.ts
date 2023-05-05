import { html } from 'lit';
import '../../.storybook/components/f-po/f-po';
import { spread } from '../../directives/spread';
import '../layout-section/layout-section';
import './layout';

export default {
  title: 'Molecules/Layout & Containers/Layout',
  component: 'fusion-layout'
};

export const DefaultRightSidebar = (args) => html`
  <fusion-layout ${spread(args)}>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const RightSidebarBreakFaster = () => html`
  <fusion-layout break="faster">
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const RightSidebarBreakSlower = () => html`
  <fusion-layout break="slower">
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const RightSidebarGapNone = () => html`
  <fusion-layout gap="none">
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;
export const RightSidebarGapSm = () => html`
  <fusion-layout gap="sm">
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;
export const RightSidebarGapLg = () => html`
  <fusion-layout gap="lg">
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const RightSidebarGapXl = () => html`
  <fusion-layout gap="xl">
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const LeftSidebar = () => html`
  <fusion-layout variant="left-sidebar">
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const LeftSidebarBreakFaster = () => html`
  <fusion-layout variant="left-sidebar" break="faster">
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const LeftSidebarBreakSlower = () => html`
  <fusion-layout variant="left-sidebar" break="slower">
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const LeftSidebarGapNone = () => html`
  <fusion-layout variant="left-sidebar" gap="none">
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const LeftSidebarGapSm = () => html`
  <fusion-layout variant="left-sidebar" gap="sm">
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const LeftSidebarGapLg = () => html`
  <fusion-layout variant="left-sidebar" gap="lg">
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const LeftSidebarGapXl = () => html`
  <fusion-layout variant="left-sidebar" gap="xl">
    <fusion-layout-section>
      <f-po>Layout Section Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const ThreeColumnGridGapNone = () => html`
  <fusion-layout variant="left-sidebar" gap="none">
    <fusion-layout-section>
      <f-po>Layout Section Left Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <fusion-layout gap="none">
        <fusion-layout-section>
          <f-po>Main section</f-po>
        </fusion-layout-section>
        <fusion-layout-section>
          <f-po>Layout Section Right Sidebar</f-po>
        </fusion-layout-section>
      </fusion-layout>
    </fusion-layout-section>
  </fusion-layout>
`;
export const ThreeColumnGridBreakLeftSidebarSlower = () => html`
  <fusion-layout>
    <fusion-layout-section>
      <fusion-layout variant="left-sidebar" break="slower">
        <fusion-layout-section>
          <f-po>Layout Section Left Sidebar</f-po>
        </fusion-layout-section>
        <fusion-layout-section>
          <f-po>Main section</f-po>
        </fusion-layout-section>
      </fusion-layout>
    </fusion-layout-section>
    <fusion-layout-section>
      <f-po>Layout Section Right Sidebar</f-po>
    </fusion-layout-section>
  </fusion-layout>
`;

export const ThreeColumnGridBreakRightSidebarSlower = () => html`
  <fusion-layout variant="left-sidebar">
    <fusion-layout-section>
      <f-po>Layout Section Left Sidebar</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <fusion-layout break="slower">
        <fusion-layout-section>
          <f-po>Main section</f-po>
        </fusion-layout-section>
        <fusion-layout-section>
          <f-po>Layout Section Right Sidebar</f-po>
        </fusion-layout-section>
      </fusion-layout>
    </fusion-layout-section>
  </fusion-layout>
`;

export const ThreeColumnGridBreakRightSlowerSidebarCustom = () => html`
  <fusion-layout variant="left-sidebar" style="--fusion-sidebar-width: 168px">
    <fusion-layout-section>
      <f-po>Layout Section Left Sidebar (160px)</f-po>
    </fusion-layout-section>
    <fusion-layout-section>
      <fusion-layout break="slower" style="--fusion-sidebar-width: 248px">
        <fusion-layout-section>
          <f-po>Main section</f-po>
        </fusion-layout-section>
        <fusion-layout-section>
          <f-po>Layout Section Right Sidebar (240px)</f-po>
        </fusion-layout-section>
      </fusion-layout>
    </fusion-layout-section>
  </fusion-layout>
`;

export const SimplePageLayout = () => html`
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <f-po class="fusion-u-display-block fusion-u-margin-bottom-xl">Header</f-po>
    <main style="flex: 1">
      <fusion-layout-container>
        <fusion-heading tagName="h1" variant="display">Sample heading</fusion-heading>
        <fusion-text-passage class="fusion-u-display-block fusion-u-margin-bottom-xl"
          >This is sample text within a simple layout container component</fusion-text-passage
        >
        <f-po>Other main content</f-po>
      </fusion-layout-container>
    </main>
    <f-po>Footer</f-po>
  </div>
`;

export const SimplePageLayoutWithGridsOfCards = () => html`
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <f-po class="fusion-u-display-block fusion-u-margin-bottom-xl">Header</f-po>
    <main style="flex: 1">
      <fusion-layout-container>
        <fusion-heading tagName="h1" variant="display">Sample heading</fusion-heading>
        <fusion-text-passage class="fusion-u-display-block fusion-u-margin-bottom-xl"
          >This is sample text within a simple layout container component</fusion-text-passage
        >
        <fusion-grid variant="2up" class="fusion-u-display-block fusion-u-margin-bottom-xl">
          <fusion-grid-item>
            <f-po>Grid item 1</f-po>
          </fusion-grid-item>
          <fusion-grid-item>
            <f-po>Grid item 2</f-po>
          </fusion-grid-item>
        </fusion-grid>
        <fusion-grid variant="1-2-4up">
          <fusion-grid-item>
            <f-po>Grid item 1</f-po>
          </fusion-grid-item>
          <fusion-grid-item>
            <f-po>Grid item 2</f-po>
          </fusion-grid-item>
          <fusion-grid-item>
            <f-po>Grid item 3</f-po>
          </fusion-grid-item>
          <fusion-grid-item>
            <f-po>Grid item 4</f-po>
          </fusion-grid-item>
          <fusion-grid-item>
            <f-po>Grid item 5</f-po>
          </fusion-grid-item>
          <fusion-grid-item>
            <f-po>Grid item 6</f-po>
          </fusion-grid-item>
        </fusion-grid>
      </fusion-layout-container>
    </main>
    <f-po>Footer</f-po>
  </div>
`;

export const PageLayoutWithSidebar = () => html`
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <f-po class="fusion-u-display-block fusion-u-margin-bottom-xl">Header</f-po>
    <main style="flex: 1">
      <fusion-layout-container>
        <fusion-layout gap="xl">
          <fusion-layout-section>
            <fusion-heading tagName="h1" variant="display">Sample heading</fusion-heading>
            <fusion-text-passage class="fusion-u-display-block fusion-u-margin-bottom-xl">
              <p>This is sample text within the main layout section of the layout component</p>
              <p>
                Note that the 1-3up grid has break="slower" as a variant. This is to break 1 item per grid row to 3up at a larger breakpoint than the
                default because it is in a sidebar layout.
              </p></fusion-text-passage
            >

            <fusion-grid variant="2up" class="fusion-u-display-block fusion-u-margin-bottom-xl">
              <fusion-grid-item>
                <f-po>Grid item 1</f-po>
              </fusion-grid-item>
              <fusion-grid-item>
                <f-po>Grid item 2</f-po>
              </fusion-grid-item>
            </fusion-grid>
            <fusion-grid variant="1-3up" break="slower">
              <fusion-grid-item>
                <f-po>Grid item 1</f-po>
              </fusion-grid-item>
              <fusion-grid-item>
                <f-po>Grid item 2</f-po>
              </fusion-grid-item>
              <fusion-grid-item>
                <f-po>Grid item 3</f-po>
              </fusion-grid-item>
              <fusion-grid-item>
                <f-po>Grid item 4</f-po>
              </fusion-grid-item>
              <fusion-grid-item>
                <f-po>Grid item 5</f-po>
              </fusion-grid-item>
              <fusion-grid-item>
                <f-po>Grid item 6</f-po>
              </fusion-grid-item>
            </fusion-grid>
          </fusion-layout-section>
          <fusion-layout-section>
            <fusion-text-passage class="fusion-u-display-block fusion-u-margin-bottom-lg"
              >This is some arbitrary sidebar content. that takes up the space that the sidebar provides</fusion-text-passage
            >
            <f-po>FPO block within the sidebar of the page layout</f-po>
          </fusion-layout-section>
        </fusion-layout>
      </fusion-layout-container>
    </main>
    <f-po>Footer</f-po>
  </div>
`;

export const PageSampleWithThreeColumnLayout = () => html`
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <f-po class="fusion-u-display-block fusion-u-margin-bottom-xl">Header</f-po>
    <main style="flex: 1">
      <fusion-layout variant="left-sidebar">
        <fusion-layout-section>
          <fusion-text-passage class="fusion-u-display-block fusion-u-margin-bottom-lg"
            >This is some arbitrary sidebar content that takes up space that the right sidebar provides</fusion-text-passage
          >
          <f-po>FPO block within the left sidebar of the page layout</f-po>
        </fusion-layout-section>
        <fusion-layout-section>
          <fusion-layout break="slower">
            <fusion-layout-section>
              <fusion-heading tagName="h1" variant="display">Sample heading</fusion-heading>
              <fusion-text-passage class="fusion-u-display-block fusion-u-margin-bottom-xl">
                <p>
                  Note that the 1-3up grid has break="slower" as a variant. This is to break 1 item per grid row to 3up at a larger breakpoint than
                  the default because it is in a sidebar layout.
                </p></fusion-text-passage
              >
              <fusion-grid variant="1-3up" break="slower">
                <fusion-grid-item>
                  <f-po>Grid item 1</f-po>
                </fusion-grid-item>
                <fusion-grid-item>
                  <f-po>Grid item 2</f-po>
                </fusion-grid-item>
                <fusion-grid-item>
                  <f-po>Grid item 3</f-po>
                </fusion-grid-item>
                <fusion-grid-item>
                  <f-po>Grid item 4</f-po>
                </fusion-grid-item>
                <fusion-grid-item>
                  <f-po>Grid item 5</f-po>
                </fusion-grid-item>
                <fusion-grid-item>
                  <f-po>Grid item 6</f-po>
                </fusion-grid-item>
              </fusion-grid>
            </fusion-layout-section>
            <fusion-layout-section>
              <fusion-text-passage class="fusion-u-display-block fusion-u-margin-bottom-lg"
                >This is some arbitrary sidebar content that takes up space that the right sidebar provides</fusion-text-passage
              >
              <f-po>FPO block within the right sidebar of the page layout</f-po>
            </fusion-layout-section>
          </fusion-layout>
        </fusion-layout-section>
      </fusion-layout>
    </main>
    <f-po>Footer</f-po>
  </div>
`;
