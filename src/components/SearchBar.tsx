import type { Dispatch, SetStateAction } from "react";

export const SearchBar = ({
  setTapInput,
}: {
  setTapInput: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un film..."
      className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none"
      onChange={(e) => setTapInput(e.target.value)}
    />
  );
};
