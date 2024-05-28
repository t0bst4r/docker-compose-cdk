export interface IDockerImage {
  image: string;
  tag?: string;
}

export abstract class DockerImage {
  public static hub(image: string, tag?: string): IDockerImage {
    return { image, tag };
  }

  public static ghcr(userOrOrg: string, image: string, tag?: string): IDockerImage {
    return {
      image: ['ghcr.io', userOrOrg, image].join('/'),
      tag,
    };
  }
}
