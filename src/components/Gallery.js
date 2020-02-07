import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const ImgContainer= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const Img= styled.img`
  max-height: 100%;
  max-width: 100%;
`
const ImgDetails= styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`

class Gallery extends Component {
  render() {
    const { imgs }= this.props
    const imgsArray= Object.keys(imgs);
    return (
      <Container>
        <h2> Gallery </h2>
        {imgsArray.map((i)=> {
          return (
            <ImgContainer key={imgs[i].character}>
              <Img src={`${imgs[i].url}`} alt={imgs[i].alt}/>
              <ImgDetails>
                <h3> Character: </h3>
                <p>{`${imgs[i].character}`}</p>
                <h3> Series: </h3>
                <p>{`${imgs[i].series}`}</p>
              </ImgDetails>
            </ImgContainer>
          )
        })}
      </Container>
    )
  }
}
function mapStateToProps({ imgs },props) {
  return {
    imgs,
  }
}

export default connect(mapStateToProps)(Gallery)
