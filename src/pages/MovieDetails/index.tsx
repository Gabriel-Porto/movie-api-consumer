import { MovieDetailsContainer } from "./styles"

export function MovieDetails() {
  return (
    <MovieDetailsContainer>
      <img src="" alt="" />
      <div>
        <a href="/"></a>
        <div className="title">
          <h1>Game of Thrones</h1>
          <div className="rating">
            {/* //STAR SVG */}
            <p>9.2/10</p>
          </div>
        </div>
        <div className="genres">{/* //map display all genres */}</div>
        <p>{/* Released on date */}</p>
        <p>{/*Summary*/}</p>
      </div>
    </MovieDetailsContainer>
  )
}
