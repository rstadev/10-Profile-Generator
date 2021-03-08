function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
        console.log('work in progress!')
    }
};

// Employee.prototype.getId = () => {
//     return Employee.id;
// }

// Employee.prototype.getName = () => {

// }

module.exports = Employee