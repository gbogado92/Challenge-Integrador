const fs = require('fs')// Por si necesito un leer un FileSystem
const data = JSON.parse(fs.readFileSync("./src/fileJson/data.json", "utf8"));
module.exports ={

    admin: (req, res) => {res.render('admin/admin', {title: "Admin | Funkoshop", data:data})},

    create: (req, res) => {
        res.render('./../views/admin/createProduct')
        },

    postCreate: function(req, res){
             console.log(req.body) //repuestas del formulario
             res.send(`<h1> El producto se cre correctamente ${req.body.nombre} </h1>
                     <a href="./../views/admin/admin"> Ir a la pagina principal de administracion</a>`)
                 },

    edit: (req, res) => {
    
        const idParam = parseInt(req.params.id);
        const item = data.find(item => item.product_id === idParam);
    
        res.render('admin/edit', {view: {title: "Item | Funkoshop"},
                    item: item,
            });
    
        },

    putId: (req, res) => {
        res.send('<h1>usamos method override</h1>')
        //editParams
        },

    deleteId: (req, res) => {
        res.render('./../views/admin/admin')
        },    

}