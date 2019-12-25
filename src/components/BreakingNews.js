import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Lobster', cursive;
  width: 40%;
  @media(min-width: 320px) and (max-width: 600px){
    margin-top: 10px;
    width: 100%;
  }
`
const Doc= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`

class BreakingNews extends Component {

  render() {
    const { articles }= this.props
    const articlesArray= Object.keys(articles)
    const latestNews= articlesArray[articlesArray.length-1]

    console.log(articles[latestNews])
    return(
      <Container>
        <h2>
          Breaking News!
        </h2>
      { articles[latestNews] === undefined ? (
        null
      ):(
        <Doc>
          <h2>
            {articles[latestNews].title}
          </h2>
          <p>
            {articles[latestNews].body}
          </p>
        </Doc>
      )}
      </Container>
    )
  }
}

function mapStateToProps({ articles }) {
  return {
    articles,
  }
}
export default connect(mapStateToProps)(BreakingNews)
