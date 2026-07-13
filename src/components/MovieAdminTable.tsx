import { useState } from "react";
import { Pen } from "../assets/pen";
import type { movieProps } from "../interface";
import { DeleteMovie } from "./DeleteMovie";
import { InputChangeMovie } from "./InputChangeMovie"; // Attention à la majuscule sur le nom du fichier s'il a changé

export const MovieAdminTable = ({ movies, setMovies }: movieProps) => {
  // Contient l'ID du film sélectionné ou null
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <tbody className="divide-y divide-neutral-800 text-neutral-200">
      {movies.map((movie) => {
        // Est-ce que cette ligne précise est en mode édition ?
        const edit = editingId === movie.id;

        return (
          <tr
            key={movie.id}
            className="hover:bg-neutral-900/40 transition-colors"
          >
            <td className="py-3 px-4 text-neutral-500 font-mono text-sm">
              {movie.id}
            </td>

            <InputChangeMovie
              edit={edit}
              keyTheme="nom"
              valueTheme={movie.nom}
              movieId={movie.id}
              movies={movies}
              setMovies={setMovies}
            />
            <InputChangeMovie
              edit={edit}
              keyTheme="genre"
              valueTheme={movie.genre}
              movieId={movie.id}
              movies={movies}
              setMovies={setMovies}
            />
            <InputChangeMovie
              edit={edit}
              keyTheme="categorie"
              valueTheme={movie.categorie}
              movieId={movie.id}
              movies={movies}
              setMovies={setMovies}
            />
            <InputChangeMovie
              edit={edit}
              keyTheme="langue"
              valueTheme={movie.langue}
              movieId={movie.id}
              movies={movies}
              setMovies={setMovies}
            />
            <InputChangeMovie
              edit={edit}
              keyTheme="annee"
              valueTheme={movie.annee}
              movieId={movie.id}
              movies={movies}
              setMovies={setMovies}
            />

            {/* ACTION MODIFIER / OK */}
            <td className="py-2 px-4 text-center">
              <button
                className={`py-1.5 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all ${
                  edit
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/10"
                    : "text-neutral-400 hover:text-indigo-400 hover:bg-neutral-800"
                }`}
                // Si on clique sur OK de la ligne active, on ferme (null), sinon on ouvre celle du film
                onClick={() => setEditingId(edit ? null : movie.id)}
              >
                {edit ? "OK" : <Pen />}
              </button>
            </td>

            <DeleteMovie
              movies={movies}
              movieId={movie.id}
              setMovies={setMovies}
            />
          </tr>
        );
      })}
    </tbody>
  );
};
