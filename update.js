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
  const data={name:"cherry cutie"};
  var newvalues = {$set: {name:"Pro max"}}
  const collection = client.db("dip").collection("employee")
  return collection.updateOne(data,newvalues)
})
.then((result)=>{
  console.log(result)
  client.close()
})
.catch((err)=>{
  console.log(err)
})