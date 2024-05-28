import type { IVolume } from '../volume';

export interface VolumeMapping {
  readonly source: string | IVolume;
  readonly target: string;
  readonly readonly?: boolean;
}
