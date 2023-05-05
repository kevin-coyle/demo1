import { LitElement } from 'lit';
/**
 * @slot - The component content
 */
export declare class FusionBadge extends LitElement {
    static get styles(): import("lit").CSSResult;
    /**
     * The badge text
     */
    text?: string;
    /**
     * Size variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**success** renders a badge with success state treatment</li>
     * <li>**warning** renders a badge with warning state treatment</li>
     * <li>**error** renders a badge with error state treatment</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'success' | 'warning' | 'error';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-badge': FusionBadge;
    }
}
