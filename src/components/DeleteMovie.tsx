import { Trash } from "../assets/icons/trash";
import type { DeleteMovieProps } from "../interface";
import { removeMovieObject } from "../utils/movie";
export const DeleteMovie = ({
  movies,
  movieId,
  setMovies,
}: DeleteMovieProps) => {
  const removeMovie = () => {
    const remove = removeMovieObject(movieId, movies);
    setMovies(remove);
    localStorage.setItem("films", JSON.stringify(remove));
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
