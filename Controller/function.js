const Task = require("../Database/Model")
const register = async(req,res)=>{
   const task = await Task.create(req.body);
   console.log(task);
   res.send("<h1>Register the user successfully.....!</h1>")
}

const login = async(req,res)=>{
    const {username,password} = req.body;
    const task = await Task.find({username})
    console.log(task)
    if(username == task[0].username && password == task[0].password){
        res.send("<h1>User has successfully Login</h1>");
    }
    else{
        res.status(404).send("user not found");
    }

}

const forgot = async(req,res)=>{
    const {username,password} = req.body;
    const task = await Task.findOneAndUpdate({ username: username }, {password:password}, {
        new: true,
        runValidators: true,
      })
      res.status(200).send(`<h1>Your new password is ${task.password}`)
      res.json(task);
}

module.exports = {register,login,forgot};