// DOM interactions
const form = document.querySelector('form')

// if user has already fill an input and submitted, this function will show that info hosted at the local storage
const fillWithExistingData = () => {
    const formPhase1 = document.getElementById("formPhase1");
    if(userDataObj){
        const formData = new FormData(formPhase1);
        
        formData.set("name", userDataObj.name);
        formData.set("email", userDataObj.email);
        formData.set("birthdate", userDataObj.birthdate);

        formPhase1.elements.name.value = formData.get("name");
        formPhase1.elements.email.value = formData.get("email");
        formPhase1.elements.birthdate.value = formData.get("birthdate");
    }
}

// On submission validate form details, create new user, add it to localStorage
function validateRegFormPhase1(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const nameLastN = data.name.split(" ")

    if (nameLastN.length >= 2 && validateName(nameLastN[0], nameLastN[1])) {
        if (validateEmail(data.email)) {
            if (validateDateOfBirth(data.birthdate)) {
                if(userDataObj){
                    userDataObj.name = data.name;
                    userDataObj.email = data.email;
                    userDataObj.birthdate = data.birthdate;                    
                    setDataInLocStorage(userDataObj);
                } else {
                    setDataInLocStorage(createUserInstance(data.name, data.email, data.birthdate));
                }
                goNextPage(1)
            }
        }
    } else {
        const inputNameLastN = document.getElementById("name");
        inputNameLastN.style.border = "1px solid red"
    }
}


//create next page btn if user is going backwards, to avoid creation of new user instance that will delete the previous data entered
const createNextPageBtn = () => {
    if(userDataObj){
        const nextPage = document.createElement("button");
        nextPage.id = "nextPage";
        nextPage.textContent = "Next Page";
        
        const phase1NavBtn = document.getElementById("phase1NavBtn");
        phase1NavBtn.append(nextPage);

        // change width of submit button to share it with 'next page' button
        const submitBttn = document.getElementById("submitBttn");
        submitBttn.style.width = "fit-content";
    }
}

// add an event listener to the next page button
const goNextWithoutCreatingNewUserInstance = () => {
    const nextPage = document.getElementById("nextPage")
    if(userDataObj) nextPage.addEventListener("click", e => {
        e.preventDefault();
        goNextPage(1)
    })
}

fillWithExistingData();
createNextPageBtn();
goNextWithoutCreatingNewUserInstance();