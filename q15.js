db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1}}
])


db.employees.aggregate([
    {$project:
        {_id:0,
            name:1,
            salary:1,
        grade:{$cond:[{$gt:["$salary",4000]},"grade A","grade B"]}
        }}
])


db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,
        grade:{$cond:[{$gt:["$salary",4000]},"grade A","grade B"]}
    }}
])

db.employees.aggregate({$project:{_id:0,name:1,salary:1,grade:{$cond:[{$gt:["$salary",4000]},"",""]}}})

//if condition 
db.employees.aggregate([
    {$project:{_id:0,
        name:1,
        salary:1,
        grade:
        {$cond:
            {if:{},
            then:"",
            else:""}}
    }}
])

db.employees.aggregate([{$project:{_id:0,
    name:1,
    salary:1,
    grade:{$cond:{if:{$gt:["$salary",3000]},then:"grade A",else:"grade B"}}

}}])


db.employees.aggregate({$project:{_id:0,name:1,salary:1,grade:{$cond:{if:{$gt:["$salary",3000],then:"",else:""}}}}})



//switch case
db.employees.aggregate([
    {$project:{
    _id:0,
    name:1,
    salary:1,
    grade:{
        $switch:{
            branches:[{case:{},then:""},
                {case:{},then:""}],
            default:""
        }

    }
    }}
])

db.employees.aggregate({$project:{_id:0,name:1,salary:1,grade:{$switch:{branches:[{case:{$gt:["$salary",3000],then:""}}],
default:""}}}})



db.employees.aggregate([
    {$project:{
    _id:0,
    name:1,
    salary:1,
    grade:{
        $switch:{
            branches:[{case:{$gt:["$salary",3000]},then:"grade A"},
                {case:{$gt:["$salary",2000]},then:"grade B"}],
            default:"grade c"
        }

    }
    }}
])



db.orders.insertOne({empId:ObjectId('6982bacd935d60e4f3628ca3'),product:"Router",orderValue:4500})

