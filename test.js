const native = require(".");

if (native.sum(1, 2) !== 3) {
  throw new Error("test-new-cli.node failed");
}
