const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1/27017";
let client;

MongoClient.connect(url)
  .then((connectedClient) => {
    client = connectedClient;
    const dbo = client.db("dip1");
    return dbo.collection("employee").drop();
  })
  .then((del) => {
    if (del) {
      console.log("Collection deleted");
    }
    client.close();
  })
  .catch((err) => {
    console.log("An error occurred:", err);
  });
