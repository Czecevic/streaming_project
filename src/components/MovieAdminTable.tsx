import { useState } from "react";
import { Pen } from "../assets/icons/pen";
import type { movieProps } from "../interface";
import { DeleteMovie } from "./DeleteMovie";
import { InputChangeMovie } from "./InputChangeMovie";

export const MovieAdminTable = ({ movies, setMovies }: movieProps) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  return (
    <tbody className="divide-y divide-neutral-800 text-neutral-200">
      {movies.map((movie) => {
        const edit = editingId === movie.id;
        return (
          <tr
            key={movie.id}
            className="hover:bg-neutral-900/40 transition-colors"
          >
            <td className="py-2 px-3 text-neutral-500 font-mono text-sm">
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
            <td className="py-2 px-4 text-center">
              <button
                className={`py-1.5 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all ${
                  edit
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "text-neutral-400 hover:text-green-400 hover:bg-neutral-800"
                }`}
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
