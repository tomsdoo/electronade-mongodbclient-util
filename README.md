# electronade-mongodbclient-util

It's a package that provides some utilities for `electronade-mongodbclient`.

It's an optional module for `electronade-mongodbclient` so `electronade-mongodbclient` should be installed before using `electronade-mongodbclient-util`.

See [electronade-mongodbclient-util.netlify.app](https://electronade-mongodbclient-util.netlify.app/) for details.

## Installation
``` shell
npm install electronade-mongodbclient-util
```

## Interfaces

``` typescript
class MongoDbClient {
  constructor(uri: string, db: string, collection: string, exposedName?: string);
  public insertMany(items: object[]) => Promise<any>;
  public read(condition?: any) => Promise<any[]>;
  public upsert(item: object) => Promise<any>;
  public remove(condition: any) => Promise<any>;
  public count(condition?: any) => Promise<number>;
  public distinct(key: string, condition?: any) => Promise<any>;
}
```

## Usage

import and use MongoDbClient class in Renderer process.

``` typescript
import { MongoDbClient } from "electronade-mongodbclient-util";

const client = new MongoDbClient(
  "mongodb://...",
  "db",
  "collection"
);


console.log(
  await client.insertMany([
    { name: "test1" },
    { name: "test2" }
  ])
  .then(({ insertedCount }) => insertedCount)
); // 2

console.log(
  await client.distinct("name")
); // ["test1", "test2"]

console.log(
  await client.read({ name: "test1" })
    .then(({ name }) => name)
); // "test1"

console.log(
  await client.remove({ name: "test1" })
    .then(({ deletedCount }) => deletedCount)
); // 1
```
