const { db } = require("../utils/firestore");

async function getAllData() {
  const predictCollection = db.collection("predictions");

  const allData = await predictCollection.get();
  return allData;
}

module.exports = getAllData;
