import Loupe from "../assets/icons/loupe";
import type { NavProps } from "../interface";
import { FilterTask } from "./FilterTask";
import { SearchBar } from "./SearchBar";

export const NavBar = ({ movies, setTapInput, setSelectedGenre }: NavProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 justify-between px-6 py-4">
      <a href="/">
        <button className="text-sm font-medium text-neutral-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 border bg-neutral-900 border-neutral-800">
          Logo
        </button>
      </a>
      <div className="flex-1 max-w-xl w-full bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2 flex items-center gap-3">
        <div className="text-neutral-400 text-lg">
          <Loupe />
        </div>
        <SearchBar setTapInput={setTapInput} />
      </div>
      <div className="flex items-center gap-4">
        <FilterTask movies={movies} setSelectedGenre={setSelectedGenre} />
        <a href="/Admin">
          <button className="text-sm font-medium text-neutral-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 border bg-neutral-900 border-neutral-800">
            Admin
          </button>
        </a>
      </div>
    </div>
  );
};
