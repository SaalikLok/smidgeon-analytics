import { Button, Columns, Container, Title } from 'bloomer'
import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
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

  if(!websites){
    window.location.href = "/users/sign_in"
    return null
  }

  const websiteTiles = websites.map( website => {
    return <WebsiteTile key={website.id} title={website.title} />
  })

  return (
    <Container>
      <Title hasTextAlign="centered"><i className="fas fa-palette"></i> My Websites</Title>
      <Columns>
        {websiteTiles}
      </Columns>
      <Link to="/websites/new">
        <Button isColor="info">Add a Website</Button>
      </Link>
    </Container>
  )
}

export default Dashboard
