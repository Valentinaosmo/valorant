import styles from './card.css'


export enum Attribute {
    "name" = "name",
    "abilities"="abilities",
    "roles" = "roles",


}

class Card extends HTMLElement {
    name?: string;
    roles?: string;
    abilities?:string;
  
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            roles: null,
            name: null,
            abilities:null,
       
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="">
                <section>
                <img src="${this.abilities}" alt="">
                <h1>Name: ${this.name}</h1>
                <p>Role: ${this.roles}</p>
                
                <style>
                ${styles}
                </style>


            
                
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;