const Employee = require('../lib/Employee');


const obj = new Employee(2, 'jacob', 'jacob@jacobplace.net', 'engineer');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the Employee"s name when called', () => {
            
            console.log(`Returned ${obj.name}`);

            expect(obj.name).toEqual('jacob');

        });
    });

    describe('getId', () => {
        it('should return the Employee"s id number when called', () => {

            console.log(`Returned ${obj.id}`);

            expect(obj.id).toEqual(2);
        });
    });

    describe('getEmail', () => {
        it('should return the Employee"s assigned email when called', () => {
            console.log(`Return ${obj.email}`);

            expect(obj.email).toEqual('jacob@jacobplace.net');
        });
    });

    describe('getRole', () => {
        it('should return Employee when called', () => {
            console.log(`Returned ${obj.getRole()}`);

            expect(obj.getRole()).toEqual('Employee');
        });
    });
});