import Future from '../src/index';

describe('Future', () => {
    describe('constructor', () => {
        it('should create a new Future instance', () => {
            const future = new Future();
            expect(future).toBeInstanceOf(Future);
        });
    });


        let future: Future<number>;

        beforeEach(() => {
            future = new Future<number>();
        });

        it('should mark the future as ready when done is called', () => {
            future.done(42);
            expect(future.is_ready).toBe(true); // assuming you have an isReady method
        });

        it('should store the result when done is called', () => {
            future.done(42);
            expect(future.get()).toBe(42); // assuming you have a getResult method
        });

});
