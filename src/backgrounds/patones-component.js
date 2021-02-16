import { LitElement, html, css} from 'lit-element';

export class Patones extends LitElement {

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
        
        
        .container {
            height: 90vh;
            width: 100%;
            position: relative;
            z-index: 1;
        }

        .tree {
            height: 150px;
            width: 10%;
        }

        .pagoda {
            height: 300px;
            width: 20%;
        }

        .mountains {
            height: 600px;
            width: 60%;
        }
        `;
    }

    render() {
        return html` 
            <div class="container flexStyle rowFlex">
                <div class="tree flexStyle rowFlex">
                    <img src="img/patones/arbol.png">
                </div>
                <div class="pagoda flexStyle rowFlex">
                    <img src="img/patones/pagoda.png">
                </div>
                <div class="tree flexStyle rowFlex">
                    <img src="img/patones/arbol.png">
                </div>

                <div class="mountains flexStyle rowFlex">
                    <img src="img/patones/hills.png">
                </div>
            </div>

        `;
    }
}
customElements.define('patones-element', Patones);