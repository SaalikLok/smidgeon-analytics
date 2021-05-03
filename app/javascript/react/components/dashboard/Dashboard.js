import { Columns, Container, Title } from 'bloomer'
import React, {useState, useEffect} from 'react'
import fetchUserWebsites from '../../data/fetchUserWebsites'
import WebsiteTile from './WebsiteTile'

const Dashboard = () => {
  const [websites, setWebsites] = useState([])

  useEffect(() => {
    fetchUserWebsites()
    .then((websiteData) => {
      setWebsites(websiteData)
    })
  }, [])

  const websiteTiles = websites.map( website => {
    return <WebsiteTile title={website.title}/>
  })

  return (
    <Container>
      <Title hasTextAlign="centered">My Websites</Title>
      <Columns>
        {websiteTiles}
      </Columns>
    </Container>
  )
}

export default Dashboard
