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
        className={`py-1.5 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all hover:bg-red-700 text-white`}
        onClick={() => removeMovie()}
      >
        <Trash />
      </button>
    </td>
  );
};
