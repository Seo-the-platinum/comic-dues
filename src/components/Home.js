import React, { Component } from 'react';
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

const CarouselImg= styled.img`
  width: 100%;
  height: 600px;
`
const Container= styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  width: 100%;
  justify-content: space-around;
`
const CustomCarousel= styled(Carousel)`
  width: 66%;
`
const BreakingContainer= styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  width: 33%;
`

class Home extends Component {
  render() {
    return (
      <Container>
        <CustomCarousel>
          <Carousel.Item>
            <CarouselImg src='images/mario_bros_crop.JPG' alt= 'best mario bros ever' />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg src='images/adventure_time_resized.JPG' alt= 'best mario bros ever' />
          </Carousel.Item>
        </CustomCarousel>
        <BreakingContainer>
          <h2>Breaking News</h2>
        </BreakingContainer>
     </Container>
    )
  }
}
export default Home
