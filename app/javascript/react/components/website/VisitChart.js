import React from "react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

const VisitChart = props => {
	const { data } = props

	return (
		<div>
      <h2 className="is-size-4 mb-4">All Website Visits</h2>
				<LineChart width={800} height={400} data={data}>
					<Line
						type="monotone"
						dataKey="visits"
						stroke="#3469d4"
						margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
						strokeWidth={3}
					/>
					<CartesianGrid stroke="#20396B" strokeDasharray="2" />
					<XAxis dataKey="created_at" />
					<YAxis />
					<Tooltip />
				</LineChart>
		</div>
	)
}

export default VisitChart
