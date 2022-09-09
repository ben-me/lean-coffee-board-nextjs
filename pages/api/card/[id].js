import dbConnect from "../../../dbConnect";
import Card from "../../../models/Card";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(id);
  try {
    if (request.method === "DELETE") {
      await Card.findByIdAndDelete(id);
      response.status(200).json("Deleted Card.");
    }
  } catch (error) {
    console.log("Could not delete card.");
    console.error(error);
  }
}
