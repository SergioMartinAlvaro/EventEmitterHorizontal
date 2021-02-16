import { LitElement, html, css} from 'lit-element';

export class BarcoAvila extends LitElement {

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

        .rowEnd {
            align-items: flex-end;
            justify-content: flex-end;
        }

        .village {
            height: 92vh;
            width:75%;
        }

        .cows {
            height: 92vh;
            width: 25%;
        }

        .cow-elem {
            width: 50%;
            height: 15vh;
            position: relative;
            bottom: 12px;
        }
        `;
    }

    render() {
        return html` 
            <div class="container flexStyle rowFlex">
                <div class="cows flexStyle rowFlex">
                    <div class="cow-elem flexStyle rowFlex">
                        <img src="img/barco/cow2.png" class="imgLeft">
                    </div>
                    <div class="cow-elem flexStyle rowFlex">
                        <img src="img/barco/cow1.png" class="imgLeft">
                    </div>
                </div>
                <div class="village flexStyle rowEnd">
                    <img src="img/barco/pueblo.png" class="imgLeft">
                </div>
            </div>

        `;
    }
}
customElements.define('barco-element', BarcoAvila);