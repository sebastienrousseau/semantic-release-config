/**
 * Advanced semantic-release custom branch configuration
 */
const base = require("../index.cjs");
const custom = { ...base, branches: [...base.branches, "next"] };
console.log("Extended release branches:", custom.branches.length);
