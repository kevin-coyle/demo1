import { FusionElement } from '../FusionElement';
/**
 * @slot - The default slot to put badges or other components
 */
export declare class FusionLinkListItem extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * The link text
     */
    text?: string;
    /**
     * Active link
     */
    isActive?: boolean;
    /**
     * The link URL
     */
    href?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-link-list-item': FusionLinkListItem;
    }
}
//# sourceMappingURL=link-list-item.d.ts.map