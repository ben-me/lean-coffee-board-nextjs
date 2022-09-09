import dbConnect from "../../../dbConnect";
import Card from "../../../models/Card";

export default async function create(request, response) {
  await dbConnect();
  try {
    if (request.method === "POST") {
      Card.create(request.body);
      response.status(201).json("added Card!");
    }
  } catch (error) {
    console.log("Failed to add Card");
    console.error(error);
  }
}
