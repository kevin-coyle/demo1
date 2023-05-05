import { FusionElement } from '../FusionElement';
/**
 * @slot - The component content
 */
export declare class FusionPanel extends FusionElement {
    static get styles(): import("lit").CSSResult;
    spacing?: 'condensed';
    removeSm?: boolean;
    variant?: 'dotted';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-panel': FusionPanel;
    }
}
//# sourceMappingURL=panel.d.ts.map