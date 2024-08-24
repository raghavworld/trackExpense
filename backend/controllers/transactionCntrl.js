 const asyncHandler = require("express-async-handler");

const Transaction = require("../model/Transaction");
const Category = require("../model/Category");
const User = require("../model/User");

const TransactionControl = {
  //! Add
  create: asyncHandler(async (req, res) => {
    console.log(req.body);

    const { type, amount, category } = req.body;

    if (!amount || !type || !category) {
      throw new Error("All fields are mandatory");
    }
    console.log(req.user?.id, category.toLowerCase());

    const categoryFound = await Category.find({
      user: req.user?.id,
      name: category,
    });
    const categoryName = categoryFound[0];

    console.log("categoryName:", categoryName);

    if (!categoryName) {
      throw new Error("Category NAme does not exist");
    }

    const transaction = await Transaction.create({
      name: category,
      user: req.user?.id,
      type,
      amount,
      category: categoryName?._id,
    })
      .then((data) => {
        console.log("Transaction created successfully: ", data);

        res.json({
          message: "Transaction created successfully",
          data,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }),

  //! list
  list: asyncHandler(async (req, res) => {
    
    
    const { start, end, name, amountgt, amountlt, type } = req.query;
    if (!req.user?.id) {
      throw new Error("Some error occured while fetching list");
    }
    filters = {
      user: req.user?.id, //?user ID
    };
    if (start) {
      filters.date = { $gte: new Date(start) };
    }
    if (end) {
      filters.date = { $lte: new Date(end) };
    }
    if (name) {
      filters.name = name;
    }
    if (amountgt) {
      filters.amount = { $gte: amountgt };
    }
    if (amountlt) {
      filters.amount = { $lte: amountlt };
    }
    if (type) {
      filters.type = type;
    }
    console.log(filters);

    const listTransac = await Transaction.find(filters).sort(); //? Filters Transaction
    res.json(listTransac);
  }),

  //! Update
  update: asyncHandler(async (req, res) => {
    const transId = req.params.id;
    const { name, amount, type } = req.body;
    const transUpdate = await Transaction.findById(transId); //?Find Transaction id and update
    const userExists =
      transUpdate.user.toString() === req.user?.id ? req.user?.id : null; //? USer match FOund
    if (!userExists || !transUpdate) {
      throw new Error("Invalid transaction update request");
    } else {
      transUpdate.name = name ? name : transUpdate.name;
      transUpdate.amount = amount ? amount : transUpdate.amount;
      transUpdate.type = type ? type : transUpdate.type;
    }
    const updateTrans = await transUpdate.save();
    console.log(updateTrans);
  }),

  //! Delete
  delete: asyncHandler(async (req, res) => {
    const tranId = req.params.id;
    const transdel = await Transaction.deleteOne({
      user: req.user?.id,
      _id: tranId,
    });
    console.log(transdel);
    res.json({
      messgage: "Transaction deleted successfully",
      data: transdel,
    });
  }),
};
module.exports = TransactionControl;
