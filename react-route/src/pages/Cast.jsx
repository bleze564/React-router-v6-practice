import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCast } from "../services/tmdapi"
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  gap: 8px;
`

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #2a2a4a;
`

const Name = styled.p`
  color: #e0e0e0;
  font-size: 14px;
  text-align: center;
  margin: 0;
`

const Character = styled.p`
  color: #a0a0a0;
  font-size: 12px;
  text-align: center;
  margin: 0;
`

const Cast = () => {
  const { id } = useParams()
  const [cast, setCast] = useState([])

  useEffect(() => {
    getMovieCast(id).then(data => setCast(data.cast))
  }, [id])

  return (
    <List>
      {cast.map(actor => (
        <Item key={actor.id}>
          <Photo
            src={actor.profile_path
              ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
              : "https://placehold.co/100x100/1a1a2e/e0e0e0?text=?"
            }
            alt={actor.name}
          />
          <Name>{actor.name}</Name>
          <Character>Character: {actor.character}</Character>
        </Item>
      ))}
    </List>
  )
}

export default Cast