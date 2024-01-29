/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bni6si886ue060k")

  // remove
  collection.schema.removeField("3yyj0qui")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bni6si886ue060k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3yyj0qui",
    "name": "Completed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
