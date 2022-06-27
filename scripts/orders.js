

 // func to remove 1 ton of mineral from selected mineral and addd 1 
 // ton of selected mineral to colony selected gov is over
import { setMineral, setQuantity, getMinerals, getOrders } from "./database.js";

// event listener to hear mineral selection and set the mineralId and the quantity amount in the 
// transient Object once mineral selected
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.name.startsWith("mineral")) {
            setMineral(parseInt(clickEvent.target.value))
            setQuantity(parseInt(1))
        }
    }
)

// function to find the mineral and the facility for the order to interpolate a string for the space cart
   const spaceCartItems = (order) => {
     const minerals = getMinerals()
     // finds mineral in order and return mineralId
     const foundMineral = minerals.find(
        (mineral) => {
            return mineral.id === order.mineralId
        })
        //finds faciility in order and return facilityId
    const foundFacility = facilities.find(
        (facility) => {
            return facility.id === order.facilityId
        })
        // returns HTML string with quantity amount interpolated mineral and facilty names for space cart
        return `<li>
                 1 ton of ${foundMineral.name} from ${foundFacility.name} 
                </li>`
    }

/// calls getOrders func to map spaceCartItems to map and join as string
    export const orders = () => {
        
        const orders = getOrders()
    
        let html = "<ul>"
    
        const listItems = orders.map(spaceCartItems)
    
        html += listItems.join("")
        html += "</ul>"
    
        return html
    }
    
