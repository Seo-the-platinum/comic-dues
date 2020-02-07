import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'

const Container= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`

class Reviews extends Component {
  render() {
    const { reviews }= this.props
    const orderedReviews= Object.keys(reviews).sort(function(a,b){
      return reviews[b].date - reviews[a].date
    })
    console.log(orderedReviews);
    return (
      <Container>
        <h2> Reviews</h2>
          {orderedReviews.map((r)=> {
          return (
            <div key={r}>
              <h2> {reviews[r].title}</h2>
              <img src={`${reviews[r].imgUrl}`} alt={`${reviews[r].title} movie poster`}/>
              <h3>{reviews[r].critic}</h3>
              <StarRatingComponent
                name={`${reviews[r].critic}review`}
                starCount={5}
                value={reviews[r].rating}/>
              <p>{reviews[r].review}</p>
            </div>)
          })}
      </Container>
    )
  }
}

function mapStateToProps({reviews}, props) {
  return {
    reviews
  }
}
export default connect(mapStateToProps)(Reviews)
