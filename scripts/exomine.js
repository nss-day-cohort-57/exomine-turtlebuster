import { totalMineralPerColonyHTML } from "./colonies.js"
import { purchaseMineral } from "./database.js"
import { facilitiesHTML, totalMineralPerFacilityHTML } from "./facilities.js"
import { govsHTML } from './governors.js'
import { orders } from "./orders.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
            purchaseMineral()
        }
    }
)

//function that adds all other functions together to create one large HTML element to be displayed to the dom
export const exomine = () => {
    return `
        <h1>Solor System Mining Marketplace</h1>
        <article class="choices">
            <div class= "dropDown_tabs">
            <section class="choices__governors options">
            ${govsHTML()}
            </section>
            <section class="choices__facilities options">
            ${facilitiesHTML()}  
            </section>
            </div>
            <section class="colony__minerals">
            ${totalMineralPerColonyHTML()}
            </section>
        </article>
        <article class="lower_half>
            <section class="choices__minerals options">
            ${totalMineralPerFacilityHTML()}
           </section>
        </article>
        <article>
        <section class="inventory"> ${orders()}</section>
            <button id="orderButton" class="orderButton">Purchase Mineral</button>
        </article>
    `
}