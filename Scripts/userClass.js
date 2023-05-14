class User {
    constructor(name, email, dateOfBirth) {
        this.name = name
        this.email = email
        this.birthdate = dateOfBirth
        this.city = ""
        this.street = ""
        this.number = NaN
        this.image = ""
        this.hobbies = []
        this.happiness = ""
        this.skydiving = ""
        this.oneUsd = ""
        this.accessLvl = 2
    }
}

function createUserInstance(name, email, birthdate) {
    return new User(name, email, birthdate)
}