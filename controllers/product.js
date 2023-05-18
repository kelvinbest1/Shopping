const Product = require("../models/Project");
const ErrorHander = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAcyncError");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

createProduct = catchAsyncError(async (req, res, next) => {

    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  });

  getAllProducts = catchAsyncError(async (req, res) => {
    const productsCount = await Product.countDocuments();
    const resultsPerPage = 8;
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resultsPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
      success: true,
      products,
      productsCount,
      resultsPerPage,
    });
  });
