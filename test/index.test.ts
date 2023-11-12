import Future from '../src/index';

describe('Future', () => {
    describe('constructor', () => {
        it('should create a new Future instance', () => {
            const future = new Future();
            expect(future).toBeInstanceOf(Future);
        });
    });

    describe('id', () => {
        it('should have a id', () => {
            const future = new Future();
            expect(future.id).toBe(1);
        });
        it('should be increated when a new Future created', () => {
            const future = new Future();
            expect(future.id).toBe(2);
        });

    });
    describe('done', () => {
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
        it('should not be done twice', () => {
            future.done(42);
            expect(() => future.done(42)).toThrow(`Future ${future.id} is already complete and cannot be done twice`);
        });
        // TODO test that the future cannot be done if it is not a leaf future
    });
    // create a fail test like done test
    describe('fail', () => {
        let future: Future<number>;

        beforeEach(() => {
            future = new Future<number>();
        });

        it('should mark the future as ready when fail is called', () => {
            future.fail(new Error());
            expect(future.is_ready).toBe(true); // assuming you have an isReady method
        });

        it('should store the error when fail is called', () => {
            const error = new Error();
            future.fail(error);
            expect(future.failure).toBe(error); // assuming you have a getResult method
        });
        it('should not be fail twice', () => {
            future.fail(new Error());
            expect(() => future.fail(new Error())).toThrow(`Future ${future.id} is already complete and cannot be .fail `);
        });
        // TODO test that the future cannot be fail if it is not a leaf future
    });
});
