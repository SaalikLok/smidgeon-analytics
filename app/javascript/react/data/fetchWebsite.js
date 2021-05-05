const fetchWebsite = async websiteId => {
	try {
		const response = await fetch(`/api/v1/websites/${websiteId}`)
		if (!response.ok) {
			const errorMessage = `${response.status} (${response.statusText})`
			const error = new Error(errorMessage)
			throw error
		}
		const responseBody = await response.json()
		return responseBody.website
	} catch (error) {
		console.error(`Error in fetch: ${error.message}`)
	}
}

export default fetchWebsite
