export interface SynthProjectReference {
  readonly name: string;
  readonly composeHash: string;
  readonly compose: object;
}
export interface SynthMetadata {
  readonly projects: Array<SynthProjectReference>;
}
