import {html, unsafeCSS} from 'lit'; 
import {customElement} from 'lit/decorators.js'; 
import {FusionElement} from '../FusionElement'; 
import styles from './button-group.scss';

/**
 * @slot - The component content 
 */ 

@customElement('fusion-button-group') 

export class FusionButtonGroup extends FusionElement { 
  
  static get styles() { 
    return unsafeCSS(styles.toString()); 
  } 
  
  render() { 
    
    const componentClassNames = this.componentClassNames('fusion-c-button-group', { }); 

    return html`
      <div class='${componentClassNames}'>
        <slot></slot>
      </div>
    `; 
  } 
} 

declare global { interface HTMLElementTagNameMap { 'fusion-button-group': FusionButtonGroup; } }
