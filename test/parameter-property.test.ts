describe('Parameter Property', () => {
    class Person {
        constructor(public name: string) {}
    }

    it('should support parameter property', () => {
        const person: Person = new Person('Aditya');
        console.log(person.name);
    });
});