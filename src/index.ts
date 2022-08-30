export class MongoDbClient {
  protected uri: string;
  protected db: string;
  protected collection: string;
  protected exposedName: string;
  constructor(uri: string, db: string, collection: string, exposedName?: string){
    this.uri = uri;
    this.db = db;
    this.collection = collection;
    this.exposedName = exposedName || "electronade";
  }
  public insertMany(items: object[]){
    // @ts-ignore
    return globalThis[this.exposedName].mongodbclient.insertMany({
      uri: this.uri,
      db: this.db,
      collection: this.collection,
      items
    });
  }
}
