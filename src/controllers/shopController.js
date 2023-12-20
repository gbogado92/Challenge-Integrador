//const fs = require('fs')// Por si necesito un leer un FileSystem
module.exports ={

    shop: (req, res) => {
        res.render('./../views/shop/shop')
        },

    id: (req, res) => {
        res.render('./../views/shop/item')
        },

    postAdd: function(req, res){
             console.log(req.body) //repuestas del formulario
                res.send(`<h1> Se agrego el Item con éxito ${req.body.nombre} </h1>
                     <a href="/src/views/index"> Ir a página de administración</a>`)
              },

    cart: (req, res) => {
        res.render('./../views/shop/carrito')
        },

    postCart: function(req, res){
            console.log(req.body) //repuestas del formulario
            res.send(`<h1> El pago se genero ${req.body.nombre} </h1>
                <a href="/home"> Ir a página principal</a>`)
         },
}
