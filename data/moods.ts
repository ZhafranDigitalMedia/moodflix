import {
  Smile,
  Frown,
  Flame,
  Zap,
  Clock,
} from "lucide-react";

export const moods = [
  {
    nama: "Bahagia",
    icon: Smile,
    query: "Comedy",
    genres: "Comedy, Romance",
    color: "bg-yellow-500",
  },

  {
    nama: "Sedih",
    icon: Frown,
    query: "Drama",
    genres: "Drama",
    color: "bg-blue-500",
  },

  {
    nama: "Marah",
    icon: Flame,
    query: "Action",
    genres: "Action, Thriller",
    color: "bg-red-500",
  },

  {
    nama: "Stress",
    icon: Zap,
    query: "Family",
    genres: "Family, Comedy",
    color: "bg-purple-500",
  },

  {
    nama: "Bosan",
    icon: Clock,
    query: "Adventure",
    genres: "Adventure, Action",
    color: "bg-green-500",
  },
];