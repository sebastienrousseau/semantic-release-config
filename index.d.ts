export interface SemanticReleaseConfig {
  branches?: (string | Record<string, unknown>)[];
  plugins?: (string | unknown[])[];
}

declare const config: SemanticReleaseConfig;
export default config;
