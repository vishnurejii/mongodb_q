db.employees.find(
    {},
    {name:1,department:1}
)

db.employees.find(
    {},
    {name:1,dept:"department"}
)


db.user.insertMany({name:"vishnu",age:22,address:{addr1:"kenichira",city:"wayanad",state:"kerala"}})


db.user.find({name:1,age:1,city:"$address.city",state:"$address.state"})


//add skills arrays for all users
//and populate java,python


db.users.updateMany(
  {},
  { $push: { skills: { $each: ["java", "python"] } } }
)

db.users.updateMany(
  {},
  { $set: { skills:["java", "python"] } } 
)


db.users.find({},{_id:0,name:1,skills:1})

db.users.aggregate({$project:{_id:0,name:1,skills:1}})

db.users.aggregate({$project:{_id:0,name:1,skills:1}},{$unwind:"$skills"})