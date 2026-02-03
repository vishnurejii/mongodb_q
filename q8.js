db.employees.find(
    {
        department:{$in:["mech","IT"]}
    }
)

db.employees.find({
    department:{$nin:["mech","IT"]}
})//not in

db.createCollecton("students")

db.students.renameCollection("myStudent")