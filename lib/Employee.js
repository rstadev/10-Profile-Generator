class Employee {

    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.getName = () => {
            return name;
    };
        this.getId = () => {
            return id;
    }
        this.getEmail = () => {
            return email;
    }
        this.getRole = () => {
            return role;
    }
};
};
// Employee.prototype.getId = () => {
//     return Employee.id;
// }

// Employee.prototype.getName = () => {

// }

module.exports = Employee