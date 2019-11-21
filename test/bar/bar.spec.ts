import {Person} from '../../src/bar/bar';
describe('Person', () => {
    let person = new Person('xiaoming', 30);
    it('person contains age property', () => {
        expect(person.age).not.toBeUndefined();
    });
});