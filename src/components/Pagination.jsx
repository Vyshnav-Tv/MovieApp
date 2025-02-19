export default function Pagination({ page, setPage }){

return(
  <div className="pagination-container">
    <button
      className="button"
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    >
      Prev
    </button>
    <span>page{page}</span>

    <button className="button" onClick={() => setPage((prev) => prev + 1)}>
      Next
    </button>
  </div>
  
)
  
}