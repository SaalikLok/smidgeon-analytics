import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Title } from "bloomer"
import fetchWebsite from "../../data/fetchWebsite"
import InstallSnippet from "./InstallSnippet"
import WebsiteDataCharts from "./WebsiteDataCharts"

const WebsiteShowContainer = styled.div`
	margin: auto;
	width: 80%;
`

const WebsiteShow = props => {
	const [website, setWebsite] = useState({})
	const [installed, setInstalled] = useState(false)

	useEffect(() => {
		fetchWebsite(props.match.params.id).then(websiteData => {
			setWebsite(websiteData)
			if (!websiteData.visits.length) {
				setInstalled(false)
			} else {
				setInstalled(true)
			}
		})
	}, [])

	return (
		<WebsiteShowContainer>
			<Title>{website.title}</Title>
			<a target="blank" href={`https://${website.url}`}>
				{website.url}
			</a>
			{installed ? (
				<WebsiteDataCharts visitsData={website.visits} />
			) : (
				<InstallSnippet />
			)}
		</WebsiteShowContainer>
	)
}

export default WebsiteShow
