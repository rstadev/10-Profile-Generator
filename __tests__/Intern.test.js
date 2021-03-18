const Intern = require('../lib/Intern');


const obj = new Intern(2, 'jacob', 'jacob@jacobplace.net', 'Georgia Tech');

describe('Intern', () => {
    describe('getName', () => {
        it('should return the Intern"s name when called', () => {
            
            console.log(`Returned ${obj.name}`);

            expect(obj.name).toEqual('jacob');

        });
    });

    describe('getId', () => {
        it('should return the Intern"s id number when called', () => {

            console.log(`Returned ${obj.id}`);

            expect(obj.id).toEqual(2);
        });
    });

    describe('getEmail', () => {
        it('should return the Intern"s assigned email when called', () => {
            console.log(`Return ${obj.email}`);

            expect(obj.email).toEqual('jacob@jacobplace.net');
        });
    });

    describe('getRole', () => {
        it('should return Intern when called', () => {
            console.log(`Returned ${obj.getRole()}`);

            expect(obj.getRole()).toEqual('Intern');
        });
    });
    
    describe('getSchool', () => {
        it('should return the Intern"s school when called', () => {
            console.log(`Return ${obj.school}`);
            
            expect(obj.school).toEqual('Georgia Tech');
        });
    });
});

    // describe('school', () => {
    //     it('should return the Intern"s a', () => {
    //         console.log(`Return ${obj.email}`);

    //         expect(obj.email).toEqual('jacob@jacobplace.net');
    //     });
    // });