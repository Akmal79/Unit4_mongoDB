var MongoClient=require('mongodb').MongoClient
var url="mongodb://localhost:27017/dip1";
function mongo(err,db)
{
    if(err){
        console.log("error connecting to the database",err);
        throw err;
    }

   console.log("database created ")
}

mongo()