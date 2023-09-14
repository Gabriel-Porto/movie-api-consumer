import { useEffect, useState } from "react"
import "./App.css"

export function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMoviesByName() {
      const url = "https://imdb8.p.rapidapi.com/title/v2/find?title=game"
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "4cda8064ffmsha99856db527c91ep13bfa3jsna88e6e944ddd",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      }

      const response = await fetch(url, options)
      const data = await response.json()
      const results = data.results
      console.log(results)

      setMovies(results)
    }

    getMoviesByName()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>IMDb movies</h1>
        <input type="text" />
      </header>

      <main>
        <div className="list">
          {movies.map((movie, index) => (
            <div key={index} className="movie">
              <img src={movie.image.url} alt="Movie poster" />
              <div className="movie-info">
                <h2>{movie.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
