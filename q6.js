db.employees.find(
    {department:"mech"},{salary:{$gt:1000}
    }
)

db.employees.find(
 {$and:[{
    department: "mech",
    salary: { $gt: 1000 }}]
  }
)


db.employees.find(
 {$or:[{
    department: "mech",
    salary: { $gt: 1000 }}]
  },{name:1,email:1,department:1}
)

d