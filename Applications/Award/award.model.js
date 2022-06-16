'use strict';

 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 
 const AwardSchema = new Schema(
   {
     name: {
       type: String,
       required: [true, "First Name is Required"],
     },
     type: {
       type: String,
       required: [true, "Type is Required"],
       enum: ["voucher", "product", "giftcard"]
     },
     point: {
       type: Number,
       required: [true, "Point is Required"],
     },
     images: {
        type: String,
        required: [false],
      },
 
     // flag
     isDelete: {
       type: Boolean,
       required: [false],
       default: false,
     },
   },
   { collection: "awards" }
 );
 
 const Award = mongoose.model("Award", AwardSchema);
 module.exports = Award;
 