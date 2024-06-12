describe('Class', () => {
    class Customer {
        readonly id: number;
        name: string;
        age: number = 23;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('Should can add properties', () => {
        const customer: Customer = new Customer(1, 'Aditya');

        console.log(customer);
    });

    it('Should can add method', () => {
        const customer: Customer = new Customer(1, 'Aditya');

        customer.sayHello('Erni Safitri');
    });
});