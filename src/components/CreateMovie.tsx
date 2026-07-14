import { useState, type SubmitEvent } from "react";
import { type movieProps } from "../interface";
import { keyMovie } from "../utils/movie";
import { CreateMovieObject } from "../utils/movie";

export const CreateMovie = ({ movies, setMovies }: movieProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newMovie = CreateMovieObject(formData, movies);
    const upgradeCatalogue = [...movies, newMovie];
    setMovies(upgradeCatalogue);
    localStorage.setItem("films", JSON.stringify(upgradeCatalogue));
    setIsOpen(false);
    form.reset();
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? `border-red-500 text-red-900 hover:bg-red-200` : `border-green-500 text-green-900 hover:bg-green-200`} border-2 rounded-lg p-3 hover:text-black hover:border-none transition-colors`}
      >
        {isOpen ? "Annuler" : "+ Ajouter un film"}
      </button>
      {isOpen && (
        <form className="flex flex-col p-5" onSubmit={handleSubmit}>
          <h3 className="text-sm font-bold">Nouveau film</h3>
          {keyMovie.map((key) => {
            return (
              <input
                placeholder={`${key} ...`}
                name={key}
                type="text"
                className="border-2 border-neutral-800 rounded-lg p-2 m-2"
              ></input>
            );
          })}
          <button className="border-2 border-neutral-800 bg-neutral-300 text-black rounded-lg p-2 m-2">
            Ajouter
          </button>
        </form>
      )}
    </div>
  );
};
