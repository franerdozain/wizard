// On page opening
const checkIfAccessIsAllowed = () => {
    checkLevlAccess(4);
    return accessGranted ? accessGranted : goPreviousPage(4)
}
checkIfAccessIsAllowed()

// DOM interactions 
const userInfoTable = document.querySelector('table')
const imageSpot = document.querySelector('span')
const buttonBack = document.querySelector('button')

// Test object for localStorage
// localStorage.setItem('user', JSON.stringify({name: "Andrei Milman", email: "vyrido@gmail.com", birthdate: "2023-05-02", city: "Haifa", street: "Elezor", accessLvl: 4, number: 4, hobbies: [1, 2, 3], image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png'}))
// let userDataObj = JSON.parse(localStorage.getItem('user'))


function createRowFromData(cellName, cellData) {
    let row = userInfoTable.insertRow()
    let name = row.insertCell()
    let data = row.insertCell()
    let capitalizedCellName = `${cellName.charAt(0).toUpperCase()}${cellName.slice(1)}:`
    name.appendChild(document.createTextNode(capitalizedCellName))
    data.appendChild(document.createTextNode(cellData))
}

function renderUserInfoTable() {
    Object.keys(userDataObj).forEach(propertyKey => {
        if (propertyKey != 'image' && propertyKey != 'accessLvl' && Boolean(userDataObj[propertyKey])) {
            createRowFromData(propertyKey, userDataObj[propertyKey])
        }
    })
}

function renderImage() {
    if (Boolean(userDataObj['image'])) {
        let img = document.createElement('img')
        img.src = userDataObj['image']
        imageSpot.appendChild(img)
    }
}

buttonBack.addEventListener('click', () => {
    goPreviousPage(4)
})

renderUserInfoTable()
renderImage()