import { FusionElement } from '../FusionElement';
/**
 * @slot - The content of the layout section
 */
export declare class FusionLayoutSection extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Behavioral variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**sticky** allows the layout section to stick to the screen until the section reaches the bottom of the layout or the next layout section.</li>
     * </ul>
     * </fusion-text-passage>
     */
    behavior?: 'sticky';
    /**
     * Top style
     * 1) Used to create dynamic sticky containers that can be adjusted based on the content
     */
    top?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-layout-section': FusionLayoutSection;
    }
}
//# sourceMappingURL=layout-section.d.ts.map