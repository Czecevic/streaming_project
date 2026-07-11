import Loupe from "../assets/loupe";
import { FilterTask } from "./FilterTask";
import { SearchBar } from "./SearchBar";

export const NavBar = ({ movie, setTapInput, changeDate, setChangeDate }) => {
  return (
    <div className="flex items-center gap-5 justify-between px-6 py-4">
      <a href="/">
        <button>Logo</button>
      </a>
      <div className="flex-1 max-w-xl bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2 flex items-center gap-3">
        <div className="text-neutral-400 text-lg">
          <Loupe />
        </div>
        <SearchBar movie={movie} setTapInput={setTapInput} />
      </div>
      <div className="flex items-center gap-4">
        <FilterTask
          movie={movie}
          changeDate={changeDate}
          setChangeDate={setChangeDate}
        />
        <a href="/Admin">
          <button className="cursor-pointer">Admin</button>
        </a>
      </div>
    </div>
  );
};
