import { purchaseMineral } from "./database.js"


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
            <section class="choices__governors options">
                ${()}
            </section>
            <section class="choices__facilities options">
                ${()}
            </section>
        </article>

        <article>
            <button id="orderButton">Purchase Mineral</button>
        </article>

        <article class="customOrders">
            <h2>Colony Minerals</h2>
            ${()}
        </article>
    `
}