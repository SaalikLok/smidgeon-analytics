import React from 'react'
import styled from '@emotion/styled'
import {Box} from 'bloomer'

const Para = styled.p`
  color: green;
`

export const App = (props) => {
  return (
    <Box>
      <h1 className="title">This is a Bulma Title</h1>
      <Para>Hello World, from Emotion</Para>
    </Box>
  )
}

export default App
