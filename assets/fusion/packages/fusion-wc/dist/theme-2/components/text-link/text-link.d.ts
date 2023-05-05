import { FusionElement } from '../FusionElement';
/**
 * @slot - The component content
 */
export declare class FusionTextLink extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * The link URL
     */
    href?: string;
    /**
     * Style variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li> **display** applies display treatment to the text link (e.g. article title link)</li>
     * <li> **secondary** applies secondary treatment to the text link (e.g. non-prominent links)</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'display' | 'secondary';
    /**
     * Size variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li> **sm** renders a smaller typography preset than the default</li>
     * </ul>
     * </fusion-text-passage>
     */
    size?: 'sm';
    /**
     * Inverted variant
     * 1) Used for dark backgrounds
     */
    inverted?: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-text-link': FusionTextLink;
    }
}
//# sourceMappingURL=text-link.d.ts.map