import { useState } from "react";
import { CreateMovie } from "../components/CreateMovie";
import { MovieAdminTable } from "../components/MovieAdminTable";
import films from "../data/films.json";
import type { filmProps } from "../interface";
import { allKeyMovie, keyMovie } from "../utils/movie";
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
    <div className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col items-center ml-6 mt-6 sm:mt-0">
        <a href="/">
          <button className="fixed border border-neutral-100 rounded-lg top-5 left-5 text-xl sm:text-2xl px-2.5 sm:px-3 py-1 z-10 bg-neutral-900">
            &#8592;
          </button>
        </a>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">
          Gestionnaire des données
        </h1>
        <CreateMovie movies={movies} setMovies={setMovies} />
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left mt-6 mb-3">
          Les films actuellement présents
        </h1>
      </div>
      <div className="w-full overflow-x-auto rounded-lg shadow-2xl border border-neutral-800">
        <table className="w-full min-w-2xl bg-neutral-900">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-900">
              {allKeyMovie.map((th) => {
                const isSortable = th !== "modifier" && th !== "supprimer";
                return (
                  <th
                    key={th}
                    scope="col"
                    className="px-2 sm:px-3 py-2 text-sm sm:text-xs font-bold text-neutral-400 uppercase tracking-wider text-center"
                  >
                    <div className="flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap">
                      <span>{th}</span>
                      {isSortable && (
                        <button
                          onClick={() => handleSort(th as keyof filmProps)}
                          className="shrink-0"
                        >
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
    </div>
  );
};
