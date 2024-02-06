const {MongoClient} =require("mongodb")
const url= "mongodb://127.0.0.1/27017"
let client 
MongoClient.connect(url)
.then((connectedClient)=>
{
client= connectedClient;
})
.then((res)=>{
  //Insert many example data
  const data= [
    {name: "cherry", phone: "123456789"},
    {name: "cherry is a cutie", phone: "987654321"}
  ];
const collection= client.db("dip").collection("employee");
return collection.insertMany(data);
})
.then((result) => {
console.log("1 document inserted");
client.close();
})
.catch((err) => {
console.error("An error occured:" , err);
});