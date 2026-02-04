db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { _id: 0, name: 1, email: 1 } },
  { $sort: { name: 1 } },
  { $limit: 3},
  {$skip:1}
])



db.employees.aggregate([
    {
        $group:
        {_id:"$department",
            total:{$sum:"$salary"}
        }
    }
])


db.employees.aggregate([
    {
        $group:
        {_id:"$department",
            total:{$sum:"$salary"},
            highest:{$max:"$salary"},
            lowesr:{$min:"$salary"},
            average:{$avg:"$salary"}
        }
    }
])


db.employees.aggregate([
    {$group:
        {_id:"$department",
            total:{$sum:"$salary"}
        }
    },
    {$sort:{total:-1}},
    {$limit:2}
])


db.employees.aggregate([
    {$project:{_id:0,
        name:1,
        salary:1,
        annualSalary:{$multiply:[12,"$salary"]}
    }}
])