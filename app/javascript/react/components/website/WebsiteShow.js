import { Title } from "bloomer"
import React, { useEffect, useState } from "react"
// import { useParams } from 'react-router-dom'
import fetchWebsite from "../../data/fetchWebsite"

const WebsiteShow = props => {
	const [website, setWebsite] = useState({})

	useEffect(() => {
		fetchWebsite(props.match.params.id).then(websiteData => {
			setWebsite(websiteData)
		})
	}, [])

	return (
		<div>
			<Title>{website.title}</Title>
			<a href={website.url}>{website.url}</a>
		</div>
	)
}

export default WebsiteShow
