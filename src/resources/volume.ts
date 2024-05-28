import { Construct } from 'constructs';
import { IResource, Resource, ResourceOptions } from '../core';

export interface IVolume extends IResource {
}

export abstract class VolumeBase extends Resource implements IVolume {
  protected constructor(scope: Construct, id: string, props?: ResourceOptions) {
    super(scope, id, {
      ...props,
      resourceType: 'volumes',
    });
  }
}

export class Volume extends VolumeBase {

  public static fromExternal(scope: Construct, id: string, fullQualifiedName: string): IVolume {
    return new (class extends VolumeBase implements IVolume {
      override render(): object {
        return { external: true, name: this.fullQualifiedName };
      }
    })(scope, id, { fullQualifiedName });
  }

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  render(): object {
    return {};
  }

}
