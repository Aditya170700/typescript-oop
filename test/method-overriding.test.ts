describe('MethodOverriding', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        department: string;

        constructor(department: string, name: string) {
            super(name);
            this.department = department;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}, im your manager`);
        }
    }

    it('Should support method overriding', () => {
        const manager: Manager = new Manager('IT', 'Aditya');

        manager.sayHello('Erni Safitri');
    });
});