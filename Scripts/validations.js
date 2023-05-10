function validateName(firstName, lastName) {
    const namePattern = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
    return namePattern.test(`${firstName} ${lastName}`);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateDateOfBirth(dateOfBirth) {
    const dobPattern = /^(\d{2})\/(\d{2})\/(\d{2})$/;
    return dobPattern.test(dateOfBirth)
}

function getCity() {
    const city = prompt("Please enter a city name:");
    return city;
}

function getStreet() {
    const street = prompt("Please enter a street name:");
    return street;
}

function getHouseNumber() {
    let houseNumber;
    do {
      houseNumber = parseInt(prompt("Please enter a positive house number:"));
    } while (isNaN(houseNumber) || houseNumber <= 0);
    return houseNumber;
}

function getImageUrl() {
    let imageUrl;
    do {
      imageUrl = prompt("Please enter the URL of an image:");
      const extension = imageUrl.split(".").pop().toLowerCase();
      if (!["jpg", "jpeg", "png", "gif", "bmp"].includes(extension)) {
        alert("Invalid image URL. Please enter a URL that points to an image file.");
        imageUrl = null;
      }
    } while (!imageUrl);
    return imageUrl;
}
  