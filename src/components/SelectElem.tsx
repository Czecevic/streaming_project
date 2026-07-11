export const SelectElem = ({ elemOfMovies, typeOfElem }) => {
  return (
    <>
      <label
        htmlFor={typeOfElem}
        className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider m-2"
      >
        {typeOfElem}
      </label>
      <select name={typeOfElem} id={typeOfElem}>
        {elemOfMovies.map((elem: string) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </>
  );
};
