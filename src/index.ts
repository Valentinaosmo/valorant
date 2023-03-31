import "./components/export";
import {traer_api} from "./components/data"
import Card, { Attribute } from "./components/card/card"

class AppContainer extends HTMLElement {
    cardss: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const data = await traer_api();
        console.log(data);
        data?.forEach((e:any) => {
            const prof = this.ownerDocument.createElement(
                "my-card"
            )as Card;
            prof.setAttribute(Attribute.name,e.displayName);
            prof.setAttribute(Attribute.abilities,e.fullPortrait);
            prof.setAttribute(Attribute.roles,e.description);
    



            this.cardss.push(prof);
            
        });
        this.render(this.cardss);
    }

    render(cardss: any){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``
        cardss.forEach((element : any) => {
            this.shadowRoot?.appendChild(element);
        })
    }
}
    

customElements.define("app-container", AppContainer);