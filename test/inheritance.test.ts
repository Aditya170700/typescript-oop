describe('inheritance', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it('should support inheritance', () => {
        const employee: Employee = new Employee('Aditya');
        console.log(employee);

        const manager: Manager = new Manager('Ricki');
        console.log(manager);

        const director: Director = new Director('Julianto');
        console.log(director);
    });
});