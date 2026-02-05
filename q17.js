//use lms

//users collection
db.users.insertOne([{
  _id: "u1",
  name: "Rahul Dev",
  email: "rahul@gmail.com",
  password: "1234",
  role: "student", // student | instructor | admin
},
{
 _id: "u2",
  name: "vishnu",
  email: "vishnu@gmail.com",
  password: "1234",
  role: "student", 
},
{
 _id: "u3",
  name: "santo",
  email: "santo@gmail.com",
  password: "1234",
  role: "student", 
},
{
 _id: "u4",
  name: "abhinav",
  email: "abhinav@gmail.com",
  password: "1234",
  role: "student",
},
]);













db.users.insertOne({
  _id: "u5",
  name: "Aryan",
  email: "aryan@gmail.com",
  password: "1234",
  role: "instructor", 
},
{
  _id: "u6",
  name: "vishal",
  email: "vishal@gmail.com",
  password: "1234",
  role: "instructor", 
},
{
  _id: "u7",
  name: "athul",
  email: "athul@gmail.com",
  password: "1234",
  role: "instructor", 
}
);






db.users.insertOne({
  _id: "u6",
  name: "admin",
  email: "admin@gmail.com",
  password: "1234",
  role: "admin", 
});





//course collection
db.courses.insertOne({
  _id: "c1",
  title: "MongoDB for Beginners",
  description: "Learn MongoDB from scratch",
  instructorId: "u5",
  price: 1999,
});

db.courses.insertOne({
  _id: "c2",
  title: "Nodejs for Beginners",
  description: "Learn Nodejs",
  instructorId: "u6",
  price: 2000,
});

db.courses.insertOne({
  _id: "c3",
  title: "Nodejs for Beginners",
  description: "Learn Nodejs",
  instructorId: "u7",
  price: 2000,
});


//modules collection
db.modules.insertOne({
  _id: "m1",
  courseId: "c1",
  title: "Introduction to MongoDB",
  order: 1,
});

db.modules.insertOne({
  _id: "m2",
  courseId: "c1",
  title: "CRUD Operation",
  order: 2,
});

db.modules.insertOne({
  _id: "m3",
  courseId: "c1",
  title: "Aggregate Pipelines",
  order: 3,
});




db.modules.insertOne({
  _id: "m4",
  courseId: "c2",
  title: "Introduction to nodejs",
  order: 1,
});

db.modules.insertOne({
  _id: "m5",
  courseId: "c2",
  title: "CRUD Operation in nodejs",
  order: 2,
});

db.modules.insertOne({
  _id: "m6",
  courseId: "c2",
  title: "advanced nodejs",
  order: 3,
});




db.modules.insertOne({
  _id: "m7",
  courseId: "c3",
  title: "Introduction to reactjs",
  order: 1,
});

db.modules.insertOne({
  _id: "m8",
  courseId: "c3",
  title: "reactjs basic",
  order: 2,
});

db.modules.insertOne({
  _id: "m9",
  courseId: "c3",
  title: "reactjs advanced",
  order: 3,
});

//lesson collection
db.lessons.insertOne({
  _id: "l1",
  moduleId: "m1",
  title: "What is MongoDB?",
  description: "MongoDB is a document database.",
  order: 1,
});

db.lessons.insertOne({
  _id: "l2",
  moduleId: "m4",
  title: "What is nodejs?",
  description: "nodejs for web development.",
  order: 1,
});

db.lessons.insertOne({
  _id: "l3",
  moduleId: "m7",
  title: "What is reactjs?",
  description: "reactjs for web development.",
  order: 1,
});


//enrollment collection
db.enrollments.insertOne({
  studentId: "u1",
  courseId: "c1",
});

db.enrollments.insertOne({
  studentId: "u2",
  courseId: "c2",
});

db.enrollments.insertOne({
  studentId: "u3",
  courseId: "c3",
});

//lesson progress collection
db.lessonProgress.insertOne({
  studentId: "u1",
  lessonId: "l1",
  isCompleted: true,
});

db.lessonProgress.insertOne({
  studentId: "u2",
  lessonId: "l2",
  isCompleted: true,
});

db.lessonProgress.insertOne({
  studentId: "u3",
  lessonId: "l3",
  isCompleted: true,
});

//quizzes collection
db.quizzes.insertOne({
  _id: ObjectId(),
  lessonId: "l1",
  questions: [
    {
      question: "MongoDB is?",
      options: ["SQL DB", "NoSQL DB", "File System"],
      correctAnswer: "NoSQL DB",
    },
  ],
});

db.quizzes.insertOne({
  _id: ObjectId(),
  lessonId: "l2",
  questions: [
  {
  question: "What is React?",
  options: [
    "A frontend JavaScript library",
    "A backend database",
    "An operating system"
  ]
}

,
  ],
});


db.quizzes.insertOne({
  _id: ObjectId(),
  lessonId: "l3",
  questions: [
  {
  question: "What is Node.js?",
  options: [
    "A frontend JavaScript library",
    "A backend JavaScript runtime",
    "A database system"
  ],
  correctAnswer: "A backend JavaScript runtime"
}

,
  ],
});


//report

db.courses.aggregate([
    {$lookup:{


    }}
])

db.courses.aggregate([
    {$lookup:{
        from:"modules",
        localField:"_id",
        foreignField:"courseId",
        as:"modules"
    }},
    {$unwind:"$modules"},
    {$project:{
        _id:0,
       coursename:"$title",
       moduleName:"$modules.title"
    }}
])



db.enrollments.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "studentId",
      foreignField: "_id",
      as: "users"
    }
  },
  { $unwind: "$users" },

  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courses"
    }
  },
  { $unwind: "$courses" },

  {
    $project: {
      _id: 0,
      studentName: "$users.name",
      courseName: "$courses.title"
    }
  }
]);


db.entrollments.insertOne({studentId:"u4",courseId:"c1"})

db.enrollments.aggregate([
  {
    $group: {
      _id: "$courseId",
      totalStudents: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "courses",
      localField: "_id",
      foreignField: "_id",
      as: "course"
    }
  },
  { $unwind: "$course" },
  {
    $project: {
      _id: 0,
      courseId: "$_id",
      courseName: "$course.title",
      totalStudents: 1
    }
  }
]);


//user interfaces
//ahtul@gmail.com,1234
db.users.find({email:"athul@gmial.com",password:1234})


//display all courses
db.courses.find()

//show all modules od c1
db.modules.find({courseId:"c1"})

//show all lessons of m1
db.lessons.find({moduleId:'m1'})

//enroll u1 to c1

db.enrollments.insertOne({
    courseId:'c1',
    studentId:'u1'
})

//mark l1 complete when u1 hits complete button
db.lessonProgress.insertOne({
    studentId:'u1',
    lessonId:'l1',
    isCompleted:true
})

//check whether l1 is completed or not

db.lessonProgress.find({
    lessonId:'l1',studentId:'u1'
})

//change password
db.users.updateOne({_id:"u1"},{$set:{password:"abc"}})

//hsow profile details
db.users.find({_id:'u1'})

//admin interfaces
//users CRUD
//courses CRUD
//modules CRUD