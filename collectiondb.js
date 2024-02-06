const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1/27017"

let Client
MongoClient.connect(url)
.then((connectedClient)=>{
    client=connectedClient;
    const dbo= client.db("dip1")
    return dbo.createCollection("employee")
})
.then(()=>{
    console.log("collection created")
    client.close()
})
.catch((err)=>{
    console.log(err)
})