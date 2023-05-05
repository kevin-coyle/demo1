import { FusionElement } from '../FusionElement';
/**
 * @slot - The component content
 */
export declare class FusionHero extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Image source
     */
    imgSrc?: string;
    /**
     * Image alt text
     */
    imgAlt?: string;
    /**
     * Position variant. Bottom left is the default position
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**top-left** renders content in the top left corner of the image</li>
     * <li>**left** renders content in the left, center part of the image</li>
     * <li>**top-center** renders content in the top, center part of the image</li>
     * <li>**center** renders content center of the image</li>
     * <li>**bottom-center** renders content bottom center of the image</li>
     * <li>**top-right** renders content top-right of the image</li>
     * <li>**right** renders content right of the image</li>
     * <li>**bottom-right** renders content bottom, right part of the image</li>
     * </ul>
     * </fusion-text-passage>
     */
    align?: 'top-left' | 'left' | 'top-center' | 'center' | 'bottom-center' | 'top-right' | 'right' | 'bottom-right';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-hero': FusionHero;
    }
}
//# sourceMappingURL=hero.d.ts.map