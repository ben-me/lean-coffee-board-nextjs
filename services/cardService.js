import dbConnect from "../dbConnect";
import Card from "../models/Card";

export default async function getAllCards() {
  await dbConnect();
  const cards = await Card.find();
  const cardArray = cards.map(({ id, name, text }) => {
    return { id, name, text };
  });
  return cardArray;
}
