import { FusionElement } from '../FusionElement';
/**
 * @slot - The text passage content
 */
export declare class FusionTextPassage extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Inverted variant
     * 1) Used for dark backgrounds
     */
    inverted?: boolean;
    /**
     * Size variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li> **xs** renders smaller typography than the `sm` variant</li>
     * <li> **sm** renders smaller typography than the default</li>
     * </ul>
     * </fusion-text-passage>
     */
    size: 'xs' | 'sm' | 'lg';
    /**
     * Cap linelength
     * 1) Applies linelength-container to the text passage
     */
    capLinelength: boolean;
    /**
     * Add the light dom styles when this component is connected to a page
     */
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-text-passage': FusionTextPassage;
    }
}
//# sourceMappingURL=text-passage.d.ts.map