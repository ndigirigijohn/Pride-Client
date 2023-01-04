import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './Reviews.css'

function Reviews() {

  const [reviews, setReviews] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    axios.get('http://localhost:8080/feedback/read')

    .then(res => {
      setReviews(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='reviews' >
      {
      loading?"Loading...":
      reviews.map (review => (
        <div key={review._id} className="review">
          <h2>{review.name}</h2>
          <h4>{review.product}</h4>
          <p>"{review.message}"</p>
          
          </div>
      ))
    }</div>
  )
}


export default Reviews