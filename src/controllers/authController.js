const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { validationResult } = require('express-validator')
dotenv.config()
const {addUserFromDB, getUserByEmailFromDB} = require('../models/users')

module.exports ={

    login: (req, res) => {res.render('admin/login.ejs',
    { 
        title: 'Iniciar Sesión | Funkoshop',
        msg: req.query.msg
    })},

    postLogin: async(req, res) => { 
        try {
            const {email, password} = req.body;
            const user = await getUserByEmailFromDB(email);
            const passwordAdmin = process.env.PASSWORD_ADMIN;

            if(user && Object.keys(user).length > 1 && user.password == password && user.password == passwordAdmin){

                req.session.esAdmin = true;
                res.redirect('/admin');
            }else if(user && Object.keys(user).length > 1 && user.password == password){
                req.session.esAdmin = false;
                res.redirect('/');
            }else{
                res.redirect('/auth/login');
            }
        } catch (error) {
            console.log(error);
        }
    },

    register: (req, res) => { 
        res.render('admin/createUser.ejs', {
            title: "Registro | FunkoShop",
            errores: [],
            valores: req.body
        })
    },

    postRegister: async(req, res) => { 
        const errors = validationResult(req);

        if (!errors.isEmpty()){ 
            res.render('admin/createUser.ejs', {
                title: 'Registro | FunkoShop',
                errores: errors.array(),
                valores: req.body
            })
        }
        else{
        try {
            const userData = req.body;
            await addUserFromDB(userData);
            let msg = 'Usuario creado! Inicia sesión para continuar';
            res.redirect(`/auth/login/?msg=${msg}`);
        } catch (error) {
        }
    }
},

    logout: (req, res) => {
        res.render('./../views/admin/login')
        }    

}