# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### App <a name="App" id="docker-compose-cdk.App"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.App.Initializer"></a>

```typescript
import { App } from 'docker-compose-cdk'

new App(props?: AppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.App.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.AppProps">AppProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="docker-compose-cdk.App.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.AppProps">AppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.App.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.App.synth">synth</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.App.synthToDir">synthToDir</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.App.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="docker-compose-cdk.App.synth"></a>

```typescript
public synth(): SynthMetadata
```

##### `synthToDir` <a name="synthToDir" id="docker-compose-cdk.App.synthToDir"></a>

```typescript
public synthToDir(outdir: string): SynthToDirMetadata
```

###### `outdir`<sup>Required</sup> <a name="outdir" id="docker-compose-cdk.App.synthToDir.parameter.outdir"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.App.isConstruct"></a>

```typescript
import { App } from 'docker-compose-cdk'

App.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.App.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.App.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Config <a name="Config" id="docker-compose-cdk.Config"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.Config.Initializer"></a>

```typescript
import { Config } from 'docker-compose-cdk'

new Config(scope: Construct, id: string, props: ConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Config.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Config.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Config.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.ConfigProps">ConfigProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Config.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Config.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="docker-compose-cdk.Config.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.ConfigProps">ConfigProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Config.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.Config.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.Config.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.Config.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Config.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#docker-compose-cdk.Config.fromExternal">fromExternal</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.Config.isConstruct"></a>

```typescript
import { Config } from 'docker-compose-cdk'

Config.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.Config.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromExternal` <a name="fromExternal" id="docker-compose-cdk.Config.fromExternal"></a>

```typescript
import { Config } from 'docker-compose-cdk'

Config.fromExternal(scope: Construct, id: string, fullQualifiedName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Config.fromExternal.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Config.fromExternal.parameter.id"></a>

- *Type:* string

---

###### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Config.fromExternal.parameter.fullQualifiedName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Config.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.Config.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Config.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Config.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.Config.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Config.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.Config.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### ConfigBase <a name="ConfigBase" id="docker-compose-cdk.ConfigBase"></a>

- *Implements:* <a href="#docker-compose-cdk.IConfig">IConfig</a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.ConfigBase.Initializer"></a>

```typescript
import { ConfigBase } from 'docker-compose-cdk'

new ConfigBase(scope: Construct, id: string, props?: ResourceOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ConfigBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigBase.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.ConfigBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.ConfigBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="docker-compose-cdk.ConfigBase.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.ConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.ConfigBase.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.ConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.ConfigBase.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.ConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.ConfigBase.isConstruct"></a>

```typescript
import { ConfigBase } from 'docker-compose-cdk'

ConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.ConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.ConfigBase.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigBase.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.ConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.ConfigBase.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.ConfigBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.ConfigBase.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### Network <a name="Network" id="docker-compose-cdk.Network"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.Network.Initializer"></a>

```typescript
import { Network } from 'docker-compose-cdk'

new Network(scope: Construct, id: string, props?: NetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Network.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Network.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Network.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.NetworkProps">NetworkProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Network.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Network.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="docker-compose-cdk.Network.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.NetworkProps">NetworkProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Network.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.Network.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.Network.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.Network.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Network.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#docker-compose-cdk.Network.fromExternal">fromExternal</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.Network.isConstruct"></a>

```typescript
import { Network } from 'docker-compose-cdk'

Network.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.Network.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromExternal` <a name="fromExternal" id="docker-compose-cdk.Network.fromExternal"></a>

```typescript
import { Network } from 'docker-compose-cdk'

Network.fromExternal(scope: IConstruct, id: string, fullQualifiedName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Network.fromExternal.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Network.fromExternal.parameter.id"></a>

- *Type:* string

---

###### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Network.fromExternal.parameter.fullQualifiedName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Network.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.Network.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Network.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Network.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.Network.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Network.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.Network.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.Network.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### NetworkBase <a name="NetworkBase" id="docker-compose-cdk.NetworkBase"></a>

- *Implements:* <a href="#docker-compose-cdk.INetwork">INetwork</a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.NetworkBase.Initializer"></a>

```typescript
import { NetworkBase } from 'docker-compose-cdk'

new NetworkBase(scope: Construct, id: string, props?: ResourceOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.NetworkBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkBase.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.NetworkBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.NetworkBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="docker-compose-cdk.NetworkBase.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.NetworkBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.NetworkBase.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.NetworkBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.NetworkBase.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.NetworkBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.NetworkBase.isConstruct"></a>

```typescript
import { NetworkBase } from 'docker-compose-cdk'

NetworkBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.NetworkBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.NetworkBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.NetworkBase.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkBase.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.NetworkBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.NetworkBase.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.NetworkBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.NetworkBase.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### Project <a name="Project" id="docker-compose-cdk.Project"></a>

- *Implements:* <a href="#docker-compose-cdk.IProject">IProject</a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.Project.Initializer"></a>

```typescript
import { Project } from 'docker-compose-cdk'

new Project(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Project.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.Project.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.Project.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#docker-compose-cdk.Project.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.Project.isConstruct"></a>

```typescript
import { Project } from 'docker-compose-cdk'

Project.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `of` <a name="of" id="docker-compose-cdk.Project.of"></a>

```typescript
import { Project } from 'docker-compose-cdk'

Project.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="docker-compose-cdk.Project.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.Project.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### Resource <a name="Resource" id="docker-compose-cdk.Resource"></a>

- *Implements:* <a href="#docker-compose-cdk.IResource">IResource</a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.Resource.Initializer"></a>

```typescript
import { Resource } from 'docker-compose-cdk'

new Resource(scope: Construct, id: string, props: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Resource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Resource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Resource.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.ResourceProps">ResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Resource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Resource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="docker-compose-cdk.Resource.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.ResourceProps">ResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Resource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.Resource.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.Resource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.Resource.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Resource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.Resource.isConstruct"></a>

```typescript
import { Resource } from 'docker-compose-cdk'

Resource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.Resource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Resource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.Resource.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Resource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Resource.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.Resource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Resource.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.Resource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.Resource.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### Service <a name="Service" id="docker-compose-cdk.Service"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.Service.Initializer"></a>

```typescript
import { Service } from 'docker-compose-cdk'

new Service(scope: Construct, id: string, props: ServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.ServiceProps">ServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Service.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="docker-compose-cdk.Service.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.ServiceProps">ServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.Service.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.Service.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.Service.isConstruct"></a>

```typescript
import { Service } from 'docker-compose-cdk'

Service.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.Service.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.disabled">disabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.image">image</a></code> | <code><a href="#docker-compose-cdk.IDockerImage">IDockerImage</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.configs">configs</a></code> | <code><a href="#docker-compose-cdk.ConfigMapping">ConfigMapping</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.devices">devices</a></code> | <code><a href="#docker-compose-cdk.DeviceMapping">DeviceMapping</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.networks">networks</a></code> | <code><a href="#docker-compose-cdk.NetworkSelection">NetworkSelection</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.ports">ports</a></code> | <code><a href="#docker-compose-cdk.IPortMapping">IPortMapping</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.privileged">privileged</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.restart">restart</a></code> | <code><a href="#docker-compose-cdk.RestartPolicy">RestartPolicy</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.user">user</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Service.property.volumes">volumes</a></code> | <code><a href="#docker-compose-cdk.VolumeMapping">VolumeMapping</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Service.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.Service.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="docker-compose-cdk.Service.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="docker-compose-cdk.Service.property.disabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* boolean

---

##### `image`<sup>Required</sup> <a name="image" id="docker-compose-cdk.Service.property.image"></a>

```typescript
public readonly image: IDockerImage;
```

- *Type:* <a href="#docker-compose-cdk.IDockerImage">IDockerImage</a>

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="docker-compose-cdk.Service.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `command`<sup>Optional</sup> <a name="command" id="docker-compose-cdk.Service.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `configs`<sup>Optional</sup> <a name="configs" id="docker-compose-cdk.Service.property.configs"></a>

```typescript
public readonly configs: ConfigMapping[];
```

- *Type:* <a href="#docker-compose-cdk.ConfigMapping">ConfigMapping</a>[]

---

##### `devices`<sup>Optional</sup> <a name="devices" id="docker-compose-cdk.Service.property.devices"></a>

```typescript
public readonly devices: DeviceMapping[];
```

- *Type:* <a href="#docker-compose-cdk.DeviceMapping">DeviceMapping</a>[]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="docker-compose-cdk.Service.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="docker-compose-cdk.Service.property.networks"></a>

```typescript
public readonly networks: NetworkSelection[];
```

- *Type:* <a href="#docker-compose-cdk.NetworkSelection">NetworkSelection</a>[]

---

##### `ports`<sup>Optional</sup> <a name="ports" id="docker-compose-cdk.Service.property.ports"></a>

```typescript
public readonly ports: IPortMapping[];
```

- *Type:* <a href="#docker-compose-cdk.IPortMapping">IPortMapping</a>[]

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="docker-compose-cdk.Service.property.privileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* boolean

---

##### `restart`<sup>Optional</sup> <a name="restart" id="docker-compose-cdk.Service.property.restart"></a>

```typescript
public readonly restart: RestartPolicy;
```

- *Type:* <a href="#docker-compose-cdk.RestartPolicy">RestartPolicy</a>

---

##### `user`<sup>Optional</sup> <a name="user" id="docker-compose-cdk.Service.property.user"></a>

```typescript
public readonly user: string | number;
```

- *Type:* string | number

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="docker-compose-cdk.Service.property.volumes"></a>

```typescript
public readonly volumes: VolumeMapping[];
```

- *Type:* <a href="#docker-compose-cdk.VolumeMapping">VolumeMapping</a>[]

---


### ServiceBase <a name="ServiceBase" id="docker-compose-cdk.ServiceBase"></a>

- *Implements:* <a href="#docker-compose-cdk.IService">IService</a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.ServiceBase.Initializer"></a>

```typescript
import { ServiceBase } from 'docker-compose-cdk'

new ServiceBase(scope: Construct, id: string, props?: ResourceOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ServiceBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceBase.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.ServiceBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.ServiceBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="docker-compose-cdk.ServiceBase.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.ServiceBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.ServiceBase.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.ServiceBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.ServiceBase.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.ServiceBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.ServiceBase.isConstruct"></a>

```typescript
import { ServiceBase } from 'docker-compose-cdk'

ServiceBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.ServiceBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ServiceBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.ServiceBase.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceBase.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceBase.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.ServiceBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.ServiceBase.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.ServiceBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.ServiceBase.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="docker-compose-cdk.ServiceBase.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

---


### Stage <a name="Stage" id="docker-compose-cdk.Stage"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.Stage.Initializer"></a>

```typescript
import { Stage } from 'docker-compose-cdk'

new Stage(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Stage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Stage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Stage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Stage.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Stage.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="docker-compose-cdk.Stage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Stage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.Stage.isConstruct"></a>

```typescript
import { Stage } from 'docker-compose-cdk'

Stage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.Stage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Stage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.Stage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Volume <a name="Volume" id="docker-compose-cdk.Volume"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.Volume.Initializer"></a>

```typescript
import { Volume } from 'docker-compose-cdk'

new Volume(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Volume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Volume.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Volume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Volume.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Volume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.Volume.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.Volume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.Volume.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.Volume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#docker-compose-cdk.Volume.fromExternal">fromExternal</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.Volume.isConstruct"></a>

```typescript
import { Volume } from 'docker-compose-cdk'

Volume.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.Volume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromExternal` <a name="fromExternal" id="docker-compose-cdk.Volume.fromExternal"></a>

```typescript
import { Volume } from 'docker-compose-cdk'

Volume.fromExternal(scope: Construct, id: string, fullQualifiedName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.Volume.fromExternal.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.Volume.fromExternal.parameter.id"></a>

- *Type:* string

---

###### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Volume.fromExternal.parameter.fullQualifiedName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Volume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.Volume.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Volume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Volume.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.Volume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.Volume.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.Volume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.Volume.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### VolumeBase <a name="VolumeBase" id="docker-compose-cdk.VolumeBase"></a>

- *Implements:* <a href="#docker-compose-cdk.IVolume">IVolume</a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.VolumeBase.Initializer"></a>

```typescript
import { VolumeBase } from 'docker-compose-cdk'

new VolumeBase(scope: Construct, id: string, props?: ResourceOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.VolumeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#docker-compose-cdk.VolumeBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.VolumeBase.Initializer.parameter.props">props</a></code> | <code><a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="docker-compose-cdk.VolumeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="docker-compose-cdk.VolumeBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="docker-compose-cdk.VolumeBase.Initializer.parameter.props"></a>

- *Type:* <a href="#docker-compose-cdk.ResourceOptions">ResourceOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.VolumeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#docker-compose-cdk.VolumeBase.render">render</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="docker-compose-cdk.VolumeBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `render` <a name="render" id="docker-compose-cdk.VolumeBase.render"></a>

```typescript
public render(): object
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.VolumeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="docker-compose-cdk.VolumeBase.isConstruct"></a>

```typescript
import { VolumeBase } from 'docker-compose-cdk'

VolumeBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="docker-compose-cdk.VolumeBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.VolumeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.VolumeBase.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.VolumeBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.VolumeBase.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.VolumeBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.VolumeBase.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.VolumeBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.VolumeBase.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### AppProps <a name="AppProps" id="docker-compose-cdk.AppProps"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.AppProps.Initializer"></a>

```typescript
import { AppProps } from 'docker-compose-cdk'

const appProps: AppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.AppProps.property.namingStrategy">namingStrategy</a></code> | <code><a href="#docker-compose-cdk.INamingStrategy">INamingStrategy</a></code> | *No description.* |

---

##### `namingStrategy`<sup>Optional</sup> <a name="namingStrategy" id="docker-compose-cdk.AppProps.property.namingStrategy"></a>

```typescript
public readonly namingStrategy: INamingStrategy;
```

- *Type:* <a href="#docker-compose-cdk.INamingStrategy">INamingStrategy</a>

---

### ConfigMapping <a name="ConfigMapping" id="docker-compose-cdk.ConfigMapping"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.ConfigMapping.Initializer"></a>

```typescript
import { ConfigMapping } from 'docker-compose-cdk'

const configMapping: ConfigMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ConfigMapping.property.source">source</a></code> | <code><a href="#docker-compose-cdk.IConfig">IConfig</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigMapping.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigMapping.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigMapping.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ConfigMapping.property.uid">uid</a></code> | <code>string</code> | *No description.* |

---

##### `source`<sup>Required</sup> <a name="source" id="docker-compose-cdk.ConfigMapping.property.source"></a>

```typescript
public readonly source: IConfig;
```

- *Type:* <a href="#docker-compose-cdk.IConfig">IConfig</a>

---

##### `target`<sup>Required</sup> <a name="target" id="docker-compose-cdk.ConfigMapping.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `gid`<sup>Optional</sup> <a name="gid" id="docker-compose-cdk.ConfigMapping.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `mode`<sup>Optional</sup> <a name="mode" id="docker-compose-cdk.ConfigMapping.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `uid`<sup>Optional</sup> <a name="uid" id="docker-compose-cdk.ConfigMapping.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

### ConfigProps <a name="ConfigProps" id="docker-compose-cdk.ConfigProps"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.ConfigProps.Initializer"></a>

```typescript
import { ConfigProps } from 'docker-compose-cdk'

const configProps: ConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ConfigProps.property.content">content</a></code> | <code>string</code> | *No description.* |

---

##### `content`<sup>Required</sup> <a name="content" id="docker-compose-cdk.ConfigProps.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

### DeviceMapping <a name="DeviceMapping" id="docker-compose-cdk.DeviceMapping"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.DeviceMapping.Initializer"></a>

```typescript
import { DeviceMapping } from 'docker-compose-cdk'

const deviceMapping: DeviceMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.DeviceMapping.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.DeviceMapping.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `source`<sup>Required</sup> <a name="source" id="docker-compose-cdk.DeviceMapping.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="docker-compose-cdk.DeviceMapping.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

### Names <a name="Names" id="docker-compose-cdk.Names"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.Names.Initializer"></a>

```typescript
import { Names } from 'docker-compose-cdk'

const names: Names = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.Names.property.fullQualified">fullQualified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.Names.property.local">local</a></code> | <code>string</code> | *No description.* |

---

##### `fullQualified`<sup>Required</sup> <a name="fullQualified" id="docker-compose-cdk.Names.property.fullQualified"></a>

```typescript
public readonly fullQualified: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="docker-compose-cdk.Names.property.local"></a>

```typescript
public readonly local: string;
```

- *Type:* string

---

### NetworkDriverOptions <a name="NetworkDriverOptions" id="docker-compose-cdk.NetworkDriverOptions"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.NetworkDriverOptions.Initializer"></a>

```typescript
import { NetworkDriverOptions } from 'docker-compose-cdk'

const networkDriverOptions: NetworkDriverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.NetworkDriverOptions.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `parent`<sup>Optional</sup> <a name="parent" id="docker-compose-cdk.NetworkDriverOptions.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

### NetworkIpam <a name="NetworkIpam" id="docker-compose-cdk.NetworkIpam"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.NetworkIpam.Initializer"></a>

```typescript
import { NetworkIpam } from 'docker-compose-cdk'

const networkIpam: NetworkIpam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.NetworkIpam.property.config">config</a></code> | <code><a href="#docker-compose-cdk.NetworkIpamConfig">NetworkIpamConfig</a>[]</code> | *No description.* |

---

##### `config`<sup>Optional</sup> <a name="config" id="docker-compose-cdk.NetworkIpam.property.config"></a>

```typescript
public readonly config: NetworkIpamConfig[];
```

- *Type:* <a href="#docker-compose-cdk.NetworkIpamConfig">NetworkIpamConfig</a>[]

---

### NetworkIpamConfig <a name="NetworkIpamConfig" id="docker-compose-cdk.NetworkIpamConfig"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.NetworkIpamConfig.Initializer"></a>

```typescript
import { NetworkIpamConfig } from 'docker-compose-cdk'

const networkIpamConfig: NetworkIpamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.NetworkIpamConfig.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkIpamConfig.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkIpamConfig.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="docker-compose-cdk.NetworkIpamConfig.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="docker-compose-cdk.NetworkIpamConfig.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="docker-compose-cdk.NetworkIpamConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

### NetworkProps <a name="NetworkProps" id="docker-compose-cdk.NetworkProps"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.NetworkProps.Initializer"></a>

```typescript
import { NetworkProps } from 'docker-compose-cdk'

const networkProps: NetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.NetworkProps.property.driver">driver</a></code> | <code><a href="#docker-compose-cdk.NetworkDriver">NetworkDriver</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkProps.property.driverOptions">driverOptions</a></code> | <code><a href="#docker-compose-cdk.NetworkDriverOptions">NetworkDriverOptions</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkProps.property.ipam">ipam</a></code> | <code><a href="#docker-compose-cdk.NetworkIpam">NetworkIpam</a></code> | *No description.* |

---

##### `driver`<sup>Optional</sup> <a name="driver" id="docker-compose-cdk.NetworkProps.property.driver"></a>

```typescript
public readonly driver: NetworkDriver;
```

- *Type:* <a href="#docker-compose-cdk.NetworkDriver">NetworkDriver</a>

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="docker-compose-cdk.NetworkProps.property.driverOptions"></a>

```typescript
public readonly driverOptions: NetworkDriverOptions;
```

- *Type:* <a href="#docker-compose-cdk.NetworkDriverOptions">NetworkDriverOptions</a>

---

##### `ipam`<sup>Optional</sup> <a name="ipam" id="docker-compose-cdk.NetworkProps.property.ipam"></a>

```typescript
public readonly ipam: NetworkIpam;
```

- *Type:* <a href="#docker-compose-cdk.NetworkIpam">NetworkIpam</a>

---

### NetworkSelection <a name="NetworkSelection" id="docker-compose-cdk.NetworkSelection"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.NetworkSelection.Initializer"></a>

```typescript
import { NetworkSelection } from 'docker-compose-cdk'

const networkSelection: NetworkSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.NetworkSelection.property.network">network</a></code> | <code><a href="#docker-compose-cdk.INetwork">INetwork</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkSelection.property.ipV4Address">ipV4Address</a></code> | <code>string</code> | *No description.* |

---

##### `network`<sup>Required</sup> <a name="network" id="docker-compose-cdk.NetworkSelection.property.network"></a>

```typescript
public readonly network: INetwork;
```

- *Type:* <a href="#docker-compose-cdk.INetwork">INetwork</a>

---

##### `ipV4Address`<sup>Optional</sup> <a name="ipV4Address" id="docker-compose-cdk.NetworkSelection.property.ipV4Address"></a>

```typescript
public readonly ipV4Address: string;
```

- *Type:* string

---

### ResourceOptions <a name="ResourceOptions" id="docker-compose-cdk.ResourceOptions"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.ResourceOptions.Initializer"></a>

```typescript
import { ResourceOptions } from 'docker-compose-cdk'

const resourceOptions: ResourceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ResourceOptions.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ResourceOptions.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `fullQualifiedName`<sup>Optional</sup> <a name="fullQualifiedName" id="docker-compose-cdk.ResourceOptions.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="docker-compose-cdk.ResourceOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### ResourceProps <a name="ResourceProps" id="docker-compose-cdk.ResourceProps"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.ResourceProps.Initializer"></a>

```typescript
import { ResourceProps } from 'docker-compose-cdk'

const resourceProps: ResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ResourceProps.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ResourceProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ResourceProps.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `fullQualifiedName`<sup>Optional</sup> <a name="fullQualifiedName" id="docker-compose-cdk.ResourceProps.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="docker-compose-cdk.ResourceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.ResourceProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

### ServiceProps <a name="ServiceProps" id="docker-compose-cdk.ServiceProps"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from 'docker-compose-cdk'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.ServiceProps.property.image">image</a></code> | <code><a href="#docker-compose-cdk.IDockerImage">IDockerImage</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.configs">configs</a></code> | <code><a href="#docker-compose-cdk.ConfigMapping">ConfigMapping</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.devices">devices</a></code> | <code><a href="#docker-compose-cdk.DeviceMapping">DeviceMapping</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.disabled">disabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.networks">networks</a></code> | <code><a href="#docker-compose-cdk.NetworkSelection">NetworkSelection</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.ports">ports</a></code> | <code><a href="#docker-compose-cdk.IPortMapping">IPortMapping</a>[]</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.privileged">privileged</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.restart">restart</a></code> | <code><a href="#docker-compose-cdk.RestartPolicy">RestartPolicy</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.user">user</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#docker-compose-cdk.ServiceProps.property.volumes">volumes</a></code> | <code><a href="#docker-compose-cdk.VolumeMapping">VolumeMapping</a>[]</code> | *No description.* |

---

##### `image`<sup>Required</sup> <a name="image" id="docker-compose-cdk.ServiceProps.property.image"></a>

```typescript
public readonly image: IDockerImage;
```

- *Type:* <a href="#docker-compose-cdk.IDockerImage">IDockerImage</a>

---

##### `command`<sup>Optional</sup> <a name="command" id="docker-compose-cdk.ServiceProps.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `configs`<sup>Optional</sup> <a name="configs" id="docker-compose-cdk.ServiceProps.property.configs"></a>

```typescript
public readonly configs: ConfigMapping[];
```

- *Type:* <a href="#docker-compose-cdk.ConfigMapping">ConfigMapping</a>[]

---

##### `devices`<sup>Optional</sup> <a name="devices" id="docker-compose-cdk.ServiceProps.property.devices"></a>

```typescript
public readonly devices: DeviceMapping[];
```

- *Type:* <a href="#docker-compose-cdk.DeviceMapping">DeviceMapping</a>[]

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="docker-compose-cdk.ServiceProps.property.disabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="docker-compose-cdk.ServiceProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="docker-compose-cdk.ServiceProps.property.networks"></a>

```typescript
public readonly networks: NetworkSelection[];
```

- *Type:* <a href="#docker-compose-cdk.NetworkSelection">NetworkSelection</a>[]

---

##### `ports`<sup>Optional</sup> <a name="ports" id="docker-compose-cdk.ServiceProps.property.ports"></a>

```typescript
public readonly ports: IPortMapping[];
```

- *Type:* <a href="#docker-compose-cdk.IPortMapping">IPortMapping</a>[]

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="docker-compose-cdk.ServiceProps.property.privileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* boolean

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="docker-compose-cdk.ServiceProps.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `restart`<sup>Optional</sup> <a name="restart" id="docker-compose-cdk.ServiceProps.property.restart"></a>

```typescript
public readonly restart: RestartPolicy;
```

- *Type:* <a href="#docker-compose-cdk.RestartPolicy">RestartPolicy</a>

---

##### `user`<sup>Optional</sup> <a name="user" id="docker-compose-cdk.ServiceProps.property.user"></a>

```typescript
public readonly user: string | number;
```

- *Type:* string | number

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="docker-compose-cdk.ServiceProps.property.volumes"></a>

```typescript
public readonly volumes: VolumeMapping[];
```

- *Type:* <a href="#docker-compose-cdk.VolumeMapping">VolumeMapping</a>[]

---

### SynthMetadata <a name="SynthMetadata" id="docker-compose-cdk.SynthMetadata"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.SynthMetadata.Initializer"></a>

```typescript
import { SynthMetadata } from 'docker-compose-cdk'

const synthMetadata: SynthMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.SynthMetadata.property.projects">projects</a></code> | <code><a href="#docker-compose-cdk.SynthProjectResult">SynthProjectResult</a>[]</code> | *No description.* |

---

##### `projects`<sup>Required</sup> <a name="projects" id="docker-compose-cdk.SynthMetadata.property.projects"></a>

```typescript
public readonly projects: SynthProjectResult[];
```

- *Type:* <a href="#docker-compose-cdk.SynthProjectResult">SynthProjectResult</a>[]

---

### SynthProjectReference <a name="SynthProjectReference" id="docker-compose-cdk.SynthProjectReference"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.SynthProjectReference.Initializer"></a>

```typescript
import { SynthProjectReference } from 'docker-compose-cdk'

const synthProjectReference: SynthProjectReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.SynthProjectReference.property.composeHash">composeHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.SynthProjectReference.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `composeHash`<sup>Required</sup> <a name="composeHash" id="docker-compose-cdk.SynthProjectReference.property.composeHash"></a>

```typescript
public readonly composeHash: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.SynthProjectReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### SynthProjectResult <a name="SynthProjectResult" id="docker-compose-cdk.SynthProjectResult"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.SynthProjectResult.Initializer"></a>

```typescript
import { SynthProjectResult } from 'docker-compose-cdk'

const synthProjectResult: SynthProjectResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.SynthProjectResult.property.composeHash">composeHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.SynthProjectResult.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.SynthProjectResult.property.compose">compose</a></code> | <code>object</code> | *No description.* |

---

##### `composeHash`<sup>Required</sup> <a name="composeHash" id="docker-compose-cdk.SynthProjectResult.property.composeHash"></a>

```typescript
public readonly composeHash: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.SynthProjectResult.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `compose`<sup>Required</sup> <a name="compose" id="docker-compose-cdk.SynthProjectResult.property.compose"></a>

```typescript
public readonly compose: object;
```

- *Type:* object

---

### SynthToDirMetadata <a name="SynthToDirMetadata" id="docker-compose-cdk.SynthToDirMetadata"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.SynthToDirMetadata.Initializer"></a>

```typescript
import { SynthToDirMetadata } from 'docker-compose-cdk'

const synthToDirMetadata: SynthToDirMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.SynthToDirMetadata.property.projects">projects</a></code> | <code><a href="#docker-compose-cdk.SynthProjectReference">SynthProjectReference</a>[]</code> | *No description.* |

---

##### `projects`<sup>Required</sup> <a name="projects" id="docker-compose-cdk.SynthToDirMetadata.property.projects"></a>

```typescript
public readonly projects: SynthProjectReference[];
```

- *Type:* <a href="#docker-compose-cdk.SynthProjectReference">SynthProjectReference</a>[]

---

### VolumeMapping <a name="VolumeMapping" id="docker-compose-cdk.VolumeMapping"></a>

#### Initializer <a name="Initializer" id="docker-compose-cdk.VolumeMapping.Initializer"></a>

```typescript
import { VolumeMapping } from 'docker-compose-cdk'

const volumeMapping: VolumeMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.VolumeMapping.property.source">source</a></code> | <code>string \| <a href="#docker-compose-cdk.IVolume">IVolume</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.VolumeMapping.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.VolumeMapping.property.readonly">readonly</a></code> | <code>boolean</code> | *No description.* |

---

##### `source`<sup>Required</sup> <a name="source" id="docker-compose-cdk.VolumeMapping.property.source"></a>

```typescript
public readonly source: string | IVolume;
```

- *Type:* string | <a href="#docker-compose-cdk.IVolume">IVolume</a>

---

##### `target`<sup>Required</sup> <a name="target" id="docker-compose-cdk.VolumeMapping.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="docker-compose-cdk.VolumeMapping.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNamingStrategy <a name="DefaultNamingStrategy" id="docker-compose-cdk.DefaultNamingStrategy"></a>

- *Implements:* <a href="#docker-compose-cdk.INamingStrategy">INamingStrategy</a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.DefaultNamingStrategy.Initializer"></a>

```typescript
import { DefaultNamingStrategy } from 'docker-compose-cdk'

new DefaultNamingStrategy()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.DefaultNamingStrategy.generateNames">generateNames</a></code> | *No description.* |

---

##### `generateNames` <a name="generateNames" id="docker-compose-cdk.DefaultNamingStrategy.generateNames"></a>

```typescript
public generateNames(construct: IConstruct): Names
```

###### `construct`<sup>Required</sup> <a name="construct" id="docker-compose-cdk.DefaultNamingStrategy.generateNames.parameter.construct"></a>

- *Type:* constructs.IConstruct

---




### DockerImage <a name="DockerImage" id="docker-compose-cdk.DockerImage"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.DockerImage.Initializer"></a>

```typescript
import { DockerImage } from 'docker-compose-cdk'

new DockerImage()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.DockerImage.ghcr">ghcr</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.DockerImage.hub">hub</a></code> | *No description.* |

---

##### `ghcr` <a name="ghcr" id="docker-compose-cdk.DockerImage.ghcr"></a>

```typescript
import { DockerImage } from 'docker-compose-cdk'

DockerImage.ghcr(userOrOrg: string, image: string, tag?: string)
```

###### `userOrOrg`<sup>Required</sup> <a name="userOrOrg" id="docker-compose-cdk.DockerImage.ghcr.parameter.userOrOrg"></a>

- *Type:* string

---

###### `image`<sup>Required</sup> <a name="image" id="docker-compose-cdk.DockerImage.ghcr.parameter.image"></a>

- *Type:* string

---

###### `tag`<sup>Optional</sup> <a name="tag" id="docker-compose-cdk.DockerImage.ghcr.parameter.tag"></a>

- *Type:* string

---

##### `hub` <a name="hub" id="docker-compose-cdk.DockerImage.hub"></a>

```typescript
import { DockerImage } from 'docker-compose-cdk'

DockerImage.hub(image: string, tag?: string)
```

###### `image`<sup>Required</sup> <a name="image" id="docker-compose-cdk.DockerImage.hub.parameter.image"></a>

- *Type:* string

---

###### `tag`<sup>Optional</sup> <a name="tag" id="docker-compose-cdk.DockerImage.hub.parameter.tag"></a>

- *Type:* string

---



### PortMapping <a name="PortMapping" id="docker-compose-cdk.PortMapping"></a>

#### Initializers <a name="Initializers" id="docker-compose-cdk.PortMapping.Initializer"></a>

```typescript
import { PortMapping } from 'docker-compose-cdk'

new PortMapping()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.PortMapping.http">http</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.PortMapping.https">https</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.PortMapping.port">port</a></code> | *No description.* |

---

##### `http` <a name="http" id="docker-compose-cdk.PortMapping.http"></a>

```typescript
import { PortMapping } from 'docker-compose-cdk'

PortMapping.http()
```

##### `https` <a name="https" id="docker-compose-cdk.PortMapping.https"></a>

```typescript
import { PortMapping } from 'docker-compose-cdk'

PortMapping.https()
```

##### `port` <a name="port" id="docker-compose-cdk.PortMapping.port"></a>

```typescript
import { PortMapping } from 'docker-compose-cdk'

PortMapping.port(port: number)
```

###### `port`<sup>Required</sup> <a name="port" id="docker-compose-cdk.PortMapping.port.parameter.port"></a>

- *Type:* number

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IConfig <a name="IConfig" id="docker-compose-cdk.IConfig"></a>

- *Extends:* <a href="#docker-compose-cdk.IResource">IResource</a>

- *Implemented By:* <a href="#docker-compose-cdk.Config">Config</a>, <a href="#docker-compose-cdk.ConfigBase">ConfigBase</a>, <a href="#docker-compose-cdk.IConfig">IConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.IConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.IConfig.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IConfig.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.IConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.IConfig.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.IConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.IConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

### IDockerImage <a name="IDockerImage" id="docker-compose-cdk.IDockerImage"></a>

- *Implemented By:* <a href="#docker-compose-cdk.IDockerImage">IDockerImage</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.IDockerImage.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IDockerImage.property.tag">tag</a></code> | <code>string</code> | *No description.* |

---

##### `image`<sup>Required</sup> <a name="image" id="docker-compose-cdk.IDockerImage.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `tag`<sup>Optional</sup> <a name="tag" id="docker-compose-cdk.IDockerImage.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

### INamingStrategy <a name="INamingStrategy" id="docker-compose-cdk.INamingStrategy"></a>

- *Implemented By:* <a href="#docker-compose-cdk.DefaultNamingStrategy">DefaultNamingStrategy</a>, <a href="#docker-compose-cdk.INamingStrategy">INamingStrategy</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.INamingStrategy.generateNames">generateNames</a></code> | *No description.* |

---

##### `generateNames` <a name="generateNames" id="docker-compose-cdk.INamingStrategy.generateNames"></a>

```typescript
public generateNames(construct: IConstruct): Names
```

###### `construct`<sup>Required</sup> <a name="construct" id="docker-compose-cdk.INamingStrategy.generateNames.parameter.construct"></a>

- *Type:* constructs.IConstruct

---


### INetwork <a name="INetwork" id="docker-compose-cdk.INetwork"></a>

- *Extends:* <a href="#docker-compose-cdk.IResource">IResource</a>

- *Implemented By:* <a href="#docker-compose-cdk.Network">Network</a>, <a href="#docker-compose-cdk.NetworkBase">NetworkBase</a>, <a href="#docker-compose-cdk.INetwork">INetwork</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.INetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.INetwork.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.INetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.INetwork.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.INetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.INetwork.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.INetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.INetwork.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

### IPortMapping <a name="IPortMapping" id="docker-compose-cdk.IPortMapping"></a>

- *Implemented By:* <a href="#docker-compose-cdk.IPortMapping">IPortMapping</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.IPortMapping.property.container">container</a></code> | <code>number</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IPortMapping.property.host">host</a></code> | <code>number</code> | *No description.* |

---

##### `container`<sup>Required</sup> <a name="container" id="docker-compose-cdk.IPortMapping.property.container"></a>

```typescript
public readonly container: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="docker-compose-cdk.IPortMapping.property.host"></a>

```typescript
public readonly host: number;
```

- *Type:* number

---

### IProject <a name="IProject" id="docker-compose-cdk.IProject"></a>

- *Implemented By:* <a href="#docker-compose-cdk.Project">Project</a>, <a href="#docker-compose-cdk.IProject">IProject</a>



### IResource <a name="IResource" id="docker-compose-cdk.IResource"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#docker-compose-cdk.Config">Config</a>, <a href="#docker-compose-cdk.ConfigBase">ConfigBase</a>, <a href="#docker-compose-cdk.Network">Network</a>, <a href="#docker-compose-cdk.NetworkBase">NetworkBase</a>, <a href="#docker-compose-cdk.Resource">Resource</a>, <a href="#docker-compose-cdk.Service">Service</a>, <a href="#docker-compose-cdk.ServiceBase">ServiceBase</a>, <a href="#docker-compose-cdk.Volume">Volume</a>, <a href="#docker-compose-cdk.VolumeBase">VolumeBase</a>, <a href="#docker-compose-cdk.IConfig">IConfig</a>, <a href="#docker-compose-cdk.INetwork">INetwork</a>, <a href="#docker-compose-cdk.IResource">IResource</a>, <a href="#docker-compose-cdk.IService">IService</a>, <a href="#docker-compose-cdk.IVolume">IVolume</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.IResource.render">render</a></code> | *No description.* |

---

##### `render` <a name="render" id="docker-compose-cdk.IResource.render"></a>

```typescript
public render(): object
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.IResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.IResource.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IResource.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.IResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.IResource.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.IResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.IResource.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

### IService <a name="IService" id="docker-compose-cdk.IService"></a>

- *Extends:* <a href="#docker-compose-cdk.IResource">IResource</a>

- *Implemented By:* <a href="#docker-compose-cdk.Service">Service</a>, <a href="#docker-compose-cdk.ServiceBase">ServiceBase</a>, <a href="#docker-compose-cdk.IService">IService</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.IService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.IService.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IService.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.IService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.IService.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.IService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.IService.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

### IVolume <a name="IVolume" id="docker-compose-cdk.IVolume"></a>

- *Extends:* <a href="#docker-compose-cdk.IResource">IResource</a>

- *Implemented By:* <a href="#docker-compose-cdk.Volume">Volume</a>, <a href="#docker-compose-cdk.VolumeBase">VolumeBase</a>, <a href="#docker-compose-cdk.IVolume">IVolume</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#docker-compose-cdk.IVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#docker-compose-cdk.IVolume.property.fullQualifiedName">fullQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#docker-compose-cdk.IVolume.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="docker-compose-cdk.IVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fullQualifiedName`<sup>Required</sup> <a name="fullQualifiedName" id="docker-compose-cdk.IVolume.property.fullQualifiedName"></a>

```typescript
public readonly fullQualifiedName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="docker-compose-cdk.IVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="docker-compose-cdk.IVolume.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### NetworkDriver <a name="NetworkDriver" id="docker-compose-cdk.NetworkDriver"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.NetworkDriver.BRIDGE">BRIDGE</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.NetworkDriver.MACVLAN">MACVLAN</a></code> | *No description.* |

---

##### `BRIDGE` <a name="BRIDGE" id="docker-compose-cdk.NetworkDriver.BRIDGE"></a>

---


##### `MACVLAN` <a name="MACVLAN" id="docker-compose-cdk.NetworkDriver.MACVLAN"></a>

---


### RestartPolicy <a name="RestartPolicy" id="docker-compose-cdk.RestartPolicy"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#docker-compose-cdk.RestartPolicy.NO">NO</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.RestartPolicy.UNLESS_STOPPED">UNLESS_STOPPED</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.RestartPolicy.ALWAYS">ALWAYS</a></code> | *No description.* |
| <code><a href="#docker-compose-cdk.RestartPolicy.ON_FAILURE">ON_FAILURE</a></code> | *No description.* |

---

##### `NO` <a name="NO" id="docker-compose-cdk.RestartPolicy.NO"></a>

---


##### `UNLESS_STOPPED` <a name="UNLESS_STOPPED" id="docker-compose-cdk.RestartPolicy.UNLESS_STOPPED"></a>

---


##### `ALWAYS` <a name="ALWAYS" id="docker-compose-cdk.RestartPolicy.ALWAYS"></a>

---


##### `ON_FAILURE` <a name="ON_FAILURE" id="docker-compose-cdk.RestartPolicy.ON_FAILURE"></a>

---

