import { useState } from "react";
import { CreateMovie } from "../components/CreateMovie";
import { MovieAdminTable } from "../components/MovieAdminTable";
import films from "../data/films.json";

export const AdminPage = () => {
  const [movies, setMovies] = useState(() =>
    localStorage.getItem("films")
      ? JSON.parse(localStorage.getItem("films")!)
      : films,
  );
  const thTab = [
    "id",
    "nom",
    "genre",
    "categorie",
    "langue",
    "annee",
    "modifier",
    "supprimer",
  ];
  return (
    <div>
      <div>
        <a href="/">
          <button className=" fixed border border-neutral-100 rounded-lg top-5 left-5 text-2xl px-3">
            &#8592;
          </button>
        </a>
        <h1>Gestionnaire des données</h1>
        <CreateMovie movies={movies} setMovies={setMovies} />
      </div>
      <h1>Les films actuellement présents</h1>
      <table className="w-full overflow-x-auto bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900">
            {thTab.map((th) => (
              <th
                scope="col"
                className="px-6 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider"
              >
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <MovieAdminTable movies={movies} setMovies={setMovies} />
      </table>
    </div>
  );
};
