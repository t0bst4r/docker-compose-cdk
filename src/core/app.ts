import { createHash } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { IConstruct } from 'constructs';
import { Project } from './project';
import { Stage } from './stage';
import { SynthMetadata, SynthProjectResult, SynthToDirMetadata } from './synth-metadata';
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
      .map<SynthProjectResult>(project => {
      const compose = project.render();
      const composeHash = createHash('sha256')
        .update(JSON.stringify(compose))
        .digest('hex')
        .substring(0, 16);

      return { name: project.name, compose, composeHash };
    });
    return { projects };
  }

  synthToDir(outdir: string): SynthToDirMetadata {
    const synthResult = this.synth();
    synthResult.projects.forEach(project => {
      const projectDir = path.join(outdir, `${project.name}.${project.composeHash}`);
      fs.mkdirSync(projectDir, { recursive: true });
      fs.writeFileSync(path.join(projectDir, 'docker-compose.json'), JSON.stringify(project.compose, undefined, 2), { encoding: 'utf-8' });
    });
    return {
      projects: synthResult.projects.map(project => ({
        name: project.name,
        composeHash: project.composeHash,
      })),
    };
  }
}

function isProject(construct: IConstruct): construct is Project {
  return construct instanceof Project;
}
