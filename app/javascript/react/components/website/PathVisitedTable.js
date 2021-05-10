import React from "react"
import { Table } from "bloomer"

const PathVisitedTable = props => {
	const { data } = props

	const tableRows = data.map(row => {
		return (
			<tr key={row.path_visited}>
				<td>{row.path_visited}</td>
				<td>{row.visits}</td>
			</tr>
		)
	})

	return (
		<div>
      <h3 className="is-size-3">Paths Visited</h3>
      <p>What paths on your website people are visiting</p>
			<Table isBordered isStriped className="mt-4">
				<thead>
					<tr>
						<th>Path</th>
						<th>Visits</th>
					</tr>
				</thead>
				<tbody>{tableRows}</tbody>
			</Table>
		</div>
	)
}

export default PathVisitedTable
