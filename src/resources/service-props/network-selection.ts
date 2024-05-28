import type { INetwork } from '../network';

export interface NetworkSelection {
  readonly network: INetwork;
  readonly ipV4Address?: `${number}.${number}.${number}.${number}`;
}
