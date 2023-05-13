// On page opening
const checkIfAccessIsAllowed = () => {
  checkLevlAccess(3);
  return accessGranted ? accessGranted : goPreviousPage(2)
}



const nextPageButton = document.getElementById('next-page-button');
const imageUrlInput = document.getElementById('image-url');
const errorMessage = document.getElementById('error-message');
const prevPageButton = document.getElementById('prev-page-button');
const hobbiesInput = document.getElementById('hobbies');
const hobbiesList = document.getElementById('hobbies-list');
imageUrlInput.addEventListener('input', validateImageUrl);


const submitForm = () => {
  const formPhase3 = document.getElementById("formPhase3");

  formPhase3.addEventListener("submit", (e) => {
      e.preventDefault();
      // get data from form
      const formData = new FormData(formPhase3);
      const img = formData.get("image-url");
      const hobbies = formData.get("hobbies");
      
      // prepare data to be sent to local storage
      userDataObj.img = img;
      userDataObj.hobbies = hobbies;
      userDataObj.accessLvl += 1   
      if (isValidImageUrl(img)) {
          setDataInLocStorage(userDataObj)
          goNextPage(3)
      }
  });

}


// nextPageButton.addEventListener('click', () => {
//   if (isValidImageUrl(imageUrlInput.value)) {
//     goNextPage();
//   }
// });

prevPageButton.addEventListener('click', () => {
  console.log('it works')
  goPreviousPage(3);

})


hobbiesInput.addEventListener('input', () => {
  hobbiesList.innerHTML = '';
  const hobbies = hobbiesInput.value.split(',');
  for (const hobby of hobbies) {
    const trimmedHobby = hobby.trim();
    if (trimmedHobby) {
      const li = document.createElement('li');
      li.textContent = trimmedHobby;
      hobbiesList.appendChild(li);
    }
  }
});

checkIfAccessIsAllowed()
submitForm();