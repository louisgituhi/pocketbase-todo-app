/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bni6si886ue060k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0c2cjghz",
    "name": "Type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Personal",
        "Professional"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bni6si886ue060k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0c2cjghz",
    "name": "Type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Personal",
        "Professional"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
