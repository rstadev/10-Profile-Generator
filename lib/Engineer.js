const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email).getRole();
        this.github = github;
    }
        getGitHub(){
            return this.github;
        };
        getRole = () => {
            return 'Engineer';

    };
// Engineer.prototype.getRole = function () {
//     return 'Engineer';
};
module.exports = Engineer
