
// func to remove 1 ton of mineral from selected mineral and addd 1 
// ton of selected mineral to colony selected gov is over
import { setMineral, getFacilities, getMinerals, getFacilitiesMinerals } from "./database.js";


// transient Object once mineral selected
let mineralChoice = false
let mineralFacilityId = null
const facilityMinerals = getFacilitiesMinerals()

// event listener to hear mineral selection and set the mineralId and the quantity amount in the temp Obj
document.addEventListener(
    "change",
    (event) => {

        if (event.target.name === "mineral") {
            mineralChoice = true
            mineralFacilityId = parseInt(event.target.value)
            setMineral(parseInt(event.target.id))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    })

    //funct to get entire facilty mineral obj from selected 
const facilityMinObject = () => {
    for (const facilityMineral of facilityMinerals) {
        if (mineralFacilityId === facilityMineral.id) {
            return facilityMineral
        }
    }
}
// function to find the mineral and the facility for the order to interpolate a string for the space cart
const spaceCartItems = () => {
    const minerals = getMinerals()
    const facilities = getFacilities()
    const facilityMins = facilityMinObject()
    for (const mineral of minerals) {
        for (const facility of facilities) {
            if (facilityMins.mineralId === mineral.id && facilityMins.facilityId === facility.id) {
                // returns HTML string with quantity amount interpolated mineral and facilty names for space cart
                return `<div>
                1 ton of ${mineral.name} from ${facility.name} 
                </div>`
            }
        }
    }
}

/// func to add spaceCartItems once mineral is selected and return string with HTML header
export const orders = () => {
    let HTML = "<h2>Space Cart</h2>"
    if (mineralChoice === true) {
        HTML += spaceCartItems()
    }
    return HTML
}

