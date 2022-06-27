const database = {
    governors: [
        { id: 1, active: true, colonyId: 1, name: "Chow Ming" },
        { id: 2, active: true, colonyId: 1, name: "Aragorn Ellasar" },
        { id: 3, active: true, colonyId: 2, name: "Seth Curry" },
        { id: 4, active: true, colonyId: 3, name: "Darth Vader" },
        { id: 5, active: false, colonyId: 3, name: "Brodo Swaggins" }
    ],
    colonies: [
        { id: 1, name: "Tatooine" },
        { id: 2, name: "Coruscant" },
        { id: 3, name: "Dagobah" }
    ],
    minerals: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Nickel" },
        { id: 3, name: "lithium" }
    ],
    facilities: [
        { id: 1, name: "Ganymede", active: true },
        { id: 2, name: "Io", active: true },
        { id: 3, name: "Titan", active: true }
    ],
    facilitiesMinerals: [
        { id: 1, mineralId: 1, facilityId: 1, quantity: 90 },
        { id: 2, mineralId: 2, facilityId: 1, quantity: 5 },
        { id: 3, mineralId: 3, facilityId: 2, quantity: 27 },
        { id: 4, mineralId: 1, facilityId: 3, quantity: 2 },
        { id: 5, mineralId: 2, facilityId: 3, quantity: 5 },
        { id: 6, mineralId: 3, facilityId: 3, quantity: 3 },
    ],
    coloniesMinerals: [
        { id: 1, mineralId: 1, colonyId: 1, quantity: 15 },
        { id: 2, mineralId: 2, colonyId: 1, quantity: 6 },
        { id: 3, mineralId: 3, colonyId: 2, quantity: 12 },
        { id: 4, mineralId: 2, colonyId: 3, quantity: 1 }
    ],
    spaceCart: [
        {
            id: 1,
            facilityId: 2,
            mineralId: 2,
            colonyId: 3,
            quantity: 1

        }
    ],

    transientState: {}
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}
export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getFacilitiesMinerals = () => {
    return database.facilitiesMinerals.map(facilityMineral => ({ ...facilityMineral }))
}
export const getColoniesMinerals = () => {
    return database.coloniesMinerals.map(colonyMineral => ({ ...colonyMineral }))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const purchaseMineral = () => {

    const newOrder = { ...database.transientState }

    const lastIndex = database.spaceCart.length - 1
    newOrder.id = database.spaceCart[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.spaceCart.push(newOrder)

    database.transientState = {}
    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}