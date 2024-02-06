const{MongoClient}= require('mongodb')
const url="mongodb://127.0.0.1:27017/dipi";
let client;
MongoClient.connect(url)
.then((connectedClient)=>
{
    client=connectedClient;
})
.then((res)=>
{
    const data={ name:"John Doe", phone:"1234567890"};
    const collection= client.db("dip1").collection("employee");
    return collection.insertOne(data);
})
.then((result)=>{
    console.log("1 document inserted");
    client.close();
})
.catch((err)=>{
    console.error("an error occured:",err);
})