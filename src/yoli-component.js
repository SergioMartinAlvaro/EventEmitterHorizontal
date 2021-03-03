import { LitElement, html, css} from 'lit-element';

export class Yoli extends LitElement {


    static get properties() {
        return {
            currentImage: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.left = 0;
        this.yolimari = false;
        this.imageMove = "yoli.gif";
        this.imageStatic = "YoliEstatica.png";
        this.currentImage = this.imageStatic;
        this.style.setProperty('--left-yoli', this.left);
        window.EE.on('SM:move-yoli', this.moveYoli.bind(this));
        window.EE.on('SM:stop-yoli', this.stopYoli.bind(this));
    }

    static get styles() {
        return css`
            .yoli {
                height: 10vh;
                width: 100px;
                margin-bottom: 232px;
                margin-left: var(--left-yoli);
            }

            .imgBody {
                height: 112px;
                width: 100px;
                margin-bottom: 232px;
            }
        `;
    }

    fire() {
        window.EE.emit("SM:move-yoli");
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    moveYoli() {
        this.currentImage = this.imageMove;
        !this.yolimari ? this.yolimari = this.shadowRoot.querySelector(".yoli") : this.yolimari;
        this.left+=4;
        this.yolimari.style.setProperty('--left-yoli', (this.left)+"px");
        this.restartPosition();
    }

    stopYoli() {
        this.currentImage = this.imageStatic;
    }

    restartPosition() {
        console.log(this.left)
        if(this.left >= 1440) {
            window.EE.emit("SM:completeTravel");
            this.left = 0;
        }
    }



    render() {
        return html`
            <div class="yoli" @click="${this.fire}">
                <div class="body">
                    <img src="../../img/${this.currentImage}" alt="Yoli" class="imgBody" /> 
                    <div class="rightArm"></div>
                    <div class="rightLeg"></div>
                </div>
            </div>
        `;
    }
}
customElements.define('yoli-element', Yoli);