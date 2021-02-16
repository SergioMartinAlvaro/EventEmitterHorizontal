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
            escenarios: {type: Array},
            currentScenario: {type: String},
            escenarioTag: {type: String}
        }
    }

    constructor() {
        super();
        this.currentScenario = -1;
        this.escenarioTag = "";
        this.escenarios = ["lavega-element", "patones-element", "barco-element"];
        window.EE.on('SM:changeBackground', this.changeBackground.bind(this));
    }



    changeBackground() {
        if(this.currentScenario <= this.escenarios.length) {
            this.currentScenario++;
            this.escenarioTag = this.escenarios[this.currentScenario];
        }
        this.escenarioTag = document.createElement(this.escenarioTag);
        this.requestUpdate();
    }

    render() {
        return html`
            <div class="background">
               <div class="bg" id="bg">
                ${this.escenarioTag}
               </div>
               <div class="yoli">
                    <yoli-element></yoli-element>
               </div>
            </div>
        `;
    }
}
customElements.define('background-element', Background);