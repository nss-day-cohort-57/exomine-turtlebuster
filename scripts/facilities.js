import { getFacilitiesMinerals, getMinerals } from "database.js";

// set functions to variables

const facilitiesMinerals = getFacilitiesMinerals()
const minerals = getMinerals()
// make function that will take a facility and check the 
// total mineral amount in that facility
export const totalMineralPerFacility = (facility) => {
    const facilityHTML = null
    for (const mineral of minerals) {
        for (const facilityMineral of facilitiesMinerals) {
            if (facility.id === facilityMineral.facilityID && facility.active) {

                facilityHTML += `<section class="facility_info--${facility.id}">
                             Facility Minerals for${facility.name}</section>`
                    `<li> 
                <input type="radio" name="style" value="${facility.id}"/>
                    ${facilityMineral.quantity} tons of ${mineral.name}
                    </li>`
            
            }
        } return facilityHTML
    }
} 


