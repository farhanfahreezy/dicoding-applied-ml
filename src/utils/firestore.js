const { Firestore } = require("@google-cloud/firestore");

const db = new Firestore({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.SERVICE_ACCOUNT_PATH,
  databaseId: process.env.DATABASE_ID,
});

module.exports = { db };
