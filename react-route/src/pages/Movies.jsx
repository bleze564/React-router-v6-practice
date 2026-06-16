import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/tmdapi";
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
  color: #e0e0e0;
  font-size: 18px;
`

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <List>
      {movies.map((movie) => (
        <Item key={movie.id}>{movie.title}</Item>
      ))}
    </List>
  );
};

export default Movies;