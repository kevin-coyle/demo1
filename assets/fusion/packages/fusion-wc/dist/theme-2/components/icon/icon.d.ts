import { FusionElement } from '../FusionElement';
export declare class FusionIcon extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Icon name
     *
     * @required
     */
    focusable?: boolean | undefined;
    /**
     * Icon name
     *
     * @required
     */
    name?: string;
    /**
     * Icon path
     * 1) This points to the file where the icon sprite lives
     *
     * @required
     */
    iconUrl?: string;
    /**
     * Title
     */
    iconTitle?: string;
    /**
     * Inverted variant
     */
    inverted?: boolean;
    /**
     *
     * Append to the class name to pass classes (such as utility classes) into the internals
     */
    styleModifier?: string;
    /**
     * Get the path to the icons, either by overriding it on the window
     * or by using the bundled icon path
     */
    getIconPath(): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface Window {
        FS_ICON_URL: string;
    }
    interface HTMLElementTagNameMap {
        'fusion-icon': FusionIcon;
    }
}
//# sourceMappingURL=icon.d.ts.map