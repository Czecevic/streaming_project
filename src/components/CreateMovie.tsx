import { useState, type SubmitEvent } from "react";

export const CreateMovie = ({ movies, setMovies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("nom"));
    const gender = String(formData.get("genre"));
    const categorie = String(formData.get("categorie"));
    const language = String(formData.get("langue"));
    const years = Number(formData.get("annee"));
    const newMovie = {
      id: movies.length + 1,
      nom: name,
      genre: gender,
      categorie: categorie,
      langue: language,
      annee: years,
    };
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
        className="border-2 border-green-500 text-green-900 rounded-lg p-3 hover:bg-green-200 hover:text-black hover:border-none transition-colors"
      >
        {isOpen ? "Annuler" : "+ Ajouter un film"}
      </button>
      {isOpen && (
        <form className="flex flex-col p-5" onSubmit={handleSubmit}>
          <h3 className="text-sm font-bold">Nouveau film</h3>
          <input
            placeholder="nom ..."
            name="nom"
            className="border-2 border-neutral-800 rounded-lg p-2 m-2"
          ></input>
          <input
            placeholder="genre ..."
            name="genre"
            className="border-2 border-neutral-800 rounded-lg p-2 m-2"
          ></input>
          <input
            placeholder="categorie ..."
            name="categorie"
            className="border-2 border-neutral-800 rounded-lg p-2 m-2"
          ></input>
          <input
            placeholder="langue ..."
            name="langue"
            className="border-2 border-neutral-800 rounded-lg p-2 m-2"
          ></input>
          <input
            placeholder="annee ..."
            name="annee"
            type="number"
            className="border-2 border-neutral-800 rounded-lg p-2 m-2"
          ></input>
          <button className="border-2 border-neutral-800 bg-neutral-300 text-black rounded-lg p-2 m-2">
            Ajouter
          </button>
        </form>
      )}
    </div>
  );
};
