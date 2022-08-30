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
    const items = [
      { name: 0 }, { name: 1 }
    ];
    assert.equal(
      await new MongoDbClient(uri, db, collection)
        .insertMany(items)
        .then(({ insertedCount }: { insertedCount: number }) => insertedCount),
      2
    );
  });
});
