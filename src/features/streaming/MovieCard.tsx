import type { filmProps } from "../../interface";

export const MovieCard = ({ movie }: filmProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar">
      {movie.map(({ id, nom, categorie, genre, annee }) => (
        <div
          key={id}
          className=" min-w-64 md:min-w-80 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer snap-start"
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
            <span>
              {genre} - {categorie}
            </span>
            <span>{annee}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
