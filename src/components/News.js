import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const ArticleContainer= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const Img= styled.img`
  display: flex;
  max-width: 100%;
`
const CreditsContainer= styled.div`
  display: flex;
  flex-direction: column;
`
const AuthorContainer= styled.div`
  display: flex;
  justify-content: space-around;
`
const Body= styled.div`
  display: flex;
  flex-direction: column;
`

class News extends Component {
  render() {
    const { articles }= this.props
    const articlesArray= Object.keys(articles).sort(function(a,b) {
      return Date.parse(articles[b].posted)- Date.parse(articles[a].posted)
    })
  console.log(articlesArray);
    return (
      <Container>
        <h2>News</h2>
        { articlesArray.map((a)=> {
          return (
            <ArticleContainer key={articles[a].title}>
              <Img src={`${articles[a].img}`} alt={`${articles[a].alt}`}/>
              <CreditsContainer>
              <h3>{articles[a].title}</h3>
              <AuthorContainer>
              <h6>{articles[a].author}</h6>
              <p>{articles[a].posted}</p>
              </AuthorContainer>
              </CreditsContainer>
              <Body>
                <p>{`${articles[a].body}`}</p>
              </Body>
            </ArticleContainer>
          )
        })}
      </Container>
    )
  }
}

function mapStateToProps({ articles }, props) {
  return {
    articles,
  }
}

export default connect(mapStateToProps)(News)
