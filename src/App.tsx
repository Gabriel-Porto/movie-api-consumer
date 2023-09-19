import { GlobalStyle } from "./global"
import { Home } from "./pages/Home"
import { MovieDetails } from "./pages/MovieDetails"

export function App() {
  return (
    <div className="App">
      <MovieDetails />
      <GlobalStyle />
    </div>
  )
}
