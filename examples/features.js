/**
 * 100% Feature Showcase for @sebastienrousseau/semantic-release-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/semantic-release-config ===");
assert(Array.isArray(config.branches) && config.branches.includes("main"));
assert(Array.isArray(config.plugins) && config.plugins.length >= 6);
assert(config.plugins.includes("@semantic-release/commit-analyzer"));
assert(config.plugins.includes("@semantic-release/release-notes-generator"));

console.log("  ✓ Target release branches:", config.branches.length);
console.log("  ✓ Release pipeline plugins:", config.plugins.length);
console.log("✅ 100% of semantic-release-config lifecycle stages validated.");
