//********user management********

// use admin
// show collections
db.createUser({
    user:"admin",
    pwd:"admin",
    roles:[{role:"root",db:"admin"}]
})


// mongosh --username admin -authenticationDatabase admin
//enter password
//use lpu26
db.createUser({
    user:"user1",
    pwd:"user1",
    roles:[{role:"read",db:"lpu26"}]
})

// exit and check
// mongosh --username user1 -authenticationDatabase lpu26

// exit and enter to admin 
// use lpu26
db.createUser({
    user:"user2",
    pwd:"user2",
    roles:[{role:"read",db:"lpu26"}]
})

// exit and enter as admin
//use lpu26
db.getUser()//for showing all users in lpu26
db.dropUser("username")//to delete a user

//to connect with mongodb compass
"mongodb://user1:user1@localhost:27017/lpu26"

//for connecting with the cmd mongodb//connection string
// mongosh "mongodb://user1:user1@localhost:27017/lpu26"