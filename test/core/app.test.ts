import * as fs from 'fs';
import { tmpdir } from 'os';
import * as path from 'path';
import { Construct } from 'constructs';
import { App, DockerImage, Network, PortMapping, Project, RestartPolicy, Service, Volume } from '../../src';

describe('App', () => {


  it('should be able to synthesize two simple stacks in memory', () => {
    const app = new App();

    const firstProject = new Project(app, 'First');
    new Nginx(firstProject, 'Nginx');

    const secondProject = new Project(app, 'Second');
    new Wordpress(secondProject, 'Wordpress');
    expect(app.synth()).toMatchSnapshot();
  });

  it('should be able to synthesize two simple stacks to the filesystem', () => {
    const app = new App();

    const firstProject = new Project(app, 'First');
    new Nginx(firstProject, 'Nginx');

    const secondProject = new Project(app, 'Second');
    new Wordpress(secondProject, 'Wordpress');

    const outdir = fs.mkdtempSync(path.join(tmpdir(), 'docker-compose-cdk-test-app-synth-'));
    const projects = app.synthToDir(outdir);
    expect(projects).toEqual({
      projects: [
        {
          composeHash: 'fecfd64745042024',
          name: 'first',
        },
        {
          composeHash: 'a9266a4abc31b34c',
          name: 'second',
        },
      ],
    });

    const fileList = fs.readdirSync(outdir, { withFileTypes: true, recursive: true })
      .filter(file => file.isFile())
      .map(file => `${file.parentPath}/${file.name}`);

    expect(fileList.map(filePath => path.relative(outdir, filePath))).toEqual([
      'first.fecfd64745042024/docker-compose.json',
      'second.a9266a4abc31b34c/docker-compose.json',
    ]);

    const fileContents = fileList.map(filePath => fs.readFileSync(filePath, { encoding: 'utf-8' }));
    expect(fileContents).toMatchSnapshot();

    fs.rmSync(outdir, { recursive: true, force: true });
  });
});


class Nginx extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const network = new Network(this, 'Network');
    const volume = new Volume(this, 'HtmlData');
    new Service(this, 'Default', {
      image: DockerImage.hub('nginx', 'alpine'),
      restart: RestartPolicy.UNLESS_STOPPED,
      volumes: [
        { source: volume, target: '/usr/share/nginx/html' },
      ],
      ports: [
        PortMapping.http(),
        PortMapping.https(),
      ],
      networks: [{ network }],
    });
  }
}

class Wordpress extends Construct {

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const databaseName = 'exampledb';
    const databaseUser = 'exampleuser';
    const databasePassword = 'examplepass';

    const network = new Network(this, 'Network');

    const dbData = new Volume(this, 'DatabaseData');
    const db = new Service(this, 'DatabaseService', {
      image: DockerImage.hub('mysql', '8.0'),
      restart: RestartPolicy.UNLESS_STOPPED,
      environment: {
        MYSQL_DATABASE: databaseName,
        MYSQL_USER: databaseUser,
        MYSQL_PASSWORD: databasePassword,
        MYSQL_RANDOM_ROOT_PASSWORD: '1',
      },
      volumes: [
        { source: dbData, target: '/var/lib/mysql' },
      ],
      networks: [{ network }],
    });

    const wordpressData = new Volume(this, 'WordpressData');
    new Service(this, 'Default', {
      image: DockerImage.hub('wordpress'),
      restart: RestartPolicy.UNLESS_STOPPED,
      environment: {
        WORDPRESS_DB_HOST: db.dnsNames[0],
        WORDPRESS_DB_NAME: databaseName,
        WORDPRESS_DB_USER: databaseUser,
        WORDPRESS_DB_PASSWORD: databasePassword,
      },
      volumes: [
        { source: wordpressData, target: '/var/www/html' },
      ],
      networks: [{ network }],
    });
  }

}
