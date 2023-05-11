// get data from local storage
const userDataStr = localStorage.getItem("user");
const userDataObj = JSON.parse(userDataStr);
let accessGranted = false;

//check level access, call the checkLevlAccess() with corresponding level of each page
function checkLevlAccess(level){
    return userDataObj.accessLvl >= level ? accessGranted = true : accessGranted = false;
}

function setDataInLocStorage(userObj) {
    localStorage.setItem('user', JSON.stringify(userObj))
}
