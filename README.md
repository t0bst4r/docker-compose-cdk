# docker-compose-cdk

Generate Docker-Compose files from Constructs on any platform.

# Installation

### NPM

```bash
npm install -S docker-compose-cdk
```

### pip

```bash
pip install docker-compose-cdk
```

# Usage

### Class: App

The main class in the construct tree is `App`.
It is used to collect all the docker-compose projects and orchestrates the synth-step.

```typescript
import {App} from 'docker-compose-cdk';

const app = new App();
```

### Class: Project

The `Project` class represents a single docker-compose file which should be the parent for your volumes, networks, and
services, etc.

```typescript
import {Project} from 'docker-compose-cdk';

// App Declaration...

const webserver = new Project(app, 'Webserver');
```

### Class: Volume

Create a new volume or import an existing one.

```typescript
import {Volume} from 'docker-compose-cdk';

// App & Project Declaration...

const myData = new Volume(project, 'MyData');
const importedData = Volume.fromExternal(project, 'SecondData', 'ExactNameOfTheVolume');
```

If an external volume is used within a `Service`, the service will automatically ensure, that the external volume is
imported into the `Project`.

### Class: Network

Create a new network or import an existing one.

```typescript
import {Network} from 'docker-compose-cdk';

// App & Project Declaration...

const myNetwork = new Network(project, 'MyNetwork');
const importedNetwork = Network.fromExternal(project, 'SecondNetwork', 'ExactNameOfTheNetwork');
```

If an external network is used within a `Service`, the service will automatically ensure, that the external network is
imported into the `Project`.

### Class: Config

Create a new config or import an existing one.

```typescript
import {Config} from 'docker-compose-cdk';

// App & Project Declaration...

const myConfig = new Config(project, 'MyConfig', {
  content: fs.readFileSync(path.join(__dirname, 'my-config.yml'))
});
const importedNetwork = Network.fromExternal(project, 'SecondNetwork', 'ExactNameOfTheNetwork');
```

If an external network is used within a `Service`, the service will automatically ensure, that the external network is
imported into the `Project`.

### Class: Service

Create a new Service.

```typescript
import {Network, DockerImage, RestartPolicy, PortMapping} from 'docker-compose-cdk';

// App & Project Declaration...

new Service(this, 'Default', {
  image: DockerImage.hub('nginx', 'alpine'),
  restart: RestartPolicy.UNLESS_STOPPED,
  volumes: [
    {source: volume, target: '/usr/share/nginx/html'},
  ],
  ports: [
    PortMapping.http(),
    PortMapping.https(),
  ],
  networks: [{network}],
});
```

The service class ensures that external networks, volumes, and configs used by this service are added to the project
using `external: true`.
