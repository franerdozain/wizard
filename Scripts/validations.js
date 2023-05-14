function validateName(firstName, lastName) {
    const namePattern = /^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})+$/;
    return namePattern.test(`${firstName} ${lastName}`);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateDateOfBirth(dateOfBirth) {
    const dobPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    return dobPattern.test(dateOfBirth);
}

function getHouseNumber(houseNumberProvided) {
    return houseNumberProvided === "" || houseNumberProvided > 0 ? true : false;
}

function isValidImageUrl(url) {
    // this function only checks data URL image format and if there isn't a match checks for file extension, but doesn't guarantee that the img is valid and accessible 
    const isDataUrlImage = url.startsWith("data:image/");
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const validExtension = imageExtensions.some(extension => url.endsWith(extension)); 

    return isDataUrlImage || validExtension;
}

function changeStyleImageInput() {
    const imgInput = document.getElementById("image-url")
    const imageUrl = imgInput.value;
    isValidImageUrl(imageUrl) ? imgInput.style.border = "1px solid #cccccc" : imgInput.style.border = "1px solid red"
    return imgInput
}

