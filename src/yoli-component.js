import { LitElement, html, css} from 'lit-element';

export class Yoli extends LitElement {

    constructor() {
        super();
        this.left = 0;
        this.yolimari = false;
        this.style.setProperty('--left-yoli', this.left);
        window.EE.on('SM:move-yoli', this.moveYoli.bind(this));
    }

    static get styles() {
        return css`
            .yoli {
                height: 10vh;
                width: 100px;
                background: red;
                margin-left: var(--left-yoli);
            }
        `;
    }

    fire() {
        window.EE.emit("SM:move-yoli");
    }

    moveYoli() {
        !this.yolimari ? this.yolimari = this.shadowRoot.querySelector(".yoli") : this.yolimari;
        this.left+=3;
        this.yolimari.style.setProperty('--left-yoli', (this.left)+"px");
        this.restartPosition();
    }

    restartPosition() {
        console.log(this.left)
        if(this.left >= 100) {
            window.EE.emit("SM:completeTravel");
            this.left = 0;
        }
    }



    render() {
        return html`
            <div class="yoli" @click="${this.fire}">
                <div class="body">
                  <!--  <img src="../../img/Yoli.png" alt="Yoli" class="imgBody" /> -->
                    <div class="rightArm"></div>
                    <div class="rightLeg"></div>
                </div>
            </div>
        `;
    }
}
customElements.define('yoli-element', Yoli);