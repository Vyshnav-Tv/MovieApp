import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../Api";


export default function Home(){
  const [movies, setMovies] = useState([]);
  const [page,setPage]=useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getMovies(page);
      setMovies(data);
    };

    fetchData();
  }, [page]);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Home movies</h1>
      {/* <button onClick={() => navigate("/Favorites")}>to fav</button> */}
      <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: "center" }}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
           
          </div>
        ))}

      </div>
       <button onClick={()=> setPage((prev) =>Math.max(prev-1,1))}>Prev</button>
<span>page{page}</span>
      
      <button onClick={()=> setPage((prev) => prev+1)}>Next</button>
    </div>
  );
}