import { getColonies, setColony, getColoniesMinerals, getMinerals, getGovernors } from "./database.js";

const governors = getGovernors()
const minerals = getMinerals()
const colonies = getColonies()

let chosenGov = null
let colonyId = null

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {

            chosenGov = true

            const governorID = (parseInt(event.target.value))

            for (const governor of governors) {
                if (governorID === governor.id)
                    colonyId = governor.colonyId
            }

            setColony(colonyId)

            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    })

const selectedColony = () => {
    for (const colony of colonies) {
        if (colonyId === colony.id) {
            return colony
        }
    }
}

export const totalMineralPerColonyHTML = () => {

    const coloniesMinerals = getColoniesMinerals()

    let colonyHTML = ''

    if (colonyId === null) {

        colonyHTML = `<h2>Colony Minerals</h2>`
    } else {
        const colony = selectedColony()

        colonyHTML += `<section class="colony_info--${colony.id}">
           <h2>Colony Minerals for ${colony.name}</h2></section>`

        for (const coloniesMineral of coloniesMinerals) {
            for (const mineral of minerals) {

                if (colony.id === coloniesMineral.colonyId && mineral.id === coloniesMineral.mineralId) {
                    colonyHTML += `<ul> 
                    
                        <li name="mineral" value="${colony.id}">
                        ${coloniesMineral.quantity} tons of ${mineral.name}</li>`
                }
            }
        }
        colonyHTML += `</ul>`
    }
    return colonyHTML
}