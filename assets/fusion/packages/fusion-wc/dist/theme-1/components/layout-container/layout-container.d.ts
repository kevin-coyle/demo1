import { FusionElement } from '../FusionElement';
/**
 * @slot - The contents of the layout container
 */
export declare class FusionLayoutContainer extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Size variant
     * - **narrow** renders a layout container narrower than the default
     */
    variant?: 'narrow';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-layout-container': FusionLayoutContainer;
    }
}
//# sourceMappingURL=layout-container.d.ts.map