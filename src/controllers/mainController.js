const { getAllFunkosFromDB } = require('../models/model.js')

module.exports ={

    inicio: (req, res) => {
        res.send(`<h1>Esta es nuestra página FUNKO</h1>
                <a href="/home"> Vamos a la página principal</a>`)
        },

    home: async (req, res) => {
        try {
            const funkos = await getAllFunkosFromDB();
            res.render('index.ejs',
                {
                    title: 'Home | Funkoshop',
                    funkos
                })
        } catch (error) {

        }
    },

    contact: (req, res) => {
        res.render('contacto',
            {
                title: 'Contacto | Funkoshop',
                content: 'Ruta para la vista de contacto'
            })
    },

    about: (req, res) => {
        res.render('index')
        },

    faqs: (req, res) => {
        res.render('index')
        },


}