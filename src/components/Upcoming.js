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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`
const EventContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

class Upcoming extends Component {

  render() {
    const { events }= this.props

    const orderedEvents= Object.keys(events).slice(0,3).sort(function(a,b){

      return events[a].dates[0]-events[b].dates[0]
    })
    console.log(orderedEvents)
    return (
      <Container>
        <h2> Upcoming Events</h2>
        <EventsList>
        { orderedEvents.map((e)=>{
           return events[e].dates[0] > Date.now() ?
           <EventContainer key={`${e}`}>
           <h3>{events[e].event}</h3>
           <img src={`${events[e].img}`} alt='venue'/>
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
