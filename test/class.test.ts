describe('Class', () => {
    class Customer {
        constructor() {
            console.log('Hello Customer!');
        }
    }

    class Order {
        constructor() {
            console.log('Hello Order!');
        }
    }

    it('Should can create class', () => {
        let customer: Customer = new Customer();
        let order: Order = new Order();

        console.log(customer);
        console.log(order);
    });

    it('Should can create constructor', () => {
        new Customer();
        new Order();
    });
});