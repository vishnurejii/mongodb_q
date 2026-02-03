// db.employees.find({},{})
db.employees.find({department:"mech",salary:1400},
    {_id:0,name:1,salary:1}
)

db.employees.find().limit(4)
db.employees.skip(1)
db.employees.find().limit(3).skip(1)

db.employees.find().sort({name:1})

db.employees.find().limit(3).skip(1).sort({name:-1})


db.employees.find().count()

db.employees.find({department:"mech"})

db.employees.find({department:{$eq:"mech"}})

db.employees.find({salary:{$eq:1400}})


db.employees.find({salary:{$gt:1400}})

db.employees.find({salary:{$gte:1400}})

db.employees.find({salary:{$ne:1400}})

db.employees.find({salary:{$lt:1400}})

db.employees.find({salary:{$lte:1400}})