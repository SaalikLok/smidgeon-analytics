const postNewWebsite = async formPayload => {
	try {
		const response = await fetch("/api/v1/websites", {
			credentials: "same-origin",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(formPayload),
		})
		if (!response.ok) {
			const errorsBody = await response.json()
			const errorObject = errorsBody
			const errorMessage = `${response.status} (${response.statusText})`
			const error = new Error(errorMessage)
			return errorObject
		}
		const responseBody = await response.json()
		return responseBody
	} catch (error) {
		console.error(`Error in fetch: ${error.message}`)
	}
}

export default postNewWebsite
