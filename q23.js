//create folder mongo-replica
//create folders - usa,uk,india insside mongo-replica folder

//mongod -replSet rs1 --dbpath "c:\mongo-replica\usa" --port 27018
//mongod -replSet rs1 --dbpath "c:\mongo-replica\uk" --port 27019
// mongod -replSet rs1 --dbpath "c:\mongo-replica\india" --port 27020
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