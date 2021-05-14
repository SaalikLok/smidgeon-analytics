const deleteWebsite = async deletePayload => {
	try {
		const response = await fetch(`/api/v1/websites/${deletePayload.id}`, {
			credentials: "same-origin",
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(deletePayload),
		})
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

export default deleteWebsite
