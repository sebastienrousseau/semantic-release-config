# Migration Guide for `@sebastienrousseau/semantic-release-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/semantic-release-config`.

## Upgrading from Previous Versions

1. Update package version:
   ```bash
   npm install --save-dev @sebastienrousseau/semantic-release-config@latest
   ```
2. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/semantic-release-config` in your `package.json` or config entrypoint.
