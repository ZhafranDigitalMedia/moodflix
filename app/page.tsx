"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoodSelector from "@/components/MoodSelector";
import SearchFilter from "@/components/SearchFilter";
import MovieCard from "@/components/MovieCard";

import { moods } from "@/data/moods";
import { fetchMovies } from "@/lib/omdb";

export default function Home() {
  const [selectedMood, setSelectedMood] =
    useState(moods[0]);

  const [movies, setMovies] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [rating, setRating] = useState(7);

  const handleFetch = async () => {
    try {
      setLoading(true);

      const movieData =
        await fetchMovies();

      setMovies(movieData.slice(0, 20));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-[#0b1026] to-[#6a11cb] text-white">
      <Navbar />

      <Hero />

      <MoodSelector
        moods={moods}
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />

      <SearchFilter
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={setRating}
        onSearch={handleFetch}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h3 className="text-3xl font-bold">
            Rekomendasi Film
          </h3>

          <p className="text-gray-300">
            {movies.length} film ditemukan
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-2xl font-bold">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
            {movies.map(
              (movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                />
              )
            )}
          </div>
        )}
      </section>
    </main>
  );
}