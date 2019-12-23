import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'
import News from './components/News'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Loading from './components/Loading'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'


const Container= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavContainer= styled.div`
  background: black;
  display: flex;
  justify-content: flex-end;
  margin-left: 2%;
  margin-right: 2%;
  width: 100%;
`
const HomeContainer= styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  width: 100%;
  height: 100%;
  @media(min-width: 320px) and (max-width: 600px) {
    height: 100%;
  }
`
const NewsContainer= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
`
const GalleryContainer= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
`
const ReviewsContainer= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
`
class App extends Component {
  state ={
    data: false,
  }
  componentDidMount() {
      this.props.dispatch(handleInitialData())
      .then(this.setState(currState=> ({
        currState,
        data: true,
      })))
  }
  render() {
  const { data }= this.state
  console.log(data)
  if (data === false) {
    return(
      <Container>
        <Router>
          <Route path='/' component={ Loading }/>
        </Router>
      </Container>
    )
  }
  return (
    <Container>
      <Router>
        <NavContainer>
          <Route path='/' component={ Nav }/>
        </NavContainer>
        <HomeContainer>
          <Route exact path='/' component={ Home }/>
        </HomeContainer>
        <NewsContainer>
          <Route exact path='/news' component= { News }/>
        </NewsContainer>
        <GalleryContainer>
          <Route exact path='/Gallery' component= { Gallery }/>
        </GalleryContainer>
        <ReviewsContainer>
          <Route exact path='/Reviews' component= { Reviews }/>
        </ReviewsContainer>
      </Router>
    </Container>
  );
 }
}

function mapStateToProps({imgs,reviews,articles}, props) {
  return {
    imgs,
    reviews,
    articles,
  }
}
export default connect(mapStateToProps)(App);
