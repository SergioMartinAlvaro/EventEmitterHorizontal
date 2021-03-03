import { LitElement, html, css} from 'lit-element';

export class Oporto extends LitElement {


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
        .focus3 {
            width: 100%;
            position: absolute;
            z-index: 1;
            bottom: var(--up-field3);
        }

        .focus3 img{
            height: 100vh;
            width: 100%
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
        console.log(this.initialValueField2);
        this.initialValue = -302;
        this.initialPosition = this.initialValue + "px";
        this.style.setProperty('--up-field1', this.initialPosition);

        this.initialValueField2 = -302;
        this.initialPositionField2 = this.initialValueField2 + "px";
        this.style.setProperty('--up-field2', this.initialPositionField2);

        this.initialValueField3 = -302;
        this.initialPositionField3 = this.initialValueField3 + "px";
        this.style.setProperty('--up-field3', this.initialPositionField3);

        window.EE.on("OPO:upF1", this.increaseBackground.bind(this));
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }


    increaseBackground() {

        if(this.initialValueField3 < -102) {
            this.initialValueField3++;
            this.initialPositionField3 = this.initialValueField3 + "px";
            this.style.setProperty('--up-field3', this.initialPositionField3);
        }

        if(this.initialValueField2 < -102 && this.initialValueField3 > -250) {
            this.initialValueField2++;
            this.initialPositionField2 = this.initialValueField2 + "px";
            this.style.setProperty('--up-field2', this.initialPositionField2);
        }

        if(this.initialValue < -102 && this.initialValueField2 > -250) {
            this.initialValue++;
            this.initialPosition = this.initialValue + "px";
            this.style.setProperty('--up-field1', this.initialPosition);
        }
    }
    render() {
        return html` 
            <div class="container">
            <div class="focus1">
                    <img src="img/oporto/field-1.png" />
                </div>
                <div class="focus2">
                    <img src="img/oporto/field-2.png" />
                </div>
            </div>

        `;
    }
}
customElements.define('oporto-element', Oporto);