import dbConnect from "../../../dbConnect";
import getAllCards from "../../../services/cardService";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const cardList = await getAllCards();
      console.log(cardList);
      return response.status(200).json(cardList);
    }
  } catch (error) {
    console.log("Could not get new list");
    console.error(error);
  }
}
