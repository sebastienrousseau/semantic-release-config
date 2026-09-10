// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced semantic-release custom branch configuration
 */
const base = require("../index.cjs");
const custom = { ...base, branches: [...base.branches, "next"] };
console.log("Extended release branches:", custom.branches.length);
