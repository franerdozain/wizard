// import {User} from "../Scripts/userClass"
// import {} from "../Scripts/locStorOperations"
// import {} from "../Scripts/validations"

const form = document.querySelector('form');

function validateRegFormPhase1() {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    console.log(data);
}