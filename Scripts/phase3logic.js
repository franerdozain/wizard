const nextPageButton = document.getElementById('next-page-button');
const imageUrlInput = document.getElementById('image-url');
const errorMessage = document.getElementById('error-message');
const prevPageButton = document.getElementById('prev-page-button');
const hobbiesInput = document.getElementById('hobbies');
const hobbiesList = document.getElementById('hobbies-list');

function validateImageUrl() {
  const imageUrl = imageUrlInput.value;
  if (!isValidImageUrl(imageUrl)) {
    errorMessage.textContent = 'Please enter a valid image URL';
    nextPageButton.disabled = true;
  } else {
    errorMessage.textContent = '';
    nextPageButton.disabled = false;
  }
}

imageUrlInput.addEventListener('input', validateImageUrl);
nextPageButton.addEventListener('click', () => {
  if (isValidImageUrl(imageUrlInput.value)) {
    window.location.href = 'phase4.html';
  }
});

prevPageButton.addEventListener('click', () => {
    window.location.href = 'phase2.html';
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