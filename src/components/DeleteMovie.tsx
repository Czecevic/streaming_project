import { Trash } from "../assets/icons/trash";
import type { DeleteMovieProps } from "../interface";

export const DeleteMovie = ({
  movies,
  movieId,
  setMovies,
}: DeleteMovieProps) => {
  const removeMovie = () => {
    const filterMovie = movies.filter((movie) => movie.id !== movieId);
    setMovies(filterMovie);
    localStorage.setItem("films", JSON.stringify(filterMovie));
  };
  return (
    <td className="p-2">
      <button
        className="py-2 rounded-lg text-red-500 text-xl hover:border-2 hover:border-red-500 hover:p-3"
        onClick={() => removeMovie()}
      >
        <Trash />
      </button>
    </td>
  );
};
