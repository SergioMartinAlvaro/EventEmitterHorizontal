import { LitElement, html, css} from 'lit-element';

export class Ground extends LitElement {

    constructor() {
        super();
        this.groundElements = [];
        this.right = 10;
       // window.EE.on("SM:move-ground", this.moveGround.bind(this))
    }

    static get styles() {
        return css`
            .ground {
                height: 10vh;
                width: 100%;
                display: flex;
                background: grey;
                position: relative;
                z-index: 10;
            }
        `;
    }

    render() {
        return html`
            <div class="ground">
               <!-- <yoli-element></yoli-element> -->
            </div>
        `;
    }
}
customElements.define('ground-element', Ground);