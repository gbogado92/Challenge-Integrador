const Utilities = require("../utilities/fs.js")
const { unlink } = require("fs")
const {
    getAllFunkosFromDB,
    getFunkoFromDB,
    addFunkoFromDB,
    deleteFunkoFromDB,
    updateFunkoFromDB,
} = require("../models/model.js");
const { getAllLicencesFromDB } = require("../models/licence.js")
const { getAllCategoriesFromDB } = require("../models/category.js")

module.exports ={

    admin: async (req, res) => {
        try {
            const response = await getAllFunkosFromDB();
            res.render("admin/admin", {
                title: "Panel de administración | FunkoShop",
                listaFunkos: response,
            });
        } catch (error) {
                   }
    },

    create: async (req, res) => {
        try {
            const responseLicence = await getAllLicencesFromDB();
            const responseCategory = await getAllCategoriesFromDB();
            res.render("admin/create", {
                title: "Agregar producto | FunkoShop",
                licences: responseLicence,
                categories: responseCategory,
            });
        } catch (error) {
           
        }
    },

    postCreate: async (req, res) => {
        const funkoData = req.body;
        funkoData.image_front = `/storage/${req.files["image_front"][0].filename}`;
        funkoData.image_back = `/storage/${req.files["image_back"][0].filename}`;
        try {
            // funkoData.image_front = `/${req.file.filename}`
            // funkoData.imagen_back =
            await addFunkoFromDB(funkoData);
            res.redirect("/admin");
        } catch (error) { }
    },

    edit: async (req, res) => {
        try {
            const id = req.params.id;
            const responseFunko = await getFunkoFromDB(id);
            const responseLicence = await getAllLicencesFromDB();
            const responseCategory = await getAllCategoriesFromDB();
            res.render("admin/edit", {
                title: `Editar producto: ${responseFunko.product_name} | FunkoShop`,
                funko: responseFunko,
                licences: responseLicence,
                categories: responseCategory,
            });
        } catch (error) {
           
        }
    },

    postId: async (req, res) => {
        try {

            const id = req.params.id;
            const imgAntFunko = await getFunkoFromDB(id);
            const funkoData = req.body;
            if (req.files && Object.keys(req.files).length > 0) {

                if (req.files.image_front !== undefined) {
                    funkoData.image_front = `/storage/${req.files.image_front[0].filename}`;
                    unlink(`public/img/${imgAntFunko.image_front}`, (err) => {
                        if (err) {
                            console.log("Ocurrio un error al eliminar la imagen front");
                            return;
                        }
                    });
                }
                if (req.files.image_back !== undefined) {
                    funkoData.image_back = `/storage/${req.files.image_back[0].filename}`;
                    unlink(`public/img/${imgAntFunko.image_back}`, (err) => {
                        if (err) {
                            console.log("Ocurrio un error al eliminar la imagen back");
                            return;
                        }
                    });
                }

            } else {
                funkoData.image_front = imgAntFunko.image_front;
                funkoData.image_back = imgAntFunko.image_back;
            }
            await updateFunkoFromDB(funkoData, id);
            res.redirect("/admin");
        } catch (error) {
           
        }
    },
    deleteId: async (req, res) => {
        const id = req.params.id;
        try {
            const response = await getFunkoFromDB(id);
            res.render("admin/delete", {
                title: `Eliminar producto: ${response.product_name} | FunkoShop`,
                funko: response,
            });
        } catch (error) {
           
        }
    },    

}