import { expect, test, describe } from "vitest";
import { CreateMovieObject, removeMovieObject } from "./movie";
import { sortMovies } from "./movie";
import type { filmProps } from "../interface";

const existingMovies = [
  {
    id: 1,
    nom: "Inception",
    annee: 2010,
    genre: "SF",
    categorie: "B",
    langue: "FR",
  },
  {
    id: 3,
    nom: "Athena",
    annee: 2022,
    genre: "Action",
    categorie: "B",
    langue: "FR",
  },
];

// create a test suite for the CreateMovieObject function
describe("create movie object", () => {
  test("create unique id for the new movie object based on the existing movies", () => {
    const fakeForm = new FormData();
    fakeForm.append("nom", "Matrix");

    const result = CreateMovieObject(fakeForm, existingMovies);
    expect(result.id).toBe(4);
  });

  test("create a test to check if the function returns the current year when the year is invalid", () => {
    const fakeForm = new FormData();
    fakeForm.append("nom", "Film Sans Année");
    fakeForm.append("annee", "texte_invalide");

    const result = CreateMovieObject(fakeForm, []);

    const currentYear = new Date().getFullYear();
    expect(result.annee).toBe(currentYear);
  });
});

// create a test suite for the removeMovieObject function
describe("remove movie object", () => {
  test("remove a movie object from the existing movies based on the id", () => {
    const movieIdToRemove = 1;
    const result = removeMovieObject(movieIdToRemove, existingMovies);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });
});

const mockMovies: filmProps[] = [
  {
    id: 1,
    nom: "Inception",
    annee: 2010,
    genre: "SF",
    categorie: "Blockbuster",
    langue: "Anglais",
  },
  {
    id: 2,
    nom: "Taxi",
    annee: 1998,
    genre: "Comédie",
    categorie: "Classique",
    langue: "Français",
  },
  {
    id: 3,
    nom: "Athena",
    annee: 2022,
    genre: "Action",
    categorie: "Indépendant",
    langue: "Français",
  },
];
// create a test suite for the sortMovies function
describe("movie - sortMovies", () => {
  test("sorting strings (nom) in ascending order", () => {
    const result = sortMovies(mockMovies, "nom", "asc");

    expect(result[0].nom).toBe("Athena");
    expect(result[1].nom).toBe("Inception");
    expect(result[2].nom).toBe("Taxi");
  });
  test("sorting strings (nom) in descending order", () => {
    const result = sortMovies(mockMovies, "nom", "desc");

    expect(result[0].nom).toBe("Taxi");
    expect(result[1].nom).toBe("Inception");
    expect(result[2].nom).toBe("Athena");
  });
  test("sorting numbers (annee) in ascending order", () => {
    const result = sortMovies(mockMovies, "annee", "asc");

    expect(result[0].annee).toBe(1998);
    expect(result[1].annee).toBe(2010);
    expect(result[2].annee).toBe(2022);
  });

  test("sorting number (annee) in descending order", () => {
    const result = sortMovies(mockMovies, "annee", "desc");

    expect(result[0].annee).toBe(2022);
    expect(result[1].annee).toBe(2010);
    expect(result[2].annee).toBe(1998);
  });
  test("don't mutate the original array", () => {
    const copyOriginal = [...mockMovies];

    sortMovies(mockMovies, "nom", "asc");
    expect(mockMovies).toEqual(copyOriginal);
  });
});
