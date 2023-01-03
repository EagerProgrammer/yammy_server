const {User} = require('../../models');

const Login = {
getLogin: (req, res) => {
    res.status(200).json({ result: "success" });
    res.senFile()
},
postLogin: (req, res) =>{
    let id = req.body.id;
    let password = req.body.password;
    if(err) throw err;
    else{
        if(id.length == 0 && password.length == 0){
            res.redirect("/login");
        }
        else if()
    }
}


}