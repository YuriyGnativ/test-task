const { Router } = require("express");
const ProductController = require("./controllers/product.controller");

const router = new Router();
const productController = new ProductController();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/:id/edit", productController.editProductData);
router.delete("/:id/delete", productController.deleteProduct);
router.post("/:id/addcomment", productController.addComment);
router.post("/create", productController.createProduct);

module.exports = router;
