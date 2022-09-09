import mongoose from "mongoose";
const { Scheme } = mongoose;

const cardScheme = new Scheme({
  name: { type: String, required: true },
  text: { type: String, required: true },
});

const Cards = mongoose.models.Cards || mongoose.model("Cards", cardScheme);

export default Cards;
