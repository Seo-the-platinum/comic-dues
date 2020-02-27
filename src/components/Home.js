import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import BreakingNews from './BreakingNews';
import Cow from './Cow'
import Upcoming from './Upcoming'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const CarouselImg= styled.img`
  width: 100%;
  height: 600px;
  @media(min-width: 320px) and (max-width: 600px) {
    height: 400px;
  }
`
const Container= styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  width: 100%;
  justify-content: space-around;
  @media(min-width: 320px) and (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }
`
const CustomCarousel= styled(Carousel)`
  width: 60%;
  @media(min-width: 320px) and (max-width: 600px) {
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
  }
`
const StyledLink= styled(Link)`
  color: white;
`

class Home extends Component {

  render() {
    const { imgs, reviews, articles }= this.props
    const imgsArray= Object.keys(imgs)
    const bannerImgs= (imgsArray.slice(imgsArray.length-1))
    const reviewsArray= Object.keys(reviews).sort(function(a,b) {
      return Date.parse(reviews[a].date) - Date.parse(reviews[b].date)
    })
    const reviewSlide= reviewsArray[reviewsArray.length-1]
    const articlesArray= Object.keys(articles).sort(function(a,b){
      return Date.parse(articles[a].posted)- Date.parse(articles[b].posted)
    })
    const articleSlide= articlesArray[articlesArray.length-1]

    return (
      <Container>
        <CustomCarousel>
          { bannerImgs.map(img=> {
            return (
              <Carousel.Item key={img}>
                <CarouselImg src= {imgs[img].url} alt={imgs[img].alt} key={imgs[img].character} />
                <Carousel.Caption style={{background: 'rgba(0,0,0,.7)',left:'0%', textAlign: 'left'}}>
                  <h3>Cosplay</h3>
                  <StyledLink to='/Gallery'><p> Check out our Gallery of cosplay photos!</p></StyledLink>
                </Carousel.Caption>
              </Carousel.Item>)
            })}
            { reviews[reviewSlide] !== undefined ? (
              <Carousel.Item>
                <CarouselImg src={reviews[reviewSlide].imgUrl} alt='review poster'/>
                <Carousel.Caption style={{background:'rgba(0,0,0,.7)',left: '0%', textAlign: 'left'}}>
                  <h3>Reviews</h3>
                  <StyledLink to ='/Reviews'><p> Reviews of recent movies</p></StyledLink>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null}
            { articles[articleSlide] !== undefined ? (
              <Carousel.Item>
                <CarouselImg src={articles[articleSlide].bannerImg} alt='article poster'/>
                <Carousel.Caption style={{background:'rgba(0,0,0,.7)',left: '0%', textAlign: 'left'}}>
                  <h3>Articles</h3>
                  <StyledLink to ='/News'><p> Articles written by the staff</p></StyledLink>
                </Carousel.Caption>
              </Carousel.Item>
            ): null }
        </CustomCarousel>
        <BreakingNews/>
        <Cow />
        <Upcoming />
     </Container>
    )
  }
}

function mapStateToProps({ imgs, articles, reviews }) {
  return {
    imgs,
    articles,
    reviews,
  }
}
export default connect(mapStateToProps)(Home)
