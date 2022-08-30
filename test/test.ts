import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { MongoDbClient } from "../src/";

let uri: string;
let db: string;
let collection: string;

describe("MongoDbClient class", () => {
  before(() => {
    uri = "uri";
    db = "db";
    collection = "collection";

    // @ts-ignore
    globalThis.electronade = {
      mongodbclient: {
        insertMany: ({
          uri,
          db,
          collection,
          items
        }: {
          uri: string;
          db: string;
          collection: string;
          items: object[]
        }) => Promise.resolve({ insertedCount: items.length })
      }
    };
  });

  it("insertMany()", async () => {
    assert.equal(
      await new MongoDbClient(uri, db, collection)
        .insertMany([ { name: 1 }, { name: 2 } ])
        .then(({ insertedCount }: { insertedCount: number }) => insertedCount),
      2
    );
  });
});
