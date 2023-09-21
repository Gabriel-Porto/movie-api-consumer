import { useEffect, useMemo, useState } from "react"
import { MovieEntity } from "../../entities/MovieEntity"
import { IMovieDetails } from "../../entities/IMovieEntity"
import { useParams, useNavigate, Link } from "react-router-dom"

import { MovieDetailsContainer, MovieInfo, Rating, Loading } from "./styles"
import { Star, ArrowUDownLeft } from "@phosphor-icons/react"
import { Spinner } from "../../components/Spinner"

export function MovieDetails() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [isLoading, setLoading] = useState(true)

  const [movieDisplayed, setMovieDisplayed] = useState<IMovieDetails>()

  const movieEntity = useMemo(() => new MovieEntity(), [])

  useEffect(() => {
    if (id) {
      movieEntity.getMovieDetailsByIdMOCKED().then((movie) => {
        setTimeout(() => {
          setMovieDisplayed(movie)
        }, 500)
      })
    } else {
      navigate("/")
    }
  }, [movieEntity, id, navigate])

  useEffect(() => {
    if (movieDisplayed) {
      setLoading(false)
    }
  }, [movieDisplayed])

  return (
    <>
      {isLoading ? (
        <Loading>
          <h1>Carregando...</h1>
          <Spinner size={70} />
        </Loading>
      ) : (
        <MovieDetailsContainer>
          <img src={movieDisplayed?.title.image.url} alt="" />
          <MovieInfo>
            {id}
            <Link to="/">
              <ArrowUDownLeft size={28} color="#ff6347" weight="fill" /> Home
            </Link>
            <div className="header">
              <h1>{movieDisplayed?.title.title}</h1>
              <Rating>
                <Star size={24} color="#f6ca2a" weight="fill" />
                <p>{movieDisplayed?.ratings.rating}/10</p>
              </Rating>
            </div>
            <div className="genres">
              {movieDisplayed?.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
            <p className="releaseDate">
              Released on {movieDisplayed?.releaseDate}
            </p>
            <p className="summary">{movieDisplayed?.plotSummary.text}</p>
          </MovieInfo>
        </MovieDetailsContainer>
      )}
    </>
  )
}
