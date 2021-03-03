import { LitElement, html, css} from 'lit-element';

export class Background extends LitElement {

    static get styles() {
        return css`
            .background {
                height: 90vh;
                width: 100%;
                background: transparent;
                display: block;
            }

            .bg {
                position: relative;
                z-index: 0;
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
            escenarioTag: {type: String},
        }
    }

    constructor() {
        super();
        this.currentScenario = -1;
        this.escenarioTag = "";
        this.escenarios = ["lavega-element", "patones-element", "segovia-element", "barco-element", "tenerife-element", "oporto-element", "asturias-element"];
        this.setBackground();
        window.EE.on('SM:changeBackground', this.setBackground.bind(this));
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('attribute change: ', name, newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
      }

    setBackground() {
        if(this.currentScenario <= this.escenarios.length) {
            this.currentScenario++;
            this.escenarioTag = this.escenarios[this.currentScenario];
            window.escenario = this.escenarioTag;
        }
        this.escenarioTag = document.createElement(this.escenarioTag);
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