//import getGovernor()
import { getGovernor } from "./database.js";
//save getGovernor() to variable
const governors = getGovernor();

//gov selector
export const govsHTML = () => {
    //let activeGovs = activeGovernors()
    //name attribute needed to reference the form data
    let html = ' '
    for (const governor of governors) {
        if (governor.active === true) {
            html += `<label for="governors">Choose a Governor:</label>
  <select name="governors" id="governor">
    <option value="${activeGov.id}">${activeGov.name}</option>
  </select>`
        }
        return html
    }
}
//export for exomine.js

//custom event
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)