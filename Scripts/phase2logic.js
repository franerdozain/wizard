// check if user is allowed to enter this phase or redirect to allowed phase
const checkIfAccessIsAllowed = () => {
    checkLevlAccess(2);
  return accessGranted ? accessGranted : goPreviousPage(2)
}

// if user has already fill an input and submitted, this function will show that info hosted at the local storage
const fillWithExistingData = () => {
    const formPhase2 = document.getElementById("formPhase2");
    if(userDataObj){
        const formData = new FormData(formPhase2);
        
        formData.set("city", userDataObj.city);
        formData.set("street", userDataObj.street);
        formData.set("number", userDataObj.number);

        formPhase2.elements.city.value = formData.get("city");
        formPhase2.elements.street.value = formData.get("street");
        formPhase2.elements.number.value = formData.get("number");
    }
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
        if(userDataObj.accessLvl < 3) userDataObj.accessLvl +=1;
        
        if (getHouseNumber(number)) {
            setDataInLocStorage(userDataObj)
            goNextPage(2)
        } 
    });
}

const goBack = () => {
    const prevPage = document.getElementById("prevPage")
    prevPage.addEventListener("click", (e) =>{
        e.preventDefault()
        goPreviousPage(2)
    })
}


checkIfAccessIsAllowed();
fillWithExistingData();
submitForm();
goBack();