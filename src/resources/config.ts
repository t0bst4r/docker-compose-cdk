import { Construct } from 'constructs';
import { IResource, Resource, ResourceOptions } from '../core';

export interface IConfig extends IResource {
}

export abstract class ConfigBase extends Resource implements IConfig {
  protected constructor(scope: Construct, id: string, props?: ResourceOptions) {
    super(scope, id, {
      ...props,
      resourceType: 'configs',
    });
  }
}

export interface ConfigProps {
  readonly content: string;
}

export class Config extends ConfigBase {

  public static fromExternal(scope: Construct, id: string, fullQualifiedName: string): IConfig {
    return new (class extends ConfigBase implements IConfig {
      override render(): object {
        return { external: true, name: this.fullQualifiedName };
      }
    })(scope, id, { fullQualifiedName });
  }

  private readonly content: string;

  constructor(scope: Construct, id: string, props: ConfigProps) {
    super(scope, id);
    this.content = props.content;
  }

  override render(): object {
    return {
      content: this.content,
    };
  }
}
