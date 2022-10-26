import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Photography } from "../../typings";

const query = groq`
    *[_type == "photography"][0] 
`;

type Data = {
  photos: Photography;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const photos: Photography = await sanityClient.fetch(query);
  res.status(200).json({ photos });
}
