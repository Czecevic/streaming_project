import { useState } from "react";
import { SelectElem } from "./SelectElem";
import type { FilterProps } from "../interface";

export const FilterTask = ({ movies, setSelectedGenre }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const GenderMoviess = Array.from(new Set(movies.map((m) => m.genre)));
  return (
    <div className="relative">
      <button
        className={`text-sm font-medium text-neutral-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 border ${
          isOpen
            ? "bg-neutral-800 border-neutral-700 text-white"
            : "bg-neutral-900 border-neutral-800"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filtres
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-xl z-50 min-w-52 flex flex-col">
          <SelectElem
            elemOfMovies={GenderMoviess}
            typeOfElem={"Genres"}
            setSelected={setSelectedGenre}
          />
          <button
            className="w-full mt-2 text-xs font-semibold text-neutral-400 hover:text-red-600 bg-neutral-800 py-2 rounded-md border border-neutral-800 hover:border-red-500 transition-all text-center"
            onClick={() => {
              setSelectedGenre("");
              setIsOpen(!isOpen);
            }}
          >
            supprimer le filtre
          </button>
        </div>
      )}
    </div>
  );
};
