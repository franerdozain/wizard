// On page opening
const checkIfAccessIsAllowed = () => {
  checkLevlAccess(3);
  return accessGranted ? accessGranted : goPreviousPage(2)
}
checkIfAccessIsAllowed()


const nextPageButton = document.getElementById('next-page-button');
const imageUrlInput = document.getElementById('image-url');
const errorMessage = document.getElementById('error-message');
const prevPageButton = document.getElementById('prev-page-button');
const hobbiesInput = document.getElementById('hobbies');
const hobbiesList = document.getElementById('hobbies-list');



imageUrlInput.addEventListener('input', validateImageUrl);
nextPageButton.addEventListener('click', () => {
  if (isValidImageUrl(imageUrlInput.value)) {
    goNextPage();
  }
});

prevPageButton.addEventListener('click', () => {
    goPreviousPage();
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