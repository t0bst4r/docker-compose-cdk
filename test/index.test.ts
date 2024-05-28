import { Construct } from 'constructs';
import { App, DockerImage, Network, PortMapping, Project, RestartPolicy, Service, Volume } from '../src';

test('Multiple Compose Projects', () => {
  const app = new App();

  const firstProject = new Project(app, 'First');
  new Nginx(firstProject, 'Nginx');

  const secondProject = new Project(app, 'Second');
  new Wordpress(secondProject, 'Wordpress');

  expect(app.synth()).toMatchSnapshot();
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
