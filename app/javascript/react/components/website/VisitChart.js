import React from "react"
import styled from "@emotion/styled"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import { parseVisitData, parseChartData } from "../../data/parseData"

const ChartContainer = styled.div`
	font-family: "Rubik", sans-serif;
`

const VisitChart = props => {
	const { rawData } = props

	const parsedVisitData = parseVisitData(rawData)
	const chartData = parseChartData(parsedVisitData)

	return (
		<ChartContainer>
			<LineChart width={800} height={400} data={chartData}>
				<Line
					type="monotone"
					dataKey="visits"
					stroke="#3469d4"
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
					strokeWidth={3}
				/>
				<CartesianGrid stroke="#20396B" strokeDasharray="5 5" />
				<XAxis dataKey="created_at" />
				<YAxis />
				<Tooltip />
			</LineChart>
		</ChartContainer>
	)
}

export default VisitChart
