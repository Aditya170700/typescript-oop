describe('Super constructor', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Person {
        department: string;

        constructor(department: string, name: string) {
            super(name);
            this.department = department;
        }
    }

    it('Should support super constructor', () => {
        const manager: Manager = new Manager('IT', 'Aditya');

        console.log(manager.name);
        console.log(manager.department);
    });
});