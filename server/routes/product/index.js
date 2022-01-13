const { Router } = require("express");
const ProductController = require("./controllers/product.controller");

const router = new Router();
const productController = new ProductController();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/:id/edit", productController.editProductData);
router.delete("/:id/delete", productController.deleteProduct);
router.get("/:id/comments", productController.getComments);
router.post("/:id/addcomment", productController.addComment);
router.delete("/:id/deletecomment", productController.deleteComment);
router.post("/create", productController.createProduct);

module.exports = router;
