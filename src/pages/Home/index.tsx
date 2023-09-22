import { useEffect, useMemo, useState } from "react"
import { MovieEntity } from "../../entities/MovieEntity"
import { IMovie } from "../../entities/IMovieEntity"

import { Header, Hero, HomeContainer, MovieList } from "./styles"
import bannerImg from "../../assets/pngwing.com.png"
import { MagnifyingGlass } from "@phosphor-icons/react"

import { Link } from "react-router-dom"
import { Spinner } from "../../components/Spinner"

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([])

  const movieEntity = useMemo(() => new MovieEntity(), [])

  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (search) {
      movieEntity.getMoviesByName(search).then((movies) => {
        setMovies(movies)
        setIsLoading(false)
      })
    }
  }, [movieEntity, search])

  // useEffect(() => {
  //   movieEntity.getMockedMovies().then((movies) => {
  //     setMovies(movies)
  //   })
  // }, [movieEntity])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSearch(event: any) {
    if (isLoading) {
      return
    }
    if (event.key === "Enter") {
      setIsLoading(true)
      setSearch(event.target.value)
    }
  }

  return (
    <HomeContainer>
      <Header>
        <h1>IMDb movies</h1>
      </Header>

      <Hero>
        <div className="heroText">
          <h1>Esse é um projeto para treinar o uso de API pelo client-side.</h1>
          <p>Procure os filmes por nome:</p>
          <div className="inputContainer">
            <input
              className="inputSearch"
              type="text"
              placeholder="Procure pelo título"
              onKeyDown={handleSearch}
            />
            <button onClick={handleSearch}>
              <MagnifyingGlass size={20} color="#FFFFFF" />
            </button>
          </div>
        </div>
        <img src={bannerImg} alt="" />  
      </Hero>
      {isLoading ? (
        <Spinner size={200} />
      ) : (
        <MovieList>
          {movies.map((movie) => (
            <Link
              to={"/MovieDetails/" + movie.id.split("title/")[1].slice(0, -1)}
              key={movie.id}
            >
              <div key={movie.id} className="movie">
                <img
                  src={
                    movie?.image?.url
                      ? movie.image.url
                      : "https://d3aa3603f5de3f81cb9fdaa5c591a84d5723e3cb.hosting4cdn.com/wp-content/uploads/2020/11/404-poster-not-found-CG17701-1.png"
                  }
                  alt={movie.title + " poster"}
                />
                <div className="movie-info">
                  <h2>{movie.title}</h2>
                  <p>{movie.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </MovieList>
      )}
    </HomeContainer>
  )
}
