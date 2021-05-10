import styled from "@emotion/styled"
import { Button, Columns, Container, Title } from "bloomer"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import fetchUserWebsites from "../../data/fetchUserWebsites"
import WebsiteTile from "./WebsiteTile"

const CenteredButton = styled.div`
	text-align: center;
`

const Dashboard = () => {
	const [websites, setWebsites] = useState([])

	useEffect(() => {
		fetchUserWebsites().then(websiteData => {
			setWebsites(websiteData)
		})
	}, [])

	if (!websites) {
		window.location.href = "/users/sign_in"
		return null
	}

	const websiteTiles = websites.map(website => {
		return (
			<WebsiteTile key={website.id} title={website.title} id={website.id} />
		)
	})

	return (
		<Container>
			<Title hasTextAlign="centered">
				<i className="fas fa-palette"></i> My Websites
			</Title>
			<Columns isMultiline>{websiteTiles}</Columns>
			<CenteredButton>
				<Link to="/websites/new">
					<Button isColor="info">Add a Website</Button>
				</Link>
			</CenteredButton>
		</Container>
	)
}

export default Dashboard
