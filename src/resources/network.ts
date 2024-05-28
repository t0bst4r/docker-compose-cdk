import { Construct, IConstruct } from 'constructs';
import { IResource, Resource, ResourceOptions } from '../core';

export interface INetwork extends IResource {
}

export abstract class NetworkBase extends Resource implements INetwork {
  protected constructor(scope: Construct, id: string, props?: ResourceOptions) {
    super(scope, id, {
      ...props,
      resourceType: 'networks',
    });
  }
}

export enum NetworkDriver {
  BRIDGE = 'bridge',
  MACVLAN = 'macvlan',
}

export interface NetworkDriverOptions {
  readonly parent?: string;
}


export interface NetworkIpamConfig {
  readonly subnet?: string;
  readonly ipRange?: string;
  readonly gateway?: string;
}

export interface NetworkIpam {
  readonly config?: NetworkIpamConfig[];
}

export interface NetworkProps {
  readonly driver?: NetworkDriver;
  readonly driverOptions?: NetworkDriverOptions;
  readonly ipam?: NetworkIpam;
}

export class Network extends NetworkBase {

  public static fromExternal(scope: IConstruct, id: string, fullQualifiedName: string): INetwork {
    return new (class extends NetworkBase implements INetwork {
      override render(): object {
        return { external: true, name: this.fullQualifiedName };
      }
    })(scope, id, { fullQualifiedName });
  }

  private readonly ipam: NetworkIpam | undefined;
  private readonly driver: NetworkDriver;
  private readonly driverOptions: NetworkDriverOptions | undefined;

  constructor(scope: Construct, id: string, props?: NetworkProps) {
    super(scope, id);

    this.ipam = props?.ipam;
    this.driver = props?.driver ?? NetworkDriver.BRIDGE;
    this.driverOptions = props?.driverOptions;
  }

  render(): object {
    const ipam = this.ipam ? {
      config: this.ipam.config?.map(config => ({
        subnet: config.subnet,
        ip_range: config.ipRange,
        gateway: config.gateway,
      })),
    }: undefined;

    return {
      driver: this.driver,
      driver_opts: this.driverOptions,
      ipam,
    };
  }

}
