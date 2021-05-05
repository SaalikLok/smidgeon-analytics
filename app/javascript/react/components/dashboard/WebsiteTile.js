import React from "react"
import { Card, CardContent, CardHeader, CardHeaderTitle, Column } from "bloomer"
import styled from "@emotion/styled"
import _ from "lodash"
import { Link } from "react-router-dom"

const Tile = styled.div`
	cursor: pointer;
	border: 3px solid #fffbf4;
	transition: border 0.4s ease-in-out;

	:hover {
		border: 3px solid #3469d4;
	}
`

const WebsiteTile = props => {
	const { title, id } = props

	return (
		<Column isSize={{ mobile: 6, default: 4 }}>
			<Link to={`/websites/${id}`}>
				<Tile>
					<Card>
						<CardHeader>
							<CardHeaderTitle>{_.capitalize(title)}</CardHeaderTitle>
						</CardHeader>
						<CardContent hasTextAlign="centered">
							<p className="is-size-2">###</p>
							<p>views this week</p>
						</CardContent>
					</Card>
				</Tile>
			</Link>
		</Column>
	)
}

export default WebsiteTile
