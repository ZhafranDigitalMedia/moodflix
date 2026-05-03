import { Search } from "lucide-react";

interface SearchFilterProps {
  search: string;
  setSearch: (value: string) => void;
  rating: number;
  setRating: (value: number) => void;
  onSearch: () => void;
}

export default function SearchFilter({
  search,
  setSearch,
  rating,
  setRating,
  onSearch,
}: SearchFilterProps) {
  return (
    <section className="px-6 md:px-10 mt-10">
      <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md border border-white/10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block mb-3 text-xl font-semibold">
              Cari Film
            </label>

            <div className="flex items-center bg-purple-900/40 rounded-2xl px-4 border border-white/10">
              <Search size={20} />

              <input
                type="text"
                placeholder="Masukkan judul film..."
                className="w-full bg-transparent p-4 outline-none text-white placeholder:text-gray-400"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <button
              onClick={onSearch}
              className="mt-4 bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl font-semibold"
            >
              Cari
            </button>
          </div>

          <div>
            <label className="block mb-3 text-xl font-semibold">
              Rating Minimum: {rating}.0 ⭐
            </label>

            <input
              type="range"
              min="5"
              max="9"
              step="0.1"
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
              className="w-full cursor-pointer"
            />

            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>5.0</span>
              <span>9.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}