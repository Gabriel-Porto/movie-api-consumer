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
    "@type": string
    id: string
    image: {
      height: number
      id: string
      url: string
      width: number
    }
    runningTimeInMinutes: number
    title: string
    titleType: string
    year: number
  }
  certificates: {
    US: [
      {
        certificate: string
        certificateNumber: number
        ratingReason: string
        ratingsBody: string
        country: string
      }
    ]
  }
  ratings: {
    canRate: boolean
    rating: number
    ratingCount: number
    topRank: number
  }
  genres: string[]
  releaseDate: string
  plotOutline: {
    id: string
    text: string
  }
  plotSummary: {
    author: string
    id: string
    text: string
  }
}

export abstract class IMovieEntity {
  public abstract getMockedMovies(): Promise<IMovie[]>
  public abstract getMoviesByName(title: string): Promise<IMovie[]>
  public abstract getMovieDetailsByIdMOCKED(): Promise<IMovieDetails>
  public abstract getMovieDetailsById(id: string): Promise<IMovieDetails>
}
