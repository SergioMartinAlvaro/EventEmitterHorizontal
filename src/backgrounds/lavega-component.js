import { LitElement, html, css} from 'lit-element';

export class LaVega extends LitElement {

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

        

        .bridge {
            height: 70vh;
            width: 20%;
            position: relative;
            z-index: 2;
            justify-content: right;
        }

        .bridge>img {
            display: block;
            float: right;
            width: 350%;
        }

        .mountain {
            height: 100vh;
            width: 80%;
            position: relative;
            z-index: 1;
        }
        `;
    }

    render() {
        return html` 
            <div class="container flexStyle rowFlex">
                <div class="bridge flexStyle rowFlex">
                    <img src="img/lavega/puente.png" class="imgLeft">
                </div>
                <div class="mountain flexStyle rowFlex">
                    <img src="img/lavega/mountain.png">
                </div>
            </div>

        `;
    }
}
customElements.define('lavega-element', LaVega);