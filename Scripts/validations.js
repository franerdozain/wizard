function validateName(firstName, lastName) {
    const namePattern = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
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


function getHouseNumber(houseNumber) {
    let houseNumber;
        while (isNaN(houseNumber) || houseNumber <= 0);
        return houseNumber;
}
