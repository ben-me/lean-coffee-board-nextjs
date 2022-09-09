import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
});

const Cards = mongoose.models.Cards || mongoose.model("Cards", cardSchema);

export default Cards;
