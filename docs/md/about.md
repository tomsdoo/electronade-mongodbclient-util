# electronade-mongodbclient-util

It's a package that provides some utilities for [electronade-mongodbclient](https://electronade-mongodbclient.netlify.app).

It's an optional module for `electronade-mongodbclient` so `electronade-mongodbclient` should be installed before using `electronade-mongodbclient-util`.

## installation
``` shell
npm install electronade-mongodbclient-util
```
## what exported

MongoDbClient class is exported from the package that class provides the methods calling `electronade-mongodbclient` features.

``` mermaid
classDiagram

class MongoDbClient {
  +constructor(uri: string, db: string, collection: string, exposedName?: string)
  +insertMany(items: object[]) Promise~any~
  +read(condition?: any) Promise~any~
  +upsert(item: object) Promise~any~
  +remove(condition: any) Promise~any~
  +count(condition?: any) Promise~number~
  +distinct(key: string, condition?: any) Promise~any~
}
```
