import { hello, assertEquals } from '../package.ts';

Deno.test('function hello called', () => {
  assertEquals(hello('world'), 'hello world');
});
