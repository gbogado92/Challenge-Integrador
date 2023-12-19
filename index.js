const express = require('express')
const path = require('path')
// const color = require ('colors')
const dotenv = require('dotenv')
const session = require('express-session')
const override = require('method-override')

dotenv.config()


const app = express() //ejecuto el modulo

const mainRoute = require('./src/routes/mainRoute.js')
const shopRoute = require('./src/routes/shopRoute.js')
const adminRoute= require('./src/routes/adminRoute')
const authRoute = require('./src/routes/authRoute.js')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'))

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded())
app.use(express.json())
app.use(override('_method')) //sobreescribir metodos
app.use(session({
        secret:process.env.SECRET_KEY,
        name: 'cookie session',
        resave: false,
        saveUninitialized: false,
        cookie:{maxAge:12340000}
    })) // cookie para reconocimiento de usuario
    

app.use('/', mainRoute)
app.use('/shop', shopRoute)
app.use('/admin', adminRoute)
app.use('/auth', authRoute)

app.use((req, res, next) => {
        res.status(404).render(`404`)
})

const port = process.env.PORT || 3000


app.listen(port, () => {
        console.log(`El server ésta funcionando en localhost:${port}`)
})


