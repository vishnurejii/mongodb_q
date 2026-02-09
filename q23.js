//create folder mongo-replica
//create folders - usa,uk,india insside mongo-replica folder

//mongod -replSet rs1 --dbpath "c:\mongo-replica\usa" --port 27018
//mongod -replSet rs1 --dbpath "c:\mongo-replica\uk" --port 27019
// mongod -replSet rs1 --dbpath "c:\mongo-replica\india" --port 27020

// mongod -replSet rs1 --dbpath "c:\mongo-replica2\data1" --port 27018
//  mongod -replSet rs1 --dbpath "c:\mongo-replica2\data2" --port 27019
//   mongod -replSet rs1 --dbpath "c:\mongo-replica2\data3" --port 27020
//mongosh --port 27018
rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
})

//rs.config()
//rs.status()

//new tab
//mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"

//use mydatabase
//db.users.insertOne({name:"vishnu",age:21})


//mongosh --port 27020
// db.getMongo().setReadPref("secondary")
//db.user.find()

//db.shutdownServer()
//to restart again mongod -replSet rs1 --dbpath "c:\mongo-replica2\data1"

//login into replica set

//created hdfcbank 
//inserted customer details

//transaction steps
const session=db.getMongo().startSession()
session.startTransaction()
var custCollection=session.getDatabase("hdfcbank").customers
custCollection.updateOne({_id:"c1"},{$inc:{balance:-100}})
custCollection.updateOne({_id:"c2"},{$inc:{balance:100}})
session.commitTransaction()
session.endSession()

db.customers.find()