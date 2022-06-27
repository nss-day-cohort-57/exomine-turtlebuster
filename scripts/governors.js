//import getGovernor()
//import getColonies()
import { getGovernor } from "./database.js";
import { getColonies } from "./database.js";
//save getGovernor() to variable
//save getConolonies()to variable
const governors = getGovernor();


//return governors objs with active status
const activeGovernors = () => {
    let governorArr = []
    //loop through governors with governor
    for (const governor of governors) {
        //conditional if governor.status ===true
        if (governor.active === true) {
            //returns governorObj
            governorArr.push(governor)
        }
    }
    return governorArr
}


//gov selector
export const govsHTML = () => {
    let activeGovs = activeGovernors()
    //name attribute needed to reference the form data
    for (const activeGov of activeGovs) {
    let html = `<label for="governors">Choose a Governor:</label>
  <select name="governors" id="governor">
    <option value="${activeGov.id}">${activeGov.name}</option>
  </select>`
    return html
}
    //return html string of active governor.name with drop down input type id name
}
//export for exomine.js

//change event
document.addEventListener(
  "change",
  (event) => {
      if (event.target.id === "governor") {
          setGovernor(parseInt(event.target.value))
      }
  }
)