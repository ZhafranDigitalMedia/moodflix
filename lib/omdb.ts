import Papa from "papaparse";

export const fetchMovies = async (
  query: string,
  rating: number
) => {
  try {
    const res = await fetch(
      "/data/imdb_top_1000.csv"
    );

    const csvText = await res.text();

    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    const movies = parsed.data as any[];

    console.log(
      "First Movie Data:",
      movies[0]
    );

    console.log(
      "Total Movies:",
      movies.length
    );

    if (!movies || movies.length === 0) {
      return [];
    }

    if (!query || query.trim() === "") {
      return movies.filter(
        (movie) =>
          parseFloat(
            movie.IMDB_Rating || "0"
          ) >= rating
      );
    }

    const filteredMovies = movies.filter(
      (movie) => {
        const genre = String(
          movie.Genre || ""
        ).toLowerCase();

        const title = String(
          movie.Series_Title || ""
        ).toLowerCase();

        const imdbRating = parseFloat(
          movie.IMDB_Rating || "0"
        );

        const searchQuery =
          query.toLowerCase();

        return (
          (genre.includes(searchQuery) ||
            title.includes(
              searchQuery
            )) &&
          imdbRating >= rating
        );
      }
    );

    console.log(
      "Query:",
      query
    );

    console.log(
      "Filtered Movies:",
      filteredMovies.length
    );

    return filteredMovies;
  } catch (error) {
    console.log(
      "Fetch Movies Error:",
      error
    );

    return [];
  }
};