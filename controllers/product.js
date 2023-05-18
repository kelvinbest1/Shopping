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
