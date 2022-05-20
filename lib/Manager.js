const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.officeNumber = office;
    }

    getRole() {
        return 'Manager';
    }

    getOffice() {
        return this.officeNumber;
    }
}

module.exports = Manager;