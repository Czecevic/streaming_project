import { useState } from "react";
import { CreateMovie } from "../components/CreateMovie";
import { MovieAdminTable } from "../components/MovieAdminTable";
import films from "../data/films.json";
import type { filmProps } from "../interface";
import { keyMovie } from "../utils/movie";
import { sortMovies } from "../utils/movie";

export const AdminPage = () => {
  const [movies, setMovies] = useState(() =>
    localStorage.getItem("films")
      ? JSON.parse(localStorage.getItem("films")!)
      : films,
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (filed: keyof filmProps) => {
    const sortedMovies = sortMovies(movies, filed, sortDirection);
    setMovies(sortedMovies);
    localStorage.setItem("films", JSON.stringify(sortedMovies));
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  return (
    <div>
      <div className="mt-16 sm:mt-0">
        <a href="/">
          <button className=" fixed border border-neutral-100 rounded-lg top-5 left-5 text-2xl px-3">
            &#8592;
          </button>
        </a>
        <h1>Gestionnaire des données</h1>
        <CreateMovie movies={movies} setMovies={setMovies} />
        <h1>Les films actuellement présents</h1>
      </div>
      <table className="w-full overflow-x-auto bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900">
            {keyMovie.map((th) => {
              const isSortable = th !== "modifier" && th !== "supprimer";
              return (
                <th
                  key={th}
                  scope="col"
                  className="px-3 py-2 text-xs font-bold text-neutral-400 uppercase tracking-wider justify-items-center"
                >
                  <div className="flex items-center gap-2">
                    <span>{th}</span>
                    {isSortable && (
                      <button onClick={() => handleSort(th as keyof filmProps)}>
                        ↕️
                      </button>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <MovieAdminTable movies={movies} setMovies={setMovies} />
      </table>
    </div>
  );
};
