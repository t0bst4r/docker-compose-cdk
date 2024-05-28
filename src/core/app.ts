import { createHash } from 'crypto';
import { IConstruct } from 'constructs';
import { Project } from './project';
import { Stage } from './stage';
import { SynthMetadata, SynthProjectReference } from './synth-metadata';
import { DefaultNamingStrategy, INamingStrategy, NamingStrategyContextKey } from '../naming';

export interface AppProps {
  readonly namingStrategy?: INamingStrategy;
}

export class App extends Stage {

  private readonly namingStrategy: INamingStrategy;

  constructor(props?: AppProps) {
    super(undefined as any, '');
    this.namingStrategy = props?.namingStrategy ?? new DefaultNamingStrategy();
    this.node.setContext(NamingStrategyContextKey, this.namingStrategy);
  }

  synth(): SynthMetadata {
    const projects = this.node
      .findAll()
      .filter(isProject)
      .map<SynthProjectReference>(project => {
      const compose = project.render();
      const composeHash = createHash('sha256')
        .update(JSON.stringify(compose))
        .digest('hex')
        .substring(0, 16);

      return { name: project.name, compose, composeHash };
    });
    return { projects };
  }
}

function isProject(construct: IConstruct): construct is Project {
  return construct instanceof Project;
}
