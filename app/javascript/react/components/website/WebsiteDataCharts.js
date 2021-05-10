import React from "react"
import styled from "@emotion/styled"
import PathVisitedTable from "./PathVisitedTable"
import ReferralTable from "./ReferralTable"
import VisitChart from "./VisitChart"
import { parsePathData, parseReferralData, parseVisitData, parseChartData } from "../../data/parseData"

const ChartsContainer = styled.div`
	font-family: "Rubik", sans-serif;
  margin: 2em;
`

const TablesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5em;
  gap: 1em;
`

const WebsiteDataCharts = props => {
	const { visitsData } = props

  const parsedData = parseVisitData(visitsData)
	const chartData = parseChartData(parsedData)
  const referralData = parseReferralData(parsedData)
  const pathData = parsePathData(parsedData)

	return (
		<ChartsContainer>
			<VisitChart data={chartData} />
      <TablesContainer>
        <ReferralTable data={referralData} />
        <PathVisitedTable data={pathData} />
      </TablesContainer>
		</ChartsContainer>
	)
}

export default WebsiteDataCharts
