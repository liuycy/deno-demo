import { BufReader } from '../deps.ts';

const listener = await Deno.listen({ port: 9001 });
console.log(`listen at localhost:9001`);

const decoder = new TextDecoder();

function logTcpInput(conn: Deno.Conn) {
  let start = new Date();
  console.log(`${start.toLocaleString()}: somebody connected`);

  const timer = setInterval(async () => {
    const now = new Date();

    if (now.getTime() - start.getTime() > 5000) {
      clearInterval(timer);
      console.log('timeout, get nothing, exit!');
      conn.close();
      Deno.exit();
    }

    const reader = new BufReader(conn);
    const result = await reader.readLine();

    if (result) {
      const message = decoder.decode(result.line);
      const timestamp = now.toLocaleString();
      console.log(`${timestamp}: ${message}`);
      start = now;
    }
  }, 50 / 3);
}

for await (const conn of listener) {
  logTcpInput(conn);
  await Deno.copy(conn, conn);
}
