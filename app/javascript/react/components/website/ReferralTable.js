import React from "react"
import { Table } from "bloomer"

const ReferralTable = props => {
	const { data } = props

	const tableRows = data.map(row => {
		let referring_url
		if (row.referring_url === null) {
			referring_url = "direct"
		} else if (row.referring_url === "") {
			referring_url = "/"
		} else {
			referring_url = row.referring_url
		}

		return (
			<tr key={row.referring_url}>
				<td>{referring_url}</td>
				<td>{row.visits}</td>
			</tr>
		)
	})

	return (
		<div>
      <h3 className="is-size-3">Referring Websites</h3>
      <p>Where people are clicking links to get to your website</p>
			<Table isBordered isStriped className="mt-4">
				<thead>
					<tr>
						<th>Referral</th>
						<th>Visits</th>
					</tr>
				</thead>
				<tbody>{tableRows}</tbody>
			</Table>
		</div>
	)
}

export default ReferralTable
