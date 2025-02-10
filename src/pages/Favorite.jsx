import { useNavigate } from "react-router-dom";


 export default function Favorite(){

    const navigate=useNavigate();
  return (
    <><h1>Favorite</h1>
      <button onClick={()=>navigate("/")}>toHome</button>
    </>
  )
}