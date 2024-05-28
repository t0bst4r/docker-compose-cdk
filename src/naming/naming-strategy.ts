import { IConstruct } from 'constructs';

export const NamingStrategyContextKey = 'NAMING_STRATEGY';

export interface Names {
  readonly local: string;
  readonly fullQualified: string;
}

export interface INamingStrategy {
  generateNames(construct: IConstruct): Names;
}
