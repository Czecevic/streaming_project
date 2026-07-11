import { useState } from "react";
import { SelectElem } from "./SelectElem";

export const FilterTask = ({ movie, changeDate, setChangeDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const CategorieMovies = Array.from(new Set(movie.map((m) => m.categorie)));
  const GenderMovies = Array.from(new Set(movie.map((m) => m.genre)));
  return (
    <div className="relative">
      <button
        className={`text-sm font-medium text-neutral-300 hover:text-white px-4 py-2 transition-colors cursor-pointer ${isOpen === true && ` bg-neutral-900 border border-neutral-800 rounded-lg`}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filtre
      </button>
      {isOpen && (
        <div className="absolute right-0 bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-xl z-50 min-w-52">
          <button onClick={() => movie}>asc annee</button>
          <button>desc annee</button>
          <SelectElem elemOfMovies={CategorieMovies} typeOfElem={"Categorie"} />
          <SelectElem elemOfMovies={GenderMovies} typeOfElem={"Genre"} />
        </div>
      )}
    </div>
  );
};
