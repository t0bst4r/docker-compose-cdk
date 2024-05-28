import { Construct, IConstruct } from 'constructs';
import { type INamingStrategy, NamingStrategyContextKey } from '../naming';

export interface IResource extends IConstruct {
  readonly resourceType: string;
  readonly name: string;
  readonly fullQualifiedName: string;

  render(): object;
}

export interface ResourceOptions {
  readonly name?: string;
  readonly fullQualifiedName?: string;
}

export interface ResourceProps extends ResourceOptions {
  readonly resourceType: string;
}

export abstract class Resource extends Construct implements IResource {

  readonly resourceType: string;
  readonly name: string;
  readonly fullQualifiedName: string;

  protected constructor(scope: Construct, id: string, props: ResourceProps) {
    super(scope, id);

    const namingStrategy = scope.node.tryGetContext(NamingStrategyContextKey) as INamingStrategy;
    const names = namingStrategy.generateNames(this);

    this.name = props.name ?? names.local;
    this.fullQualifiedName = props.fullQualifiedName ?? names.fullQualified;
    this.resourceType = props.resourceType;
  }

  abstract render(): object;
}
