import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import BreakingNews from './BreakingNews';
import Cow from './Cow'
import Upcoming from './Upcoming'
import { connect } from 'react-redux';

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

class Home extends Component {

  render() {
    const { imgs }= this.props
    const imgsArray= Object.keys(imgs)
    const bannerImgs= (imgsArray.slice(imgsArray.length-3))
    return (
      <Container>
        <CustomCarousel>
          { bannerImgs.map(img=> {
            return (
              <Carousel.Item key={img}>
                <CarouselImg src= {imgs[img].url} alt={imgs[img].alt} key={imgs[img].character} />
              </Carousel.Item>)
            })}
        </CustomCarousel>
        <BreakingNews/>
        <Cow />
        <Upcoming />
     </Container>
    )
  }
}

function mapStateToProps({imgs}) {
  return {
    imgs,
  }
}
export default connect(mapStateToProps)(Home)
