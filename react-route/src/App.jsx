import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";

const Header = styled.header`
  display: flex;
  gap: 20px;
  padding: 16px 32px;
  background-color: #1a1a2e;
`

const StyledNavLink = styled(NavLink)`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;

  &.active {
    color: #e94560;
  }

  &:hover {
    color: #e94560;
  }
`

const DisabledLink = styled.span`
  color: #555;
  font-size: 16px;
  font-weight: 500;
  cursor: not-allowed;
`

function Navigation() {
  const location = useLocation()
  const isMoviePage = location.pathname.startsWith("/movies/")

  return (
    <Header>
      <StyledNavLink to="/home">Home</StyledNavLink>
      {isMoviePage
        ? <StyledNavLink to="/movies">Movies</StyledNavLink>
        : <DisabledLink>Movies</DisabledLink>
      }
    </Header>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;