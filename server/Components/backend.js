const db = require('./db')


const userLogin = (id,pass)=>{
    return db.registration.findOne({user_email:id,user_password:pass}).then(user=>{
        if(user){
            return{
                statusCode:200,
                user:user,
                message:"login successfuly"
            }
        }else{
            return{
                statusCode:404,
                message:"Invalid UserId OR Password"
            }
        }
    })
}

const userRegister = (id,name,email,prof,contact,profile,password,day)=>{
    return db.registration.findOne({user_id:id}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"user already exist"
            }
        }else{

            const newUser = new db.registration({
                user_id:id,
                user_name:name,
                user_email:email,
                user_profession:prof,
                user_contact:contact,
                user_profile:profile,
                user_password:password,
                user_date:day
            })
            newUser.save()
            return{
                statusCode:200,
                message:"User registerd"
            }
        }
    })
}


// Get Single user Data
const getuser = (id)=>{
    return db.registration.findOne({user_id:id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                user:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"employee not present"
            }
        }
    })
}

const edituser = (id, name, email, prof, contact,password,day)=> {
    return db.registration.findOne({user_id:id}).then(result => {
        if (result) {
            result.user_id = id
            result.user_name = name
            result.user_email = email
            result.user_profession = prof
            result.user_contact = contact
            result.user_password = password
            result.user_date = day

            result.save()
            return {
                statusCode: 200,
                message: 'Employee data updated'
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'Employee not present'
            }
        }
    })
}

const question = (id,name,question,uimg,date)=>{
    return db.question.insertMany({id,name,question,img:uimg,date}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"add question"
            }
        }else{

            return{
                statusCode:404,
                message:"faild"
            }
        }
    })
}
// Get ueser questions
const getQuestion = ()=>{
    return db.question.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                user:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"not available questions"
            }
        }
    })
}
module.exports={
    userRegister,userLogin,getuser,edituser,question,getQuestion
}