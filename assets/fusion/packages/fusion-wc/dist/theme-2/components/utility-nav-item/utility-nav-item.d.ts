import { FusionElement } from '../FusionElement';
export declare class FusionUtilityNavItem extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Hide text toggle
     * 1) Visually hides the text so screenreaders can still read for accessibility when set to true.
     */
    hideText?: boolean;
    /**
     * URL of the utility nav item
     */
    href?: string;
    /**
     * Icon name
     */
    iconName?: string;
    /**
     * Icon position
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**before** places the icon before the text</li>
     * <li>**after** places the icon after the text</li>
     * </ul>
     * </fusion-text-passage>
     */
    iconPosition?: 'before' | 'after';
    /**
     * Text of the utility nav item
     */
    text?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-utility-nav-item': FusionUtilityNavItem;
    }
}
//# sourceMappingURL=utility-nav-item.d.ts.map