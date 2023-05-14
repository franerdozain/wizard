const form = document.querySelector('form')
const response = {};
const darkColor = "rgb(57, 95, 26)";
const lightColor = "rgb(15, 158, 27)";

// check if user is allowed to enter this phase or redirect to allowed phase
const checkIfAccessIsAllowed = () => {
  checkLevlAccess(4);
return accessGranted ? accessGranted : goPreviousPage(4)
}

const fillWithExistingData = () => {
  if(userDataObj.happiness && userDataObj.skydiving && userDataObj.oneUsd){
    const happiness = document.querySelector(`.happiness[value="${userDataObj.happiness}"]`);
    const skydiving = document.querySelector(`.skydiving[value="${userDataObj.skydiving}"]`);
    const oneUsd = document.querySelector(`.oneUsd[value="${userDataObj.oneUsd}"]`);

    happiness.style.backgroundColor = darkColor;
    skydiving.style.backgroundColor = darkColor;
    oneUsd.style.backgroundColor = darkColor;
  }
}

const changeColorBtn = (className) => {
  const btnUnclicked = document.querySelector(`.${className}[style="background-color: ${darkColor};"]`)
  if(btnUnclicked) btnUnclicked.style.backgroundColor = lightColor;
}

const setButtonValue = (event) => {
  event.preventDefault();
  const key = event.target.className;
  const value = event.target.value;
  changeColorBtn(key)
  event.target.style.backgroundColor = darkColor;

  response[key] = value; 
}

const generateAlert = () => {
  const alert = document.getElementById("alert")
  const alertSpan = document.createElement("span");
  alertSpan.textContent = "Please answer all the questions";
  alertSpan.style.color = "red";
  alert.appendChild(alertSpan)
}

const handleSubmit = (event) => {
  event.preventDefault();
  if(response.happiness) userDataObj.happiness = response.happiness;
  if(response.skydiving) userDataObj.skydiving = response.skydiving;
  if(response.oneUsd) userDataObj.oneUsd = response.oneUsd;

  if(userDataObj.happiness && userDataObj.skydiving && userDataObj.oneUsd){
    setDataInLocStorage(userDataObj);
    goNextPage(4)
  } else {
    generateAlert();
  }
}






// function submitForm () {
  
//   const submitBtnHealth = document.getElementById("submitBtnHealth");
//   submitBtnHealth.addEventListener("click", (e) => {
//     e.preventDefault();
//     // bring the options of the form and add an event listener each
    
  
    // for (const option of optBtn) {
    //   option.addEventListener("click", (e) => {
    //     e.preventDefault()
    //     const parentDiv = option.parentElement
  
    //     // check which option was selected in each section
    //     if(parentDiv.id === "happiness"){
    //       console.log(option.textContent);
    //       userDataObj.happiness = option.textContent;
    //     } else if (parentDiv.id === "skydiving"){
    //       userDataObj.skydiving = option.textContent;
    //     } else if (parentDiv.id === "usd"){
    //       userDataObj.oneUsd = option.textContent;
    //     }
    //   })
    // }
    
//     if(userDataObj.happiness !== undefined && userDataObj.skydiving !== undefined && userDataObj.oneUsd !== undefined){
//       setDataInLocStorage(userDataObj)
//       goNextPage(4)
//     }
    
//   })
  
// }

const goBack = () => {
    const prevPage = document.getElementById("prevPage")
    prevPage.addEventListener("click", (e) =>{
        e.preventDefault()
        goPreviousPage(4)
    })
}



checkIfAccessIsAllowed();
fillWithExistingData();
// submitForm();
goBack();