# electronade-mongodbclient-util

It's a package that provides some utilities for [electronade-mongodbclient](https://electronade-mongodbclient.netlify.app).

![npm](https://img.shields.io/npm/v/electronade-mongodbclient-util)
![NPM](https://img.shields.io/npm/l/electronade-mongodbclient-util)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-mongodbclient-util)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-mongodbclient-util)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

[![](https://nodei.co/npm/electronade-mongodbclient-util.svg?mini=true)](https://www.npmjs.com/package/electronade-mongodbclient-util)

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
