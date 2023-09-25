export interface IMovie {
  id: string
  image: {
    height: number
    id: string
    url?: string
    width: number
  }
  title: string
  titleType: string
  year: number
}

export interface IMovieDetails {
  id: string
  title: {
    title: string
  }
  ratings: {
    rating: number
  }
  genres: string[]
  releaseDate: string
  plotSummary: {
    text?: string
  }
}

export abstract class IMovieEntity {
  public abstract getMockedMovies(): Promise<IMovie[]>
  public abstract getMoviesByName(title: string): Promise<IMovie[]>
  public abstract getMovieDetailsByIdMOCKED(): Promise<IMovieDetails>
  public abstract getMovieDetailsById(id: string): Promise<IMovieDetails>
}
