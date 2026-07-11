import film from "../data/films.json";
import { MovieCard } from "../features/streaming/MovieCard";
import { NavBar } from "../components/NavBar";
import { useState } from "react";

export const HomePage = () => {
  const [tapInput, setTapInput] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const movieFilter = film.filter((m) =>
    m.nom
      .toLocaleLowerCase()
      .trim()
      .includes(tapInput.toLocaleLowerCase().trim()),
  );
  return (
    <div className="flex flex-col gap-2 justify-center overflow-x-hidden">
      <NavBar movie={film} setTapInput={setTapInput} />
      <h1>Recommandation pour vous</h1>
      <MovieCard movie={movieFilter} />
      <h1>Tous les Films</h1>
      <MovieCard movie={film} />
    </div>
  );
};
