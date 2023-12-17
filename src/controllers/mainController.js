//const fs = require('fs')// Por si necesito un leer un FileSystem
module.exports ={

    inicio: (req, res) => {
        res.send(`<h1>Esta es nuestra página FUNKO</h1>
                <a href="/home"> Vamos a la página principal</a>`)
        },

    home: (req, res) => {
        res.render('index')
        },

    contact: (req, res) => {
        res.render('contacto')
        },

    about: (req, res) => {
        res.render('index')
        },

    faqs: (req, res) => {
        res.render('index')
        },


    // postHome: function(req, res){
    //     console.log(req.body) //repuestas del formulario
    //     res.send(`<h1> Se procesó el formulario con el dato ${req.body.nombre} </h1>
    //             <a href="/home"> Ir a la pagina principal</a>`)
    //      },

    // putHome:(req, res) => {
    //     res.send('<h1>usamos method override</h1>')
    // },
}