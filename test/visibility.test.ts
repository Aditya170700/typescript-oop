describe('visibility', () => {
    class Counter {
        private counter:number = 0;

        public increment():void {
            this.counter++;
        }

        public decrement():void {
            this.counter--;
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    it('Should support private', () => {
        const counter: Counter = new Counter();
        counter.increment();
        console.info(counter);
        counter.decrement();
        console.info(counter);
    });
});