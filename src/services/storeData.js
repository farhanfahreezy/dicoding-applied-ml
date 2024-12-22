const { db } = require("../utils/firestore");

async function storeData(id, data) {
  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
