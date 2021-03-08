const Employee = require('../lib/Employee');


const obj = new Employee('jacob', 2, 'jacob@jacobplace.net');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the Employee"s name when called', () => {
            
            console.log(`Returned ${obj.name}`);

            expect(obj.name).toEqual('jacob');

        });
    });

    describe('getId', () => {
        it('should return the Employee"s id number when called', () => {

            console.log(`Returned ${obj.id}`)

            expect(obj.id).toEqual(2);
        });
    });

});