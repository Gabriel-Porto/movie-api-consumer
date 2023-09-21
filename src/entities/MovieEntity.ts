import { IMovie, IMovieEntity, IMovieDetails } from "./IMovieEntity"

export class MovieEntity implements IMovieEntity {
  public async getMockedMovies(): Promise<IMovie[]> {
    return [
      {
        id: "/title/tt0944947/",
        image: {
          height: 1500,
          id: "/title/tt0944947/images/rm3885121281",
          url: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
          width: 1000,
        },
        title: "Game of Thrones",
        titleType: "tvSeries",
        year: 2011,
      },
      {
        id: "/title/tt10545296/",
        image: {
          height: 2878,
          id: "/title/tt10545296/images/rm4044566273",
          url: "https://m.media-amazon.com/images/M/MV5BMGE1NWZkZGMtMjEzYi00NDUwLTgzNmYtMGY4ZDhjNWMxZjVhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          width: 1946,
        },
        title: "The Hunger Games: The Ballad of Songbirds and Snakes",
        titleType: "movie",
        year: 2023,
      },
      {
        id: "/title/tt1392170/",
        image: {
          height: 2048,
          id: "/title/tt1392170/images/rm2868031744",
          url: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",
          width: 1382,
        },
        title: "The Hunger Games",
        titleType: "movie",
        year: 2012,
      },
      {
        id: "/title/tt10919420/",
        image: {
          height: 2048,
          id: "/title/tt10919420/images/rm2766402049",
          url: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
          width: 1382,
        },
        title: "Squid Game",
        titleType: "tvSeries",
        year: 2021,
      },
      {
        id: "/title/tt3748172/",
        image: {
          height: 1800,
          id: "/title/tt3748172/images/rm2797741568",
          url: "https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_.jpg",
          width: 1215,
        },
        title: "Gerald's Game",
        titleType: "movie",
        year: 2017,
      },
      {
        id: "/title/tt2084970/",
        image: {
          height: 2048,
          id: "/title/tt2084970/images/rm3584869376",
          url: "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_.jpg",
          width: 1393,
        },
        title: "The Imitation Game",
        titleType: "movie",
        year: 2014,
      },
      {
        id: "/title/tt2704998/",
        image: {
          height: 2048,
          id: "/title/tt2704998/images/rm3186446592",
          url: "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_.jpg",
          width: 1382,
        },
        title: "Game Night",
        titleType: "movie",
        year: 2018,
      },
      {
        id: "/title/tt10092698/",
        image: {
          height: 755,
          id: "/title/tt10092698/images/rm1498503169",
          url: "https://m.media-amazon.com/images/M/MV5BYjg2NDM1MmMtNmM0Zi00OTdiLTlmNDctOTFhMTAwNmM1ZmNmXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg",
          width: 503,
        },
        title: "All Fun and Games",
        titleType: "movie",
        year: 2023,
      },
      {
        id: "/title/tt0119174/",
        image: {
          height: 2190,
          id: "/title/tt0119174/images/rm1130367745",
          url: "https://m.media-amazon.com/images/M/MV5BNWQ2ODFhNWItNTA4NS00MzkyLTgyYzUtZjlhYWE5MmEzY2Q1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
          width: 1458,
        },
        title: "The Game",
        titleType: "movie",
        year: 1997,
      },
      {
        id: "/title/tt0808279/",
        image: {
          height: 755,
          id: "/title/tt0808279/images/rm1327272704",
          url: "https://m.media-amazon.com/images/M/MV5BMTg4OTExNTYzMV5BMl5BanBnXkFtZTcwOTg1MDU1MQ@@._V1_.jpg",
          width: 509,
        },
        title: "Funny Games",
        titleType: "movie",
        year: 2007,
      },
      {
        id: "/title/tt1951264/",
        image: {
          height: 2048,
          id: "/title/tt1951264/images/rm755621632",
          url: "https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_.jpg",
          width: 1382,
        },
        title: "The Hunger Games: Catching Fire",
        titleType: "movie",
        year: 2013,
      },
      {
        id: "/title/tt0119167/",
        image: {
          height: 1824,
          id: "/title/tt0119167/images/rm1131362816",
          url: "https://m.media-amazon.com/images/M/MV5BM2ZhZDlmZDMtMDk5OC00YjhiLTgxOTAtYWEwMzhiMjJhMmEwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          width: 1280,
        },
        title: "Funny Games",
        titleType: "movie",
        year: 1997,
      },
      {
        id: "/title/tt8718158/",
        image: {
          height: 4096,
          id: "/title/tt8718158/images/rm2731337985",
          url: "https://m.media-amazon.com/images/M/MV5BNDI2MDQzZDAtZmVlZS00MWU1LThkNzUtNjZmZmY3ZDljYjk2XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
          width: 2764,
        },
        title: "The Hating Game",
        titleType: "movie",
        year: 2021,
      },
      {
        id: "/title/tt1951266/",
        image: {
          height: 2048,
          id: "/title/tt1951266/images/rm2654923776",
          url: "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_.jpg",
          width: 1347,
        },
        title: "The Hunger Games: Mockingjay - Part 2",
        titleType: "movie",
        year: 2015,
      },
      {
        id: "/title/tt1951265/",
        image: {
          height: 2048,
          id: "/title/tt1951265/images/rm4250584832",
          url: "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg",
          width: 1347,
        },
        title: "The Hunger Games: Mockingjay - Part 1",
        titleType: "movie",
        year: 2014,
      },
      {
        id: "/title/tt0338459/",
        image: {
          height: 733,
          id: "/title/tt0338459/images/rm2273484544",
          url: "https://m.media-amazon.com/images/M/MV5BMTI4MTQyNTUzMF5BMl5BanBnXkFtZTcwNzE2MDAwMQ@@._V1_.jpg",
          width: 500,
        },
        title: "Spy Kids 3: Game Over",
        titleType: "movie",
        year: 2003,
      },
      {
        id: "/title/tt4209788/",
        image: {
          height: 4096,
          id: "/title/tt4209788/images/rm261381376",
          url: "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          width: 2764,
        },
        title: "Molly's Game",
        titleType: "movie",
        year: 2017,
      },
      {
        id: "/title/tt0104036/",
        image: {
          height: 1500,
          id: "/title/tt0104036/images/rm2626552320",
          url: "https://m.media-amazon.com/images/M/MV5BYWU4MjQ3YzUtNTA3YS00YmRmLTk1YjktODM1NGU0MjFiOTUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          width: 959,
        },
        title: "The Crying Game",
        titleType: "movie",
        year: 1992,
      },
      {
        id: "/title/tt0105112/",
        image: {
          height: 2934,
          id: "/title/tt0105112/images/rm1200023041",
          url: "https://m.media-amazon.com/images/M/MV5BOTVhMWNkZDgtMzkzNy00MGJmLThkYzItNWE5YmMxMDAxNTgxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
          width: 1975,
        },
        title: "Patriot Games",
        titleType: "movie",
        year: 1992,
      },
      {
        id: "/title/tt1731141/",
        image: {
          height: 2048,
          id: "/title/tt1731141/images/rm2563168256",
          url: "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_.jpg",
          width: 1382,
        },
        title: "Ender's Game",
        titleType: "movie",
        year: 2013,
      },
    ]
  }

  public async getMoviesByName(title: string): Promise<IMovie[]> {
    const url = `https://imdb8.p.rapidapi.com/title/v2/find?title=${title}`
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4cda8064ffmsha99856db527c91ep13bfa3jsna88e6e944ddd",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const results = data.results as IMovie[]

    return results
  }

  public async getMovieDetailsByIdMOCKED(): Promise<IMovieDetails> {
    return {
      id: "/title/tt7740496/",
      title: {
        "@type": "imdb.api.title.title",
        id: "/title/tt7740496/",
        image: {
          height: 1500,
          id: "/title/tt7740496/images/rm749334273",
          url: "https://m.media-amazon.com/images/M/MV5BOTI4NDhhNGEtZjQxZC00ZTRmLThmZTctOGJmY2ZlOTc0ZGY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          width: 1012,
        },
        runningTimeInMinutes: 150,
        title: "Nightmare Alley",
        titleType: "movie",
        year: 2021,
      },
      certificates: {
        US: [
          {
            certificate: "R",
            certificateNumber: 53284,
            ratingReason:
              "Rated R for strong/bloody violence, some sexual content, nudity and language",
            ratingsBody: "MPAA",
            country: "US",
          },
        ],
      },
      ratings: {
        canRate: true,
        rating: 7,
        ratingCount: 156982,
        topRank: 2426,
      },
      genres: ["Crime", "Drama", "Thriller"],
      releaseDate: "2021-12-17",
      plotOutline: {
        id: "/title/tt7740496/plot/po3644569",
        text: "A grifter working his way up from low-ranking carnival worker to lauded psychic medium matches wits with a psychologist bent on exposing him.",
      },
      plotSummary: {
        author: "Wiki",
        id: "/title/tt7740496/plot/ps6343636",
        text: 'Stan burns down his home and takes a job as a carny with a traveling carnival. Stan is disturbed at how any man could sink to the level of performing as a geek. Clem explains that he seeks out alcoholic or drug-addicted men with troubled pasts, and lures them in with promises of a "temporary" job and opium-laced alcohol. He then uses their dependence until they sink into madness and depravity, thus creating a new geek. Stan also works with clairvoyant act "Madame Zeena" and her alcoholic husband, Pete. He and Zeena warn Stan not to ever use these skills otherwise people get hurt. Meanwhile Stan becomes attracted to fellow performer Molly and approaches her with an idea for a two-person act away from the carnival.',
      },
    }
  }

  public async getMovieDetailsById(id: string): Promise<IMovieDetails> {
    const url = `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4cda8064ffmsha99856db527c91ep13bfa3jsna88e6e944ddd",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const results = data as IMovieDetails

    return results
  }
}
