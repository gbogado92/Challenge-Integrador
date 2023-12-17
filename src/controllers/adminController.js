//const fs = require('fs')// Por si necesito un leer un FileSystem
module.exports ={

    admin: (req, res) => {
        res.render('./../views/admin/admin')
        },

    create: (req, res) => {
        res.render('./../views/admin/createProduct')
        },

    postCreate: function(req, res){
             console.log(req.body) //repuestas del formulario
             res.send(`<h1> El producto se cre correctamente ${req.body.nombre} </h1>
                     <a href="./../views/admin/admin"> Ir a la pagina principal de administracion</a>`)
                 },

    edit: (req, res) => {
        res.render('./../views/admin/edit')
        },

    putId: (req, res) => {
        res.send('<h1>usamos method override</h1>')
        //editParams
        },

    deleteId: (req, res) => {
        res.render('./../views/admin/admin')
        },    

}