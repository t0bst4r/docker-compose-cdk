import { Construct, IConstruct } from 'constructs';
import { IResource, Project } from '../../core';
import { Config, IConfig } from '../config';
import { INetwork, Network } from '../network';
import { IVolume, Volume } from '../volume';

function ensure<T extends IResource>(targetScope: IConstruct, resource: T, defaultCreator: (scope: Construct) => T): T {
  const targetProject = Project.of(targetScope);
  const resourceProject = Project.of(resource);
  if (targetProject === resourceProject) {
    return resource;
  } else {
    targetProject.node.addDependency(resource);
    return (targetProject.node.tryFindChild(resource.name) as T | undefined)
      ?? defaultCreator(targetProject);
  }
}

export const ensureInProject = {
  config: (targetScope: IConstruct, resource: IConfig): IConfig => {
    return ensure<IConfig>(targetScope, resource,
      scope => Config.fromExternal(scope, resource.name, resource.fullQualifiedName));
  },
  network: (targetScope: IConstruct, resource: INetwork): INetwork => {
    return ensure<INetwork>(targetScope, resource,
      scope => Network.fromExternal(scope, resource.name, resource.fullQualifiedName));
  },
  volume: (targetScope: IConstruct, resource: IVolume): IVolume => {
    return ensure<IVolume>(targetScope, resource,
      scope => Volume.fromExternal(scope, resource.name, resource.fullQualifiedName));
  },
};
