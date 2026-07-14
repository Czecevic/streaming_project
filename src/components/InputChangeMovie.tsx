import { useState } from "react";
import type { filmProps, InputChangeMovieProps } from "../interface";

export const InputChangeMovie = ({
  edit,
  keyTheme,
  valueTheme,
  movieId,
  movies,
  setMovies,
}: InputChangeMovieProps) => {
  const changeContentMovie = (
    id: number,
    filed: keyof filmProps,
    value: string | number,
  ) => {
    const updatedMovie = movies.map((movie) => {
      const cleanValue = filed === "annee" ? Number(value) : value;
      if (movie.id === id) {
        return { ...movie, [filed]: cleanValue };
      }
      return movie;
    });
    setMovies(updatedMovie);
    localStorage.setItem("films", JSON.stringify(updatedMovie));
  };

  return (
    <td className="py-2 px-4">
      {!edit ? (
        <p className={keyTheme === "langue" ? "uppercase" : ""}>{valueTheme}</p>
      ) : (
        <input
          value={valueTheme}
          type={keyTheme === "annee" ? "number" : "text"}
          className={`bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-indigo-500 w-full`}
          onChange={(e) =>
            changeContentMovie(movieId, keyTheme, e.target.value)
          }
        />
      )}
    </td>
  );
};
