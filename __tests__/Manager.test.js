const Manager = require('../lib/Manager')

const obj = new Manager(3, 'percy', 'percy@prefect.net', 111)

describe('Manager', () => {
    describe('getName', () => {
        it('should return the Manager"s name when called', () => {
            
            console.log(`Returned ${obj.name}`);

            expect(obj.name).toEqual('percy');

        });
    });

    describe('getId', () => {
        it('should return the Manager"s id number when called', () => {

            console.log(`Returned ${obj.id}`);

            expect(obj.id).toEqual(3);
        });
    });

    describe('getEmail', () => {
        it('should return the Manager"s assigned email when called', () => {
            console.log(`Return ${obj.email}`);

            expect(obj.email).toEqual('percy@prefect.net');
        });
    });

    describe('getRole', () => {
        it('should return Manager when called', () => {
            console.log(`Returned ${obj.getRole()}`);

            expect(obj.getRole()).toEqual('Manager');
        });
    });

    describe('officeNumber', () => {
        it('should return officeNumber property when called', () => {
            console.log(`Returned ${obj.officeNumber}`);

            expect(obj.officeNumber).toEqual(111);
        });
    });
});