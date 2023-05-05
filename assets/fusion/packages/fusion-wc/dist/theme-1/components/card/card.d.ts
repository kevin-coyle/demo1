import { FusionElement } from '../FusionElement';
/**
 * An example element.
 *
 * @slot - The card contents
 */
export declare class FusionCard extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Style variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**bare** renders a card without a border and without padding around the content</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'bare';
    /**
     * Align variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**center** renders a card that has center aligned content/text</li>
     * </ul>
     * </fusion-text-passage>
     */
    align?: 'center';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-card': FusionCard;
    }
}
//# sourceMappingURL=card.d.ts.map