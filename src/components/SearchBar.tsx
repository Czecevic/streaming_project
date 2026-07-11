export const SearchBar = ({ movie, setTapInput }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un film..."
      className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none"
      onChange={(e) => setTapInput(e.target.value)}
    />
  );
};
