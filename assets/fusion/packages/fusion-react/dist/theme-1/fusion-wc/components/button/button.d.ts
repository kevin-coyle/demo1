import { FusionElement } from '../FusionElement';
export declare class FusionButton extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * The button text
     */
    text: string;
    /**
     * Style variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**primary** renders the button used for primary actions</li>
     * <li>**danger** renders the button used for caution actions</li>
     * <li>**bare** renders a button a bare background and no border</li>
     * <li>**link** renders a button that looks like a text link</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'primary' | 'danger' | 'bare' | 'link' | 'tertiary';
    /**
     * Disabled attribute
     */
    disabled?: boolean;
    /**
     * Target attribute for a link (i.e. set to _blank to open in new tab)
     * - **_blank** yields a link that opens in a new tab
     * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
     * - **_parent** yields a link that loads the URL into the parent browsing context of the current one.
     *   If there is no parent, this behaves the same way as _self
     * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
     */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /**
     * Strong variation for dark backgrounds
     */
    strong?: boolean;
    /**
     * URL if this is an <a> element - this swaps <button> for <a>
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
     * <li>**top** places the icon on top of the button text</li>
     * <li>**before** places the icon before the button text</li>
     * <li>**after** places the icon after the button text</li>
     * </ul>
     * </fusion-text-passage>
     */
    iconPosition?: 'top' | 'before' | 'after';
    /**
     * Size variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**sm** shrinks the button typography and overall size</li>
     * <li>**lg** increases the button typography size and overall size</li>
     * </ul>
     * </fusion-text-passage>
     */
    size?: 'sm' | 'lg';
    /**
     * Visually hide button text (but text is still accessible to assistive technology)
     * 1) Use this for icon-only buttons for accessibility
     */
    hideText: boolean;
    /**
     * Full width button
     */
    fullWidth: boolean;
    /**
     * Inverted property
     */
    inverted?: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
