const pool = require("../config/db");

module.exports = {
  admin: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(
        "SELECT product_id, sku, product_name, licence_id FROM product"
      );
      res.render("admin/admin", { title: "Admin | Funkoshop", data: rows });
    } catch (error) {
      console.error("Error al obtener datos de la base de datos:", error);
      res.status(500).send("Error al obtener los datos de la base de datos");
    }
  },

  create: (req, res) => {
    res.render("./../views/admin/createProduct");
  },

  postCreate: async (req, res) => {
    try {
      console.log(req.body);
      res.send(`<h1> El producto se creó correctamente ${req.body.nombre} </h1>
                <a href="./../views/admin/admin"> Ir a la pagina principal de administracion</a>`);
    } catch (error) {
      console.error("Error al crear el producto en la base de datos:", error);
      res.status(500).send("Error al crear el producto en la base de datos");
    }
  },

  edit: async (req, res) => {
    try {
      const idParam = parseInt(req.params.id);
      const [rows, fields] = await pool.query(
        "SELECT product_id, sku, product_name, licence_id FROM product WHERE product_id = ?",
        [idParam]
      );
      const item = rows[0];
      res.render("admin/edit", {
        view: { title: "Item | Funkoshop" },
        item: item,
      });
    } catch (error) {
      console.error("Error al obtener el producto de la base de datos:", error);
      res.status(500).send("Error al obtener el producto de la base de datos");
    }
  },

  putId: (req, res) => {
    res.send("<h1>Usamos method override</h1>");
  },

  deleteId: async (req, res) => {
    try {
      res.render("./../views/admin/admin");
    } catch (error) {
      console.error(
        "Error al eliminar el producto de la base de datos:",
        error
      );
      res.status(500).send("Error al eliminar el producto de la base de datos");
    }
  },
};
