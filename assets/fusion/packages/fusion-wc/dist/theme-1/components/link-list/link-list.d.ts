import { FusionElement } from '../FusionElement';
/**
 * @slot - The link list items
 */
export declare class FusionLinkList extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Behavioral variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**responsive** renders a horizontal wrapping link list that converts to a stacked link list on large screens</li>
     * <li>**horizontal** renders a horizontal wrapping link list on all screens</li>
     * </ul>
     * </fusion-text-passage>
     */
    behavior?: 'responsive' | 'horizontal';
    /**
     * Inverted variant
     * 1) Used for dark backgrounds
     */
    inverted?: boolean;
    /**
     * Size variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**sm** renders a link list with a smaller typography</li>
     * </ul>
     * </fusion-text-passage>
     */
    size?: 'sm';
    /**
     * Spacing between link list items
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**condensed** renders a link list with a more compact display</li>
     * </ul>
     * </fusion-text-passage>
     */
    spacing?: 'condensed';
    /**
     * Style variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**secondary** renders a link list with a more subtle visual treatment</li>
     * <li>**display** renders a link list with a display treatment (e.g. article title)</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'secondary' | 'display';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-link-list': FusionLinkList;
    }
}
//# sourceMappingURL=link-list.d.ts.map