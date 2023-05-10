// check if user is allowed to enter this phase or redirect to allowed phase
const checkIfAccessIsAllowed = () => {
    checkLevlAccess(2);
    console.log("access", accessGranted);
    return accessGranted ? accessGranted : window.location = "phase1.html"
}
checkIfAccessIsAllowed();

const validateCity = (city) =>{
    return false
}
const validateStreet = (street) => {
   return true
}
const validateNumber = () =>{
   return true
}

const validateForm = (city, street, number) => {
    if (validateCity(city)) {
        if (validateStreet(street)) {
            if (validateNumber(number)) {
                return true;
            } return `Incorrect number of street`;
        } return `Incorrect street`;
    } return `Incorrect city`;
}

const submitForm = () => {
    const formPhase2 = document.getElementById("formPhase2");

    formPhase2.addEventListener("submit", (e) => {
        e.preventDefault();
        // get data from form
        const formData = new FormData(formPhase2);
        const city = formData.get("city");
        const street = formData.get("street");
        const number = formData.get("number");
        
        // prepare data to be sent to local storage
        userDataObj.city = city;
        userDataObj.street = street;
        userDataObj.number = number;

        // if(validateForm(city, street, number)) {
        //     updateLocStorage(userDataObj)
        // } else {
            
        // }

    });


}
submitForm();

console.log(userDataObj);