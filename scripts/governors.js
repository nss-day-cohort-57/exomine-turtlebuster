//import getGovernor()
import { getGovernors } from "./database.js";
//save getGovernor() to variable
const governors = getGovernors();

//html for the active governor choices
export const govsHTML = () => {
    let html = '<h2 for="governors">Choose a Governor:</h2> '
    html += `<select id='governor'>`
    html += `<option value='0'>Choose a Governor: </option>`
    for (const governor of governors) {
        if (governor.active === true) {
            html += `<option value="${governor.id}">${governor.name}</option>`
        }
    }
    html += `</select>`
    return html
}