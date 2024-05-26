import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 't0bst4r',
  authorAddress: '82281152+t0bst4r@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'docker-compose-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/82281152+t0bst4r/docker-compose-cdk.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();