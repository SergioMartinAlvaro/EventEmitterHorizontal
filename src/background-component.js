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

            .bg {
                position: relative;
                z-index: 9;
                height: 80vh;
                width: 100%;
            }

            .yoli {
                position: relative;
                z-index: 10;
                height: 10vh;
                width: 100%;

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
               <div class="bg">
                    <lavega-element></lavega-element>
               </div>
               <div class="yoli">
                    <yoli-element></yoli-element>
               </div>
            </div>
        `;
    }
}
customElements.define('background-element', Background);