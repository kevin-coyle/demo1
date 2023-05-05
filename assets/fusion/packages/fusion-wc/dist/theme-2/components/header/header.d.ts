import { FusionElement } from '../FusionElement';
/**
 * @slot - The header content
 */
export declare class FusionHeader extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Is active state
     * 1) Set to true when small screen menu is open
     */
    isActive?: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-header': FusionHeader;
    }
}
//# sourceMappingURL=header.d.ts.map