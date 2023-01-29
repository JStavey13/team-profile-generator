const Employee = require("./employee")

class Manager extends Employee{
    constructor(name, id, email, office, role){
        super(name, id, email)

        this.office = office
        this.role = "Manager"
    }

    getOffice() {
        return this.office}

    getRole() {
        return "manager"
    }

}



module.exports = Manager