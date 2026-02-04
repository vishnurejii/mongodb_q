
db.orders.insertOne({empId:ObjectId('6982bacd935d60e4f3628ca3'),product:"Router",orderValue:4500})


db.orders.aggregate([
    {$project:{_id:0,empId:1,orderValue:1}}
])


db.orders.aggregate([
    {$lookup:{
        from:"employees",
        localField:"empId",
        foreignField:"_id",
        as:"users"
    }}
])//to join two collections

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders"
    }},
    {$unwind:"$orders"},
    {$project:{name:1,
       product:"$orders.product",
       orderValue:"$orders.orderValue"
    }}
])



db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders"
    }},
     {$lookup:{
        from:"empDetails",
        localField:"_id",
        foreignField:"empId",
        as:"empDetails"
    }},
     {$unwind:"$orders"},
    {$unwind:"$empDetails"},
    {$project:{_id:0,
        empId:1,
        name:1,
        product:"$orders.product",
        orderValue:"$orders.orderValue",
        city:"$empDetails.city",
        state:"$empDetails.state"

    }},
   
])




//second way to join two collections
db.employees.aggregate([
    {$lookup:{from:"orders",
        let:{uid:"$_id"},
        pipeline:[{
            $match:{
                $expr:{$eq:["$empId","$$uid"]}
            }
        }],
        as:"orders"
    }},
     {$unwind:"$orders"},
    {$project:{
        name:1,
        product:"$orders.product",
        orderValue:"$orders.orderValue"
    }},
   
])




db.employees.aggregate([
    {$lookup:{from:"orders",
        let:{uid:"$_id"},
        pipeline:[{
            $match:{
                $expr:{$eq:["$empId","$$uid"]}
            }
        },
    {$project:{
        _id:0,
        empId:1,
        product:1,
        orderValue:1
    }},],
        as:"orders"
    }},{$unwind:"$orders"}

   
   
])