import { LitElement, html, css} from 'lit-element';

export class Background extends LitElement {

    static get styles() {
        return css`
            .background {
                height: 90vh;
                width: 100%;
                background: white;
                display: block;
            }
        `;
    }

    static get properties() {
        return {
            
        }
    }

    render() {
        return html`
            <div class="background">
               <!--<patones-element></patones-element>-->
               <lavega-element></lavega-element>
            </div>
        `;
    }
}
customElements.define('background-element', Background);