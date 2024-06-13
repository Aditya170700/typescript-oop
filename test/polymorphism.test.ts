describe('polymorphism', () => {
    class Employee {
        constructor(public name: string) {}
    }

    class Manager extends Employee {

    }

    class VicePrecident extends Manager {

    }

    it('should support inheritance', () => {
        let employee: Employee = new Employee('Aditya');
        console.log(employee);

        employee = new Manager('Aditya');
        console.log(employee);

        employee = new VicePrecident('Aditya');
        console.log(employee);
    });
});