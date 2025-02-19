
import useFavoriteStore from "../StateManagement/useFavoriteStore";


export default function MovieCard({ movies }){

  const { addFavorite, favorites } = useFavoriteStore();

   const isFavorite = favorites.includes(movie.id);
return(
  <div className="grid-container">
    {movies.map((movie) => (
      <div key={movie.id} className="grid-item">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
        <h3>{movie.title}</h3>
        <button className="button" onClick={() => addFavorite(movie)}>
          {{isFavorite ? "Added" : "Add to Favorites"}}
        </button>
      </div>
    ))}
  </div>
  
)
  
}
