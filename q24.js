//login into replica set

//created hdfcbank 
//inserted customer details

//transaction steps
const session=db.getMongo().startSession()
session.startTransaction()
var custCollection=session.getDatabase("hdfcbank").customers
custCollection.updateOne({_id:"c1"},{$inc:{balance:-100}})
custCollection.updateOne({_id:"c2"},{$inc:{balance:100}})
session.commitTransaction()
session.endSession()

db.customers.find()