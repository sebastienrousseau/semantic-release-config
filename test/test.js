const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/semantic-release-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert(Array.isArray(cjsConfig.branches), "Branches must be an array");

  console.log("✅ semantic-release-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
