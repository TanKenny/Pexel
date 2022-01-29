import { objectArrays } from "../react-app-env";

type FetchData = (
  setLoading: (loading: boolean) => void,
  queryParam: string
) => objectArrays;

export const fetchData: FetchData = async (setLoading, queryParam = "dog") => {
  try {
    setLoading(true);

    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${queryParam}&per_page=80`,
      {
        //@ts-ignore
        headers: {
          Authorization: process.env.REACT_APP_API_URL,
        },
      }
    );

    if (!res.ok) throw Error("Failed to fetch data");

    const results = await res.json();

    return results;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: `fetchData has failed: (${err.message})`,
      };
    }
  }
};
