const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/dip1";
let client;
MongoClient.connect(url)
    .then((connectedClient)=>{
        client = connectedClient;
    })
    .then(()=>{
        let result
        const data={name:"John Doe"}
        const collection=client.db("dip1").collection("employee")
        return collection.findOne(data)
    })
    .then((result)=>{
        console.log(result)
        client.close()
    })
    .catch((err)=>
    {
        console.log(err)
    })