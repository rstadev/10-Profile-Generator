class Employee {

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    };
        getId = () => {
            return this.id;
        };
        getName = () => {
            return this.name;
        };
        getEmail = () => {
            return this.email;
        };
        getRole = () => {
            return 'Employee'
        }
};

module.exports = Employee;


// };
// // Employee.prototype.getName = function () {
// //     return name;
// // };

// // Employee.prototype.getRole = function () {
// //     return 'Employee';
// // };

// // Employee.prototype.getEmail = function () {
// //     return email;
// // }
// // // Employee.prototype.getId = () => {
// //     return Employee.id;
// // }

// // Employee.prototype.getName = () => {

// // }
// // getEmail = () => {
// //     return email;
// // };

// module.exports = Employee