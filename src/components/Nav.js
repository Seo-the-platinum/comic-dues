import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container= styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-around;
  width: 33%;
  @media(min-width: 320px) and (max-width: 600px) {
    width: 100%;
  }
`
const StyledLink= styled(NavLink)`
  color: white;
  display: flex;
  font-family: 'Lobster', cursive;
  font-size: 18px;
  text-decoration: none;
`

class Nav extends Component {
  render() {
    return (
      <Container>
        <StyledLink to='/'> Home </StyledLink>
        <StyledLink to='/News'> News </StyledLink>
        <StyledLink to='/Gallery'> Gallery </StyledLink>
        <StyledLink to='/Reviews'> Reviews</StyledLink>
      </Container>
    )
  }
}

export default Nav
