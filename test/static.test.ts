describe('static', () => {
    class Config {
        static NAME: string = 'Mac';
        static VERSION: string = '1.0.0';
        static AUTHOR: string = 'admin';
    }

    it('should support static', () => {
        console.info(Config.NAME);
        console.info(Config.VERSION);
        console.info(Config.AUTHOR);
    });
})