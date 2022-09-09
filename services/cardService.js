import dbConnect from "../dbConnect";
import Cards from "../models/cards";

export default async function getAllCards() {
  await dbConnect();
  const cards = await Cards.find();
  const cardArray = cards.map(({ id, name, text }) => {
    return { id, name, text };
  });
  return cardArray;
}
