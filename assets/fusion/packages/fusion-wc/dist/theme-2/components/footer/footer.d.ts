import { FusionElement } from '../FusionElement';
/**
 * @slot - The footer content
 * @slot top - The top content (above the default slot)
 * @slot bottom - The bottom content (below the default slot)
 */
export declare class FusionFooter extends FusionElement {
    static get styles(): import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-footer': FusionFooter;
    }
}
//# sourceMappingURL=footer.d.ts.map