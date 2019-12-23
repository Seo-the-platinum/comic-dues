import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container= styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  width: 33%;
  @media(min-width: 320px) and (max-width: 600px){
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
  }
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
          Breaking News
        </h2>
      { articles[latestNews] === undefined ? (
        null
      ):(
        <h2>
        {articles[latestNews].title}
        </h2>
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
