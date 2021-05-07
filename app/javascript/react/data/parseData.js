import dayjs from "dayjs"

export const parseVisitData = rawData => {
	const data = rawData.map(visit => {
		return {
			created_at: dayjs(visit.created_at).format("MMM YYYY"),
			referring_url: visit.referring_url,
			path_visited: visit.path_visited,
		}
	})
	return data
}

export const parseChartData = rawData => {
	let tempChartData = {}
	for (let { created_at } of rawData) {
		tempChartData[created_at] = {
			created_at,
			visits: tempChartData[created_at]
				? tempChartData[created_at].visits + 1
				: 1,
		}
	}

	return Object.values(tempChartData)
}
