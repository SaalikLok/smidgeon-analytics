const sendVisitToSmidgeon = async (data) => {
	try {
		const response = await fetch("https://smidgeon-analytics.herokuapp.com/api/v1/visits", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(data),
		})
		if (response.ok) {
			const body = await response.json()
			return body
		} else {
			const errorMessage = response.statusText
			const error = new Error(errorMessage)
			throw error
		}
	} catch (error) {
		console.error(error)
	}
}

window.onload = function () {
	const visitData = {
		origin: window.location.hostname,
		path_visited: window.location.pathname,
		referring_url: document.referrer,
	}

	sendVisitToSmidgeon(visitData)
}