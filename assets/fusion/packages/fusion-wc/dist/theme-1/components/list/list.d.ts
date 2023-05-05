import { FusionElement } from '../FusionElement';
/**
 * @slot - The list items
 */
export declare class FusionList extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Style variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**bare** removes any lines from in between list items</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'bare';
    /**
     * Spacing variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**padded** applies more padding in between list items compared to the default</li>
     * <li>**condensed** reduces padding in between list items compared to the default</li>
     * </ul>
     * </fusion-text-passage>
     */
    spacing?: 'padded' | 'condensed';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-list': FusionList;
    }
}
//# sourceMappingURL=list.d.ts.map