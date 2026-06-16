import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTrendingMovies } from "../services/tmdapi"
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 32px;
  margin: 0;
  background-color: #16213e;
  min-height: 100vh;
`

const Item = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #2a2a4a;
`

const StyledLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #e94560;
  }
`

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results))
  }, [])

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
        </Item>
      ))}
    </List>
  )
}

export default Home