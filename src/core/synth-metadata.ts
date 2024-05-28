export interface SynthProjectReference {
  readonly name: string;
  readonly composeHash: string;
}

export interface SynthProjectResult extends SynthProjectReference {
  readonly compose: object;
}

export interface SynthMetadata {
  readonly projects: Array<SynthProjectResult>;
}

export interface SynthToDirMetadata {
  readonly projects: Array<SynthProjectReference>;
}
