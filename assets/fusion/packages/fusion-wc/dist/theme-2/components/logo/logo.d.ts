import { FusionElement } from '../FusionElement';
/**
 * @slot - The logo element
 */
export declare class FusionLogo extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Logo link
     */
    href?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-logo': FusionLogo;
    }
}
//# sourceMappingURL=logo.d.ts.map