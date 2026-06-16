import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "../services/tmdapi"
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`

const Item = styled.li`
  background-color: #1a1a2e;
  padding: 16px;
  border-radius: 8px;
  border-left: 3px solid #e94560;
`

const Author = styled.h4`
  color: #e94560;
  margin: 0 0 8px 0;
`

const Content = styled.p`
  color: #a0a0a0;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`

const Reviews = () => {
  const { id } = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getMovieReviews(id).then(data => setReviews(data.results))
  }, [id])

  if (reviews.length === 0) return <p style={{ color: "#a0a0a0" }}>No reviews yet</p>

  return (
    <List>
      {reviews.map(review => (
        <Item key={review.id}>
          <Author>{review.author}</Author>
          <Content>{review.content}</Content>
        </Item>
      ))}
    </List>
  )
}

export default Reviews