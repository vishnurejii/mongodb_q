db.employees.find({
    name:"appu"
})

db.employees.find(
    {name:{$regex:"John"}}
)//will check this word is there in the db

db.employees.find(
    {name:{$regex:"^a",$options:"i"}}
)//staring with a

db.employees.find(
    {name:{$regex:"a$",$options:"i"}}
)//ending with a