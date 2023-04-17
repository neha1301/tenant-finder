import mongoose from "mongoose";
const { Schema } = mongoose;

const propertySchema = new Schema(
  {
    propertyName: { type: String, required: true },
    propertyType: { type: String, enum: ["PG", "FLAT", "HOSTEL", "APARTMENT"] },
    rent: Number,
    securityDeposit: Number,
    description: String,
    imageList: [String],
    location: {
      // Open in google map
      name: String,
      googleMapLocation: String,
    },
  },
  {
    collection: "properties",
  }
);

const Property = mongoose.model("properties", propertySchema);

module.exports = Property;
