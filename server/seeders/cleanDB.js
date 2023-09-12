const models = require('../models');  
const db = require('../config/connection');

module.exports = async (modelName) => {
  try {
    let modelExists = await models[modelName].db.db.listCollection({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName)
  }
  } catch (err) {
    throw err;
  }
}