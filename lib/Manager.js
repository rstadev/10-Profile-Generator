const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;

        this.getRole = () => {
            return 'Manager';
        };
    };
};

module.exports = Manager