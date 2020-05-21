import { assertEquals } from '../deps.ts';

const process = Deno.run({
  cmd: ['echo', 'hello deno'],
  stdout: 'piped',
});

const decoder = new TextDecoder();

const { success } = await process.status();
if (success) {
  const result = await process.output();
  assertEquals(decoder.decode(result), 'hello deno\n');
}
