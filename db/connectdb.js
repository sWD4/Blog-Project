const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/blogproject'
const live_url ='mongodb+srv://sshubham2405:shubham1234@cluster0.yjekmrn.mongodb.net/apiecommerce?retryWrites=true&w=majority'
const connectDB=()=>{
    return mongoose.connect(live_url)

.then(()=>{
    console.log("Connected Successfully")
})

.catch((error)=>{
    console.log(error)
})
}

module.exports=connectDB