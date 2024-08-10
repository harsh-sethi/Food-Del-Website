import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  image: {type: String, required: true},
  category: {type: String, required: true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)
// if (mongoose.models.food) is present, then it will be used, else new model will be created

export default foodModel;