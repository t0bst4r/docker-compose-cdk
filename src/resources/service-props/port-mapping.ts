export abstract class PortMapping {
  public static port(port: number): IPortMapping;
  public static port(host: number, container: number): IPortMapping;
  public static port(hostOrBoth: number, container?: number): IPortMapping {
    return { host: hostOrBoth, container: container ?? hostOrBoth };
  }
  public static http(): IPortMapping {
    return this.port(80);
  }
  public static https(): IPortMapping {
    return this.port(443);
  }
}
export interface IPortMapping {
  readonly host: number;
  readonly container: number;
}
