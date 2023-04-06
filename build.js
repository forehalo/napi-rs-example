const { NapiCli } = require("@napi-rs/cli");

new NapiCli().build({
  platform: true,
  release: true,
  strip: true,
});
