describe('instanceof', () => {
    class Person {

    }

    it('should have problem using typeof', () => {
        const person: Person = new Person();

        console.log(typeof person);
    });

    it('should support instanceof', () => {
        const person: Person = new Person();

        expect(person instanceof Person).toBeTruthy();
    });
});