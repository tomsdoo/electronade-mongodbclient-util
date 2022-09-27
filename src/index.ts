export class MongoDbClient {
  protected uri: string;
  protected db: string;
  protected collection: string;
  protected exposedName: string;
  constructor(
    uri: string,
    db: string,
    collection: string,
    exposedName?: string
  ) {
    this.uri = uri;
    this.db = db;
    this.collection = collection;
    this.exposedName = exposedName ?? "electronade";
  }

  public async insertMany(items: object[]): Promise<any> {
    // @ts-expect-error
    return globalThis[this.exposedName].mongodbclient.insertMany({
      uri: this.uri,
      db: this.db,
      collection: this.collection,
      items,
    });
  }

  public async read(condition?: any): Promise<any[]> {
    // @ts-expect-error
    return globalThis[this.exposedName].mongodbclient.read({
      uri: this.uri,
      db: this.db,
      collection: this.collection,
      condition,
    });
  }

  public async upsert(item: object): Promise<any> {
    // @ts-expect-error
    return globalThis[this.exposedName].mongodbclient.upsert({
      uri: this.uri,
      db: this.db,
      collection: this.collection,
      item,
    });
  }

  public async remove(condition: any): Promise<any> {
    // @ts-expect-error
    return globalThis[this.exposedName].mongodbclient.remove({
      uri: this.uri,
      db: this.db,
      collection: this.collection,
      condition,
    });
  }

  public async count(condition?: any): Promise<number> {
    // @ts-expect-error
    return globalThis[this.exposedName].mongodbclient.count({
      uri: this.uri,
      db: this.db,
      collection: this.collection,
      condition,
    });
  }

  public async distinct(key: string, condition?: any): Promise<any[]> {
    // @ts-expect-error
    return globalThis[this.exposedName].mongodbclient.distinct({
      uri: this.uri,
      db: this.db,
      collection: this.collection,
      key,
      condition,
    });
  }
}
