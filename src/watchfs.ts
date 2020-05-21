for await (const event of Deno.watchFs(Deno.cwd())) {
  console.log('>>>> event', event);
}
