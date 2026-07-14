import type { SelectElemProps } from "../interface";

export const SelectElem = ({
  elemOfMovies,
  typeOfElem,
  setSelected,
}: SelectElemProps) => {
  return (
    <div className="fex flex-col gap-1.5">
      <label
        htmlFor={typeOfElem}
        className="block text-xs font-bold text-neutral-500 uppercase tracking-wider pt-1"
      >
        {typeOfElem}
      </label>
      <select
        name={typeOfElem}
        id={typeOfElem}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full bg-neutral-800 text-sm text-neutral-200 border border-neutral-700 rounded-lg p-2.5 focus:outline-none focus:border-white transition-colors appearance-none"
      >
        <option value="">- Choissisez un genre -</option>
        {elemOfMovies.map((elem: string) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </div>
  );
};
