import { Construct, IConstruct } from 'constructs';
import type { IResource } from './resource';
import { type INamingStrategy, NamingStrategyContextKey } from '../naming';

export interface IProject {
}

export class Project extends Construct implements IProject {

  public static of(construct: IConstruct): Project {
    const project = [...construct.node.scopes].reverse().find(isProject);
    if (!project) {
      throw new Error(`No project found for node at ${construct.node.path}`);
    }
    return project;
  }

  private static namePattern = /^[a-z0-9][a-z0-9-_]*$/;

  public readonly name: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const namingStrategy = scope.node.tryGetContext(NamingStrategyContextKey) as INamingStrategy;
    const names = namingStrategy.generateNames(this);

    this.name = names.fullQualified.toLowerCase();
    if (!Project.namePattern.test(this.name)) {
      throw new Error(`Project name ${this.name} does not match the pattern ${Project.namePattern.toString()}.`);
    }
  }

  render(): object {
    const constructs = this.node.findAll()
      .filter(isResource);
    const byResourceType = constructs.reduce((groups, resource) => {
      groups[resource.resourceType] = groups[resource.resourceType] ?? [];
      groups[resource.resourceType]!.push(resource);
      return groups;
    }, {} as Partial<Record<string, IResource[]>>);

    return {
      ...Object.fromEntries(Object.entries(byResourceType)
        .map<[string, Record<string, object>]>(([key, resources]) => [key,
        Object.fromEntries(resources!.map(resource => [resource.name, resource.render()]))]),
      ),
      name: this.name,
    };
  }
}

function isResource(c: IConstruct): c is IResource {
  return 'resourceType' in c;
}

function isProject(c: IConstruct): c is Project {
  return c instanceof Project;
}
