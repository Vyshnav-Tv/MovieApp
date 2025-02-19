import { useNavigate } from "react-router-dom";
import useFavoriteStore from "../StateManagement/useFavoriteStore";
import NavButton from "../components/NavButton";

 export default function Favorite(){
const {favorites,removeFavorite}=useFavoriteStore();
    const navigate=useNavigate();
  return (
    <><h1>Favorites</h1>
     <NavButton name={'Home'} navigate={navigate} path={"/"}/>
      <div>
        {favorites.length===0?<h1>No favorite movies</h1>:<div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {favorites.map((movie) => (
              <div key={movie.id} style={{ textAlign: "center" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                />
                <h3>{movie.title}</h3>
                <button className="button" onClick={() => removeFavorite(movie.id)}>
                  Remove from Favorite
                </button>
              </div>
            ))}
          </div>
           
          
        </div>
        }
      
      </div>
    </>
  )
}