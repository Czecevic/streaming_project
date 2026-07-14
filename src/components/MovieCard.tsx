import type { MovieCardProps } from "../interface";

export const MovieCard = ({ movies, categorie }: MovieCardProps) => {
  const moviesFilter =
    categorie !== undefined
      ? movies.filter((movie) => movie.categorie === categorie)
      : movies;
  if (moviesFilter.length === 0)
    return (
      <p className="text-neutral-400 text-center py-12">
        Aucun film ne correspond à votre recherche...
      </p>
    );
  return (
    <div className="flex gap-4 overflow-x-auto pb-6 pt-2 scroll-smooth items-end">
      {moviesFilter.map(({ id, nom, genre, annee }) => (
        <div
          key={id}
          className=" min-w-64 md:min-w-80 overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <div className="aspect-video flex flex-col items-center justify-center p-4 text-center">
            <span className="text-lg font-semibold">{nom}</span>
            <div className="aspect-video w-full bg-black">
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-trailer-of-a-futuristic-city-40294-large.mp4"
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
            <span>{genre}</span>
            <span>{annee}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
