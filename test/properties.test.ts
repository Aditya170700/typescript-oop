describe('Class', () => {
    class Customer {
        readonly id: number;
        name: string;
        age: number = 23;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    it('Should can add properties', () => {
        const customer: Customer = new Customer(1, 'Aditya');

        console.log(customer);
    });
});