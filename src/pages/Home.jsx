import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../Api";
import useFavoriteStore from "../StateManagement/useFavoriteStore";
import SearchBar from "../components/Search";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import NavButton from "../components/NavButton";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
 // const [searchTerm, setSearchTerm] = useState("");

 // const { addFavorite, favorites } = useFavoriteStore();

  useEffect(() => {
    const fetchData = async () => {
let data;
data = await getMovies(page);
      setMovies(data);
}
      
  fetchData();
  }, [page]);

  const navigate = useNavigate();
  return (
    <div>
      <h1> Movies HUB</h1>

     
     <NavButton name={"Favorites"} navigate={navigate} path={"/Favorites"} />
     <MovieCard movies={movies}/>
    <Pagination page={page} setPage={setPage}/>
    </div>
  );
}
