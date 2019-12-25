import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container= styled.div`
  align-items: center;
  display: flex;
  font-family: 'lobster',cursive;
  flex-direction: column;
  text-align: center;
  width: 100%;
`
const Details= styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
  width: 100%;
`
  class Cow extends Component {
    render() {
      const { cow }= this.props
      return (
        <Container>
          <h2> Cosplayer of the Week</h2>
          <img src={ cow.img } alt={ cow.alt }/>
          <Details>
            <p> Name: {cow.talent}</p>
            <p> Handle: {cow.handle}</p>
            <p>{cow.character} from {cow.series}</p>
          </Details>
        </Container>
      )
    }
  }

function mapStateToProps({cow}) {
  return {
    cow,
  }
}
export default connect(mapStateToProps)(Cow)
