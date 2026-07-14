import films from "../data/films.json";
import { MovieCard } from "../components/MovieCard";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import type { filmProps } from "../interface";

export const HomePage = () => {
  const [tapInput, setTapInput] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const movies: filmProps[] = localStorage.getItem("films")
    ? JSON.parse(localStorage.getItem("films")!)
    : films;
  const moviesFilter = movies.filter((movie) => {
    const matchSearch = movie.nom
      .toLowerCase()
      .trim()
      .includes(tapInput.toLowerCase().trim());
    const matchGenre = selectedGenre ? selectedGenre === movie.genre : true;
    return matchSearch && matchGenre;
  });
  return (
    <div className="flex flex-col gap-2 justify-center overflow-x-hidden">
      <NavBar
        movies={movies ?? []}
        setTapInput={setTapInput}
        setSelectedGenre={setSelectedGenre}
      />
      <h1>Recommandation pour vous</h1>
      <MovieCard movies={moviesFilter ?? []} />
      <h1>Les classiques</h1>
      <MovieCard movies={moviesFilter ?? []} categorie="Classique" />
      <h1>Films Populaire</h1>
      <MovieCard movies={moviesFilter ?? []} categorie="Populaire" />
      <h1>Films Indépendant</h1>
      <MovieCard movies={moviesFilter ?? []} categorie="Indépendant" />
      <h1>Films Blockbuster</h1>
      <MovieCard movies={moviesFilter ?? []} categorie="Blockbuster" />
      <h1>Tous les Films</h1>
      <MovieCard movies={movies ?? []} />
    </div>
  );
};
