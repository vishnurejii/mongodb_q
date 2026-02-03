// db.employees.updateOne({},{})

db.employees.updateOne({
    email:"appu@gmail.com"},
    {$set:{salary:3500}}
)//set for sting a value

db.employees.updateOne({
    email:"appu@gmail.com"},
    {$inc:{salary:3500}}
) //here we used inc for increament the salary by 3500

db.employees.updateMany(
    {},{$inc:{salary:1000}}
)// to increament all users salary by 1000

db.employees.updateMany(
    {},
    {$set:{points:1}}
)

db.employees.updateOne({
    email:"appu@gmail.com"},
    {$set:{points:10}}
) 


db.employees.deleteOne({email:"santo@gmail.com"})

db.employees.deleteMany({email:"santo@gmail.com"})

db.employees.updateMany({email:{$in:["appu@gmail.com","athul@gmail.com"]}},
    {$inc:{salary:5000}}
)