import { Title } from "bloomer"
import React, { useEffect, useState } from "react"
import fetchWebsite from "../../data/fetchWebsite"
import InstallSnippet from "./InstallSnippet"
import VisitChart from "./VisitChart"

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
		<div>
			<Title>{website.title}</Title>
			<a href={website.url}>{website.url}</a>
			{installed ? <VisitChart rawData={website.visits} /> : <InstallSnippet />}
		</div>
	)
}

export default WebsiteShow
