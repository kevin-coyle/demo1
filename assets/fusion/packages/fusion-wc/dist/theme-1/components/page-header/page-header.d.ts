import { FusionElement } from '../FusionElement';
/**
 * @slot - The page header content
 */
export declare class FusionPageHeader extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Page header title
     */
    heading: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-page-header': FusionPageHeader;
    }
}
//# sourceMappingURL=page-header.d.ts.map