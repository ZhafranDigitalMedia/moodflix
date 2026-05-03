import Papa from "papaparse";

export const fetchMovies = async (
  query: string,
  rating: number
) => {
  const res = await fetch(
    "/data/imdb_top_1000.csv"
  );

  const csvText = await res.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const movies = parsed.data as any[];

  const filteredMovies = movies.filter(
    (movie) => {
      const genre =
        movie.Genre?.toLowerCase() || "";

      const title =
        movie.Series_Title?.toLowerCase() ||
        "";

      const imdbRating = parseFloat(
        movie.IMDB_Rating || "0"
      );

      return (
        (genre.includes(query.toLowerCase()) ||
          title.includes(
            query.toLowerCase()
          )) &&
        imdbRating >= rating
      );
    }
  );

  return filteredMovies;
};