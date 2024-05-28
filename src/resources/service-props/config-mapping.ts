import { IConfig } from '../config';

export interface ConfigMapping {
  readonly source: IConfig;
  readonly target: string;
  readonly uid?: string;
  readonly gid?: string;
  readonly mode?: string;
}
