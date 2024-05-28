import { IConstruct } from 'constructs';
import { Names, INamingStrategy } from './naming-strategy';
import { Project } from '../core';

export class DefaultNamingStrategy implements INamingStrategy {

  generateNames(construct: IConstruct): Names {
    const project = Project.of(construct);
    const projectFqn = this.generateFullQualifiedName(project);
    const thisFqn = this.generateFullQualifiedName(construct);
    if (!thisFqn.startsWith(projectFqn)) {
      throw new Error("Construct FQN does not start with project's FQN");
    }
    return {
      local: thisFqn.substring(projectFqn.length + 1),
      fullQualified: thisFqn,
    };
  }

  private generateFullQualifiedName(construct: IConstruct): string {
    return construct.node.scopes
      .map(it => it.node.id)
      .filter(it => it !== '')
      .filter(it => it !== 'Default')
      .join('_')
      .toLowerCase();
  }

}
