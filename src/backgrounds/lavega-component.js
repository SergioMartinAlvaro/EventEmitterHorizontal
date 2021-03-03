import { LitElement, html, css} from 'lit-element';

export class LaVega extends LitElement {

    static get properties() {
        return {
            initialPosition: {
                type: String
            }
        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`

        .flexStyle {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        
        .columnFlex {
            align-content: stretch;
            flex-direction: column;
        }
        
        .rowFlex {
            align-items: flex-end;
            justify-content: space-around;
        }

        .focus2 {
            width: 100%;
            position: absolute;
            z-index: 2;
            bottom: var(--up-field2);
        }

        .focus2 img{
            height: 100vh;
            width: 100%
        }

        .focus1 {
            width: 100%;
            position: absolute;
            z-index: 3;
            bottom: var(--up-field1);
        }

        .focus1 img{
            height: 100vh;
            width: 100%;
            bottom: 0;
        }
        `;
    }

    firstUpdated() {
        this.init();
    }

    init() {
        this.initialValue = -302;
        this.initialPosition = this.initialValue + "px";
        this.style.setProperty('--up-field1', this.initialPosition);
        window.EE.on("PAT:upF1", this.increaseBackground.bind(this));

        this.initialValueField2 = -302;
        this.initialPositionField2 = this.initialValueField2 + "px";
        this.style.setProperty('--up-field2', this.initialPositionField2);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    increaseBackground() {
        if(this.initialValueField2 < -102) {
            this.initialValueField2++;
            this.initialPositionField2 = this.initialValueField2 + "px";
            this.style.setProperty('--up-field2', this.initialPositionField2);
        }

        if(this.initialValue < -102 && this.initialValueField2 > -150) {
            this.initialValue++;
            this.initialPosition = this.initialValue + "px";
            this.style.setProperty('--up-field1', this.initialPosition);
        }
    }

    render() {
        return html` 
            <div class="container">
                <div class="focus1">
                    <img src="img/lavega/focus-1.png" />
                </div>
                <div class="focus2">
                    <img src="img/lavega/focus-2.png" />
                </div>
            </div>

        `;
    }
}
customElements.define('lavega-element', LaVega);