class Employee {

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.getId = () => {
            return id;
    }
        this.getName = () => {
            return name;
    };
        this.getEmail = () => {
            return email;
    }
        this.getRole = () => {
            return 'Employee';
    }
};
};
// Employee.prototype.getId = () => {
//     return Employee.id;
// }

// Employee.prototype.getName = () => {

// }

module.exports = Employee