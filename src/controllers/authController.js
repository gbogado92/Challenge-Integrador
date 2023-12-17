//const fs = require('fs')// Por si necesito un leer un FileSystem
module.exports ={

    login: (req, res) => {
        res.render('./../views/admin/login')
        },

    postLogin: function(req, res){
        console.log(req.body) //repuestas del formulario
        res.send(`<h1> El usuario se creo correctamente ${req.body.nombre} </h1>
                <a href="./../views/admin/admin"> Ir a la pagina principal de administracion</a>`)
            },

    edit: (req, res) => {
        res.render('./../views/admin/edit')
        },

    postEdit: function(req, res){
    console.log(req.body) //repuestas del formulario
    res.send(`<h1> El producto se edito correctamente ${req.body.nombre} </h1>
            <a href="./../views/admin/admin"> Ir a la pagina principal de administracion</a>`)
        },

    logout: (req, res) => {
        res.render('./../views/admin/login')
        }    

}