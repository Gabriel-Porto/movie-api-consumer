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

export abstract class IMovieEntity {
  public abstract getMockedMovies(): Promise<IMovie[]>
  public abstract getMoviesByName(title: string): Promise<IMovie[]>
}
