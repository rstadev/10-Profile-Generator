const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the Employee"s name when called', () => {
            const obj = new Employee('jacob', 2, 'jacob@jacobplace.net');
            
            console.log(obj.name);

            expect(obj.name).toEqual('jacob');

        });
    });

});