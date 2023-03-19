import type { NextApiRequest, NextApiResponse } from "next";
import { getAllCountries } from "services/getAllCountries";
import { CountryOverview } from "types/CountryOverview";

type Data = { data: CountryOverview[] } | { error: unknown };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(401).end();
  }

  try {
    const data = await getAllCountries({});

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
}
