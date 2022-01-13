const sequelize = require("sequelize");

const { Products, Comments } = require("../../../database/models");

class ProductController {
  getProducts = async (req, res) => {
    const products = await Products.findAll();
    res.json({ products });
  };

  getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    res.send({ product });
  };

  createProduct = async (req, res) => {
    const productData = req.body;
    try {
      await Products.create({
        name: productData.name,
        image_url: productData.image_url,
        count: productData.count,
        description: productData.description,
        weight: productData.weight,
        size: productData.size,
      });
      const products = await Products.findAll();
      res.send({ products });
    } catch (error) {
      res.send({
        error: true,
        message: error.name,
      });
    }
  };

  editProductData = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    await Products.update(
      { ...newData },
      {
        where: {
          id,
        },
      }
    );
    const products = await Products.findAll();
    res.send({ products });
  };

  deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Products.destroy({
      where: {
        id,
      },
    });
    const products = await Products.findAll({});
    res.send({
      products,
    });
  };

  getComments = async (req, res) => {
    const { id } = req.params;
    const comments = await Comments.findAll({
      where: {
        product_id: id,
      },
    });
    res.send({ comments });
  };

  addComment = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    console.log("product", id, description);

    const product = await Comments.findOne({ where: { product_id: id } });
    console.log("product", product);
    if (product) {
      await Comments.create({
        product_id: id,
        description,
      }).catch((error) => console.error("error here", error));
      const comments = await Comments.findAll();

      res.send({ comments });
    } else {
      res
        .status(404)
        .send({ error: true, message: "product with such id doesn't exist" });
    }
  };

  deleteComment = async (req, res) => {
    const { id } = req.params;
    const { comment_id } = req.body;
    await Comments.destroy({
      where: {
        id: comment_id,
        product_id: id,
      },
    });
    const comments = await Comments.findAll();

    res.send({ comments });
  };
}

module.exports = ProductController;
