import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieById } from "../services/tmdapi";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #16213e;
  min-height: 100vh;
  padding: 32px;
  color: #e0e0e0;
`

const GoBack = styled(Link)`
  color: #e94560;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`

const MovieInfo = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 20px;
`

const Poster = styled.img`
  border-radius: 8px;
  width: 300px;
  object-fit: cover;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Title = styled.h1`
  font-size: 28px;
  margin: 0;
`

const Score = styled.p`
  color: #a0a0a0;
  margin: 0;
`

const SectionTitle = styled.h3`
  color: #e94560;
  margin: 0;
`

const GenreList = styled.p`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0;
`

const Genre = styled.span`
  background-color: #1a1a2e;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
`

const AdditionalInfo = styled.div`
  margin-top: 32px;
  border-top: 1px solid #2a2a4a;
  padding-top: 16px;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 16px;
`

const StyledLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #e94560;
  }
`

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <Wrapper>
      <GoBack to="/">← Go back</GoBack>
      <MovieInfo>
        <Poster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
        <Info>
          <Title>{movie.title} ({movie.release_date?.slice(0, 4)})</Title>
          <Score>User Score: {Math.round(movie.vote_average * 10)}%</Score>
          <SectionTitle>Overview</SectionTitle>
          <p>{movie.overview}</p>
          <SectionTitle>Genres</SectionTitle>
          <GenreList>
            {movie.genres?.map((g) => <Genre key={g.id}>{g.name}</Genre>)}
          </GenreList>
        </Info>
      </MovieInfo>

      <AdditionalInfo>
        <h3>Additional information</h3>
        <NavList>
          <li><StyledLink to="cast">Cast</StyledLink></li>
          <li><StyledLink to="reviews">Reviews</StyledLink></li>
        </NavList>
        <Outlet />
      </AdditionalInfo>
    </Wrapper>
  );
};

export default MovieDetail;