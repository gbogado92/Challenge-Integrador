const fs = require('fs')// Por si necesito un leer un FileSystem
const data = JSON.parse(fs.readFileSync("./src/fileJson/data.json", "utf8"));

module.exports ={

    login: (req, res) => {res.render('../views/admin/login.ejs',
    { 
        title: 'Iniciar Sesión | Funkoshop',
        msg: req.query.msg
    })},

    postLogin: function(req, res){
        console.log(req.body) //repuestas del formulario
        res.send(`<h1> El usuario se creo correctamente ${req.body.nombre} </h1>
                <a href="./../views/admin/admin"> Ir a la pagina principal de administracion</a>`)
            },

    register: (req, res) => {
        res.render('../views/admin/createUser.ejs')
        },

    postRegister: function(req, res){
    console.log(req.body) //repuestas del formulario
    res.send(`<h1> El producto se edito correctamente ${req.body.nombre} </h1>
            <a href="./../views/admin/admin"> Ir a la pagina principal de administracion</a>`)
        },

    logout: (req, res) => {
        res.render('./../views/admin/login')
        }    

}
