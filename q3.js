db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date()
});

// db.employees.insertMany([{},{},{}])

db.employees.insertMany([{
    name: "rahul",
  email: "rahul@gmail.com",
  department: "mech",
  salary: 1400,
  location: ["FL", "OH"],
  date: Date()
},{
    name: "santo",
  email: "santo@gmail.com",
  department: "IT",
  salary: 1500,
  location: ["FL", "OH"],
  date: Date()
},{
    name: "athul",
  email: "athul@gmail.com",
  department: "IT",
  salary: 2000,
  location: ["FL", "OH"],
  date: Date()
},
{
    name: "appu",
  email: "appu@gmail.com",
  department: "mech",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date()
}])




db.employees.insertMany([{
    name: "cathy",
  email: "cathy@gmail.com",
  department: "mech",
  salary: 1400,
  location: ["FL", "OH"],
  date: Date()
},{
    name: "sandra",
  email: "sandra@gmail.com",
  department: "IT",
  salary: 1500,
  location: ["FL", "OH"],
  date: Date()
},{
    name: "jannadhan",
  email: "jannadhan@gmail.com",
  department: "IT",
  salary: 2000,
  location: ["FL", "OH"],
  date: Date()
},
{
    name: "peter",
  email: "peter@gmail.com",
  department: "mech",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date()
}])