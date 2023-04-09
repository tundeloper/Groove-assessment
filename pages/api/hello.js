// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API_DATA as data } from "../../lib/artiste";
export default async function handler(req, res) {
  const playlists = await data();
  res.status(200).json(playlists);
}
