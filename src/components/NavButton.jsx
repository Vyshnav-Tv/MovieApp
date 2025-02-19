export default function NavButton({name,navigate,path }){
return(
  <div className="nav-buttons">
    <button className="nav-button" onClick={() => navigate(path)}>
      {name}
    </button>
  </div>
  
)
  
}