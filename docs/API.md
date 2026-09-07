# `@sebastienrousseau/semantic-release-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/semantic-release-config`.

---

## Description
Shareable semantic-release presets automating versioning, changelog generation, and npm publishing.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/semantic-release-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Branch Workflow
- **Description**: Supports release branches (main, master) and prerelease channels (beta, alpha)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Automated Commit Analysis
- **Description**: Analyzes conventional commits for SemVer calculation
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Changelog Generation
- **Description**: Auto-generates and commits updated CHANGELOG.md
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Multi-Platform Publishing
- **Description**: Coordinates simultaneous npm registry and GitHub release creation
- **Scope**: Production & Development
- **Status**: Stable & Active

