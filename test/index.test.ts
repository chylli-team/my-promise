// test/index.test.ts
import { helloWorld } from '../src/index';

test('helloWorld function returns correct string', () => {
    expect(helloWorld()).toBe('Hello, world!');});