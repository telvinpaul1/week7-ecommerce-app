let User = require ('../model/User');

//create signup function
//Your request.body should be an object with email, fullName, password, confirmPassword keys.
const signup = (req, res) =>{
    let newEmail = req.body.email;
    //if email already exist, do not allow signin
    let userEmail = User.find((user)=>user.email === newEmail);
    if(userEmail){
       return res.send('Email already already exist.')
    }
    else if(req.body.password !== req.body.confirmPassword){
        return res.send('Password and confirmPassword does not match.')
    }
    else{
        let newUser ={
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
            confirmPassword: req.body.password
        }
        User.push(newUser);
        return res.json(User)
    }
    

}

//sign-in function
const signin = (req, res) =>{
 let details = {
     email: req.body.email,
     password: req.body.password
 }
 let loginUser = User.find((user) =>{
     if(user.email === details.email && user.password === details.password){
         return user;
     }
 })
  if(!loginUser){
      return res.send('You need to signup in other to login.')
  }
  return res.json(loginUser)
}

module.exports = { signup, signin }