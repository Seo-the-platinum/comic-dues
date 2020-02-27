import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container= styled.div`
  align-items: center;
  display:flex;
  flex-direction: column;
  width: 100%;
`
const EventsList= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`
const EventContainer= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

class Upcoming extends Component {

  render() {
    const { events }= this.props

    const orderedEvents= Object.keys(events).slice(0,3).sort(function(a,b){

      return Date.parse(events[a].dates[0])-Date.parse(events[b].dates[0])
    })
    return (
      <Container>
        <h2> Upcoming Events</h2>
        <EventsList>
        { orderedEvents.map((e)=>{
           return Date.parse(events[e].dates[0]) > Date.now() ?
           <EventContainer key={`${e}`}>
             <h3>{events[e].event}</h3>
             <img src={`${events[e].img}`} alt='venue'/>
             <p>{`From ${events[e].dates[0]} to ${events[e].dates[2]}`}</p>
           </EventContainer>
           :
           null
        })}
        </EventsList>
      </Container>
    )
  }
}

function mapStateToProps({events}) {
  return {
    events,
  }
}

export default connect(mapStateToProps)(Upcoming)
