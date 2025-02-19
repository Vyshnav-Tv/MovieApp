export default function SearchBar({setSearchTerm}){
return(
  <div className="search-container">
    <input
      type="text"
      className="search-input"
      placeholder="Search movies..."

      onChange={(e)=>(setSearchTerm(e.target.value))}
    />
    <button className="search-button">Search</button>
  </div>
  
)
  
}