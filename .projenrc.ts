import { cdk } from 'projen';


const packageName = 'docker-compose-cdk';
const project = new cdk.JsiiProject({
  projenrcTs: true,

  defaultReleaseBranch: 'main',

  author: 't0bst4r',
  authorAddress: '82281152+t0bst4r@users.noreply.github.com',
  name: packageName,
  description: 'Constructs to generate docker-compose files.',
  repositoryUrl: 'https://github.com/t0bst4r/docker-compose-cdk.git',

  projenDevDependency: false,
  jsiiVersion: '~5.4.0',
  deps: ['constructs@^10.0.0'],
  devDeps: ['projen'],
  npmProvenance: false,

  gitignore: ['.idea/'],
  keywords: ['cdk', 'docker', 'docker-compose', 'docker compose', 'compose', 'cloud', 'cloud development kit'],
});

project.synth();
