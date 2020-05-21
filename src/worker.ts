self.onmessage = async (e) => {
  const { filename } = e.data;

  const domains = await Deno.readTextFile(filename);
  const resp = await fetch(domains);

  await Deno.writeFile(
    "../outputs/baidu.html",
    new Uint8Array(await resp.arrayBuffer()),
  );

  self.close();
};
