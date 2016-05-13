var mongoDB = require('mongodb');
var uri = 'mongodb://localhost:27017/example';

mongoDB.MongoClient.connect(uri,(err, db)=>{

if(err)
{
    console.log(err);  
    process.exit(1); 
}

db.collection('sample').insert({
    name:"Mourya",
    id:"one"
},(error, result) => {
    if(error)
    {
        console.log(error);
        process.exit(1);
    }
    
    db.collection('sample').find().toArray((err,docs)=>{
       if(err)
       {
         console.log(err);  
       } 
       console.log(docs);
       process.exit(1);
    });
    
    
}); 

});