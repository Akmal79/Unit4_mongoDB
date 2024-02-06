const {MongoClient} =require("mongodb")
const url= "mongodb://127.0.0.1/27017"
let client 
MongoClient.connect(url)
.then((connectedClient)=>
{
client= connectedClient;
})
.then((res)=>
{
  const data={name:"cherry"};
  var newvalues = {$set: {name:"Amaan"}}
  const collection = client.db("dip1").collection("employee")
  return collection.updateOne(data,newvalues)
})
.then((result)=>{
  console.log(result)
  client.close()
})
.catch((err)=>{
  console.log(err)
})
