import { GlobalStyle } from "./global"
import { Home } from "./pages/Home"
import { MovieDetails } from "./pages/MovieDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/MovieDetails/:id"
          element={<MovieDetails />}
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
