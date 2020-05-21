function fib(n: number): number {
  if (n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}

const sig = Deno.signal(Deno.Signal.SIGINT);

setTimeout(() => {
  sig.dispose();
  console.assert(fib(10) === 55);
  console.assert(fib(5) === 55, 'fib(5) is equal to', fib(5));
  console.table([
    { a: 1, b: 2 },
    { a: 3, c: 4 },
  ]);
  console.error(new Error('this is an error !'));
}, 2000);

// 要放在最后
for await (const _ of sig) {
  console.clear();
  console.log('程序中断!');
  Deno.exit();
}

console.log('这行不会执行');
