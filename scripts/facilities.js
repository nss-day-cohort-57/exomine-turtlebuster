import { getFacilitiesMinerals, getMinerals, getFacilities, setFacility } from "./database.js";

// set functions to variables
const minerals = getMinerals()
const facilities = getFacilities()

//created var to hold a value which will hold the facilityID value once the facility change event takes place 
let facilityId = 0
//created var to hold a value which will hold the govId value once the governor change event takes place
let govId = 0

//listens to when governor is selected
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            //sets globally scoped var govId value to selected governor
            govId = (parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    })

// function that will give selectable options as dropdown for facility with facility.name 
export const facilitiesHTML = () => {
    let html = "<h2>Choose a Facility</h2>"
    html += '<select id="facility">'
    html += `<option value= "0">Choose a Facility...</option>`
    // makes facility options only populate happen governor is selected
    if (govId > 0) {
        for (const facility of facilities) {
            html += `<option value="${facility.id}">${facility.name}</option>`
        }
    }
    html += "</select>"
    return html
}

// listens for facility to change and sets that facilityId in transient state Obj in database
// also sets the var facilityId to the value of the facility clicked
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            //sets the facilityId value in the transient Object
            setFacility(parseInt(event.target.value))
            //sets the globally scoped var value to the facilityId value  
            facilityId = (parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))

        }
    })

// funtion to iterate facilities and check if facility.id is equal to the globally scoped
// facilityId var when it is it will return the entire facility object
const selectedFacility = () => {
    for (const facility of facilities) {
        if (facilityId === facility.id) {
            return facility
        }
    }
}

// function that returns a HTML string of mineral name and quantity in a facility chosen
export const totalMineralPerFacilityHTML = () => {
    //sets var equal to the func that maps the array of facility mineral objects 
    const facilitiesMinerals = getFacilitiesMinerals()
    //var that is equal to a empty modifiable HTML string
    let facilityHTML = ''
    //checks the value of the globally scoped var dependent on the facility changeEvent
    if (facilityId === 0) {
        // sets string equal to default header text of box until var value changes
        facilityHTML = `<h2>Facility Minerals</h2>`
    } else { // if globally scoped var value has changed from 0 facility has been chosen 
        //set var equal to and invokes func that returns facility object //chosen here so that HTML will be
        // forced to render new with updated quantity amount every time this function is called not only at DOM initail load
        const facility = selectedFacility()
        // adds interpolated string under header text for selected facility 
        facilityHTML += `<section class="facility_info--${facility.id}">
        <h2>Facility Minerals for ${facility.name}</h2></section>`

        // iterate through minerals and facilityMinerals to get mineral per Facility quantity
        for (const facilityMineral of facilitiesMinerals) {
            for (const mineral of minerals) {
                // test facility.id to facilityMineral.facilityId and if facility status is active and if 
                //the mineral.id is equal to mineralFacility.mineralId
                if (facility.id === facilityMineral.facilityId && facility.active && mineral.id === facilityMineral.mineralId) {
                    //once all three are true interpolate that facilites name w the total minerals available there 
                    //and the minerals name with selectable radio buttons to chose
                    facilityHTML += `<lu> 
                    <input type="radio" name="mineral" id="${mineral.id}"value="${facilityMineral.id}"/>
                    ${facilityMineral.quantity} tons of ${mineral.name}
                    </lu>`
                }
            }
        }
        //return facilityHTML
    } return facilityHTML
}