import Papa from "papaparse";

export const fetchMovies = async () => {
  try {
    const res = await fetch(
      "/data/imdb_top_1000.csv"
    );

    console.log("Response:", res);

    const csvText = await res.text();

    console.log(
      "CSV Length:",
      csvText.length
    );

    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    console.log(
      "Parsed:",
      parsed.data
    );

    return parsed.data;
  } catch (error) {
    console.log("ERROR:", error);

    return [];
  }
};