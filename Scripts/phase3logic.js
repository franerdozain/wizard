// On page opening
const checkIfAccessIsAllowed = () => {
  checkLevlAccess(3);
  return accessGranted ? accessGranted : goPreviousPage(3)
}

const nextPageButton = document.getElementById('submitBtnPhase3');
const imageUrlInput = document.getElementById('image-url');
const prevPageButton = document.getElementById('prevPage');
imageUrlInput.addEventListener('input', changeStyleImageInput);

// if user has already fill an input and submitted, this function will show that info hosted at the local storage
const fillWithExistingData = () => {
  const formPhase3 = document.getElementById("formPhase3");
  if (userDataObj) {
    const formElements = formPhase3.elements;
    formPhase3.elements["image-url"].value = userDataObj.image;

    for (const element of formElements) {
      if (element.type === "checkbox" && userDataObj.hobbies.includes(element.name)){
        element.checked = true;
      }
    }
  }
}

const submitForm = () => {
  const formPhase3 = document.getElementById("formPhase3");

  formPhase3.addEventListener("submit", (e) => {
    e.preventDefault();
    // get data from form
    const formData = new FormData(formPhase3);
    const img = formData.get("image-url");

    // prepare data to be sent to local storage    
    const arrayOfHobbies = []
    formData.forEach((value, key) => {
      const checkboxHobby = formPhase3.elements[key];
      
      if (checkboxHobby.type === "checkbox" && checkboxHobby.checked) {
        arrayOfHobbies.push(value)
      }
    });
    
    // put data in local storage
    userDataObj.hobbies = arrayOfHobbies;
    userDataObj.image = img;
    
    if (isValidImageUrl(img)) {
      if (userDataObj.accessLvl < 4) userDataObj.accessLvl += 1;
      setDataInLocStorage(userDataObj)
      goNextPage(3)
    }
  })
}

prevPageButton.addEventListener('click', (e) => {
  e.preventDefault();
  goPreviousPage(3);
})

checkIfAccessIsAllowed();
fillWithExistingData();
submitForm();