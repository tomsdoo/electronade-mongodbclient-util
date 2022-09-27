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

    // @ts-expect-error
    globalThis.electronade = {
      mongodbclient: {
        insertMany: async ({
          uri,
          db,
          collection,
          items,
        }: {
          uri: string;
          db: string;
          collection: string;
          items: object[];
        }) => await Promise.resolve({ insertedCount: items.length }),
        read: async ({
          uri,
          db,
          collection,
          condition,
        }: {
          uri: string;
          db: string;
          collection: string;
          condition?: any;
        }) =>
          await Promise.resolve([
            { ...condition, _id: "x" },
            { ...condition, _id: "y" },
          ]),
        upsert: async ({
          uri,
          db,
          collection,
          item,
        }: {
          uri: string;
          db: string;
          collection: string;
          item: object;
        }) => await Promise.resolve({ _id: "x", ...item }),
        remove: async ({
          uri,
          db,
          collection,
          condition,
        }: {
          uri: string;
          db: string;
          collection: string;
          condition: any;
        }) => await Promise.resolve({ deletedCount: 1 }),
        count: async ({
          uri,
          db,
          collection,
          condition,
        }: {
          uri: string;
          db: string;
          collection: string;
          condition?: any;
        }) => await Promise.resolve(1),
        distinct: async ({
          uri,
          db,
          collection,
          key,
          condition,
        }: {
          uri: string;
          db: string;
          collection: string;
          key: string;
          condition?: any;
        }) => await Promise.resolve(["test"]),
      },
    };
  });

  it("insertMany()", async () => {
    const items = [{ name: 0 }, { name: 1 }];
    assert.equal(
      await new MongoDbClient(uri, db, collection)
        .insertMany(items)
        .then(({ insertedCount }: { insertedCount: number }) => insertedCount),
      items.length
    );
  });

  it("read()", async () => {
    assert(
      await new MongoDbClient(uri, db, collection)
        .read({ name: "test" })
        .then((items: any[]) => items.every((item) => item.name === "test"))
    );
  });

  it("upsert()", async () => {
    const item = { name: "test", message: 1 };
    assert.equal(
      await new MongoDbClient(uri, db, collection)
        .upsert(item)
        .then(({ _id, ...rest }: { _id: string }) => JSON.stringify(rest)),
      JSON.stringify(item)
    );
  });

  it("remove()", async () => {
    assert.equal(
      await new MongoDbClient(uri, db, collection)
        .remove({ _id: "test" })
        .then(({ deletedCount }: { deletedCount: number }) => deletedCount),
      1
    );
  });

  it("count()", async () => {
    assert.equal(await new MongoDbClient(uri, db, collection).count(), 1);
  });

  it("distinct()", async () => {
    assert.equal(
      await new MongoDbClient(uri, db, collection)
        .distinct("name")
        .then((result: any) => JSON.stringify(result)),
      JSON.stringify(["test"])
    );
  });
});
