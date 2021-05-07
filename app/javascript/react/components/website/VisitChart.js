import React from 'react'
import styled from '@emotion/styled'
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import dayjs from 'dayjs'

const ChartContainer = styled.div`
  font-family: "Rubik", sans-serif;
`

const VisitChart = (props) => {
  const { rawData } = props

  // const data = [
  //   {
  //     created_at: "Nov 20",
  //     visits: 10
  //   },
  //   {
  //     created_at: "Dec 20",
  //     visits: 24
  //   },
  //   {
  //     created_at: "Jan 21",
  //     visits: 29
  //   },
  //   {
  //     created_at: "Feb 21",
  //     visits: 55
  //   },
  //   {
  //     created_at: "Mar 21",
  //     visits: 105
  //   },
  //   {
  //     created_at: "Apr 21",
  //     visits: 65
  //   },
  //   {
  //     created_at: "May 21",
  //     visits: 75
  //   },
  // ]

  const parseVisitData = rawData.map( visit => {
    return ({
      created_at: dayjs(visit.created_at).format('MMM YYYY'),
      referring_url: visit.referring_url,
      path_visited: visit.path_visited
    })
  })

  console.log(parseVisitData)

  let tempChartData = {}
  for(let { created_at } of parseVisitData){
    tempChartData[created_at] = {
      created_at,
      visits: tempChartData[created_at] ? tempChartData[created_at].visits + 1 : 1
    }
  }

  let chartData = Object.values(tempChartData)

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
        <Tooltip/>
      </LineChart>
    </ChartContainer>
  )
}

export default VisitChart
