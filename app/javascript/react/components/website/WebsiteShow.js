import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Title } from "bloomer"
import fetchWebsite from "../../data/fetchWebsite"
import InstallSnippet from "./InstallSnippet"
import WebsiteDataCharts from "./WebsiteDataCharts"
import DeleteButton from "./DeleteButton"
import deleteWebsite from "../../data/deleteWebsite"

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

	const deleteThisWebsite = websiteData => {
		let confirmation = confirm(
			`Are you sure you want to delete ${website.title}? The website and all visit data will be permanently erased. This action is irreversible.`
		)

		if (confirmation) {
			deleteWebsite(websiteData).then(deletedWebsite => {
				alert(`${deletedWebsite.title} has been deleted.`)
				props.history.push("/websites")
			})
		}
	}

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
			<DeleteButton deleteThisWebsite={deleteThisWebsite} website={website} />
		</WebsiteShowContainer>
	)
}

export default WebsiteShow
