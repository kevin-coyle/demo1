import { FusionElement } from '../FusionElement';
/**
 * @slot - This heading content
 */
export declare class FusionHeading extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Decorator toggle
     */
    decorator?: boolean;
    /**
     * Align property
     * - **center** aligns the heading to the center
     */
    align?: 'center';
    /**
     * Color property
     * - **knockout** changes the color to knockout token
     */
    color?: 'knockout';
    /**
     * Heading variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**display-xl** renders a heading with the heading display-xl preset treatment</li>
     * <li>**display-lg** renders a heading with the heading display-lg preset treatment</li>
     * <li>**display** renders a heading with the heading display preset treatment</li>
     * <li>**display-sm** renders a heading with the heading display-sm preset treatment</li>
     * <li>**headline-lg** renders a heading with the heading headline-lg preset treatment</li>
     * <li>**headline-lg** renders a heading with the heading headline-lg preset treatment</li>
     * <li>**kicker** renders a heading with the kicker preset treatment</li>
     * <li>**core-text-lg** renders a heading with the variant core-text-lg preset treatment</li>
     * <li>**data-heading** renders a heading with the data-heading preset treatment</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'display-xl' | 'display-lg' | 'display' | 'display-sm' | 'headline-lg' | 'headline';
    /**
     * Dynamic tag name for the component
     * 1) This is needed to use proper semantic heading treatments depending on where the banner lives on the page
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**h1** renders an `h1` tag</li>
     * <li>**h2** renders an `h2` tag. This is the default</li>
     * <li>**h3** renders an `h3` tag</li>
     * <li>**h4** renders an `h4` tag</li>
     * <li>**h5** renders an `h5` tag</li>
     * <li>**h6** renders an `h6` tag</li>
     * </ul>
     * </fusion-text-passage>
     */
    tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-heading': FusionHeading;
    }
}
//# sourceMappingURL=heading.d.ts.map