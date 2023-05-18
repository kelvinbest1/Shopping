const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDeatils,
} = require("../controllers/product");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct);

router.route("/product/:id").get(getProductDeatils);

module.exports = router;