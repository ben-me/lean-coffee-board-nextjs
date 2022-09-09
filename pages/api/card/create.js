import dbConnect from "../../../dbConnect";
import Cards from "../../../models/cards";

export default async function create(request, response) {
  await dbConnect();
  try {
    if (request.method === "POST") {
      Cards.insertMany(request.body);
      response.status(201).json("added Card!");
    }
  } catch (error) {
    console.log("Failed to add Card");
    console.error(error);
  }
}
