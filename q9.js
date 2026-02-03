db.employees.find(
    {location:"FL"}
)

db.employees.updateOne(
    {email:"appu@gmail.com"},
    {$push:{location:"AZ"}}
)//when we need to update a array ,when we wanto add one more data in the last of the array

db.employees.updateOne(
    {email:"appu@gmail.com"},
    {$pop:{location:1}}
)//when we want to remove the last element in the array

// create a new field skills and add python ad array

db.employees.updateOne({},{$push:{skills:"python"}})

db.employees.updateMany({},{$push:{skills:"python"}})
db.employees.updateMany({},{$push:{skills:"java"}})


db.employees.updateOne(
    {email:"athul@gmail.com"},
    {$push:{skills:".net"}}
)

db.employees.updateOne(
    {email:"athul@gmail.com"},
    {$push:{skills:"python"}}
)

db.employees.updateOne(
    {email:"athul@gmail.com"},
    {$pop:{skills:1}}
)

db.employees.updateOne(
    {email:"athul@gmail.com"},
    {$addToSet:{skills:"java"}}
)//it will check the value is there or not,if there will not update again


db.employees.updateOne(
    {email:"athul@gmail.com"},
    {$pull:{skills:"java"}}
)//will remove the matching element