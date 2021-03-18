const Engineer = require('../lib/Engineer');


const obj = new Engineer(2, 'jacob', 'jacob@jacobplace.net', 'jacobdev');

describe('Engineer', () => {
    describe('getName', () => {
        it('should return the Engineer"s name when called', () => {
            
            console.log(`Returned ${obj.name}`);

            expect(obj.name).toEqual('jacob');

        });
    });

    describe('getId', () => {
        it('should return the Engineer"s id number when called', () => {

            console.log(`Returned ${obj.id}`);

            expect(obj.id).toEqual(2);
        });
    });

    describe('getEmail', () => {
        it('should return the Engineer"s assigned email when called', () => {
            console.log(`Return ${obj.email}`);

            expect(obj.email).toEqual('jacob@jacobplace.net');
        });
    });

    describe('getRole', () => {
        it('should return Engineer when called', () => {
            console.log(`Returned ${obj.getRole()}`);

            expect(obj.getRole()).toEqual('Engineer');
        });
    });

    describe('getGitHub', () => {
        it('should return the Engineer"s github when called', () => {
            console.log(`Returned ${obj.getGitHub()}`);

            expect(obj.getGitHub()).toEqual('jacobdev');
        });
    });
});