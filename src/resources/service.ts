import { Construct } from 'constructs';
import type {
  ConfigMapping,
  DeviceMapping,
  IDockerImage,
  IPortMapping,
  NetworkSelection,
  RestartPolicy,
  VolumeMapping,
} from './service-props';
import { ensureInProject } from './utils/ensure-in-project';
import { type IResource, Resource, ResourceOptions } from '../core';

export interface IService extends IResource {
}

export abstract class ServiceBase extends Resource implements IService {

  abstract readonly dnsNames: string[];

  protected constructor(scope: Construct, id: string, props?: ResourceOptions) {
    super(scope, id, {
      ...props,
      resourceType: 'services',
    });
  }
}

export interface ServiceProps {
  readonly disabled?: boolean;
  readonly image: IDockerImage;
  readonly user?: string | number;
  readonly privileged?: boolean;
  readonly restart?: RestartPolicy;
  readonly replicas?: number;
  readonly environment?: Record<string, string>;
  readonly ports?: Array<IPortMapping>;
  readonly volumes?: Array<VolumeMapping>;
  readonly configs?: Array<ConfigMapping>;
  readonly networks?: Array<NetworkSelection>;
  readonly devices?: Array<DeviceMapping>;
  readonly command?: string;
}

export class Service extends ServiceBase {
  readonly dnsNames: string[];

  readonly disabled: boolean;
  readonly image: IDockerImage;
  readonly privileged?: boolean;
  readonly restart: RestartPolicy | undefined;
  readonly replicas: number;
  readonly environment: Record<string, string> | undefined;
  readonly ports: Array<IPortMapping> | undefined;
  readonly configs: Array<ConfigMapping> | undefined;
  readonly volumes: Array<VolumeMapping> | undefined;
  readonly networks: Array<NetworkSelection> | undefined;
  readonly devices: Array<DeviceMapping> | undefined;
  readonly command: string | undefined;
  readonly user: string | number | undefined;

  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id);

    this.disabled = props.disabled ?? false;
    this.image = props.image;
    this.restart = props.restart;
    this.replicas = props.replicas ?? 1;
    this.dnsNames = new Array(this.replicas).fill(0)
      .map((_, idx) => `${this.fullQualifiedName.replace(/_/g, '-')}-${idx + 1}`);
    this.environment = props.environment;
    this.ports = props.ports;
    this.configs = props.configs?.map(mapping => ({
      ...mapping,
      source: ensureInProject.config(this, mapping.source),
    }));
    this.volumes = props.volumes?.map(mapping => ({
      ...mapping,
      source: typeof mapping.source === 'string'
        ? mapping.source
        : ensureInProject.volume(this, mapping.source),
    }));
    this.networks = props.networks?.map(mapping => ({
      ...mapping,
      network: ensureInProject.network(this, mapping.network),
    }));
    this.devices = props.devices;
    this.command = props.command;
    this.user = props.user;
  }

  render(): object {
    return {
      profiles: this.disabled ? ['disabled'] : undefined,
      image: [this.image.image, this.image.tag ?? 'latest'].join(':'),
      user: this.user,
      command: this.command,
      privileged: this.privileged ?? false,
      restart: this.restart,
      deploy: {
        mode: 'replicated',
        replicas: this.replicas,
      },
      environment: this.environment,
      configs: this.configs?.map(mapping => ({
        source: mapping.source.name,
        target: mapping.target,
        uid: mapping.uid,
        gid: mapping.gid,
        mode: mapping.mode,
      })),
      ports: this.ports?.map(mapping => [mapping.host, mapping.container].join(':')),
      volumes: this.volumes?.map(mapping => {
        if (typeof mapping.source === 'object') {
          return {
            type: 'volume',
            source: mapping.source.name,
            target: mapping.target,
            read_only: mapping.readonly,
          };
        } else {
          return {
            type: 'bind',
            source: mapping.source,
            target: mapping.target,
            read_only: mapping.readonly,
          };
        }
      }),
      networks: this.networks?.reduce((map, mapping) => {
        return Object.assign(map, {
          [mapping.network.name]: {
            ipv4_address: mapping.ipV4Address,
          },
        });
      }, {}),
      devices: this.devices?.map(mapping => {
        return [mapping.source, mapping.target].join(':');
      }),
    };
  }
}

