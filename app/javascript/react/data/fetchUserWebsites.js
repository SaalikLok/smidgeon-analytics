const fetchUserWebsites = async () => {
  try {
    const response = await fetch("/api/v1/websites")
    if(!response.ok){
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const responseBody = await response.json()
    debugger
    return responseBody.websites
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`)
  }
}

export default fetchUserWebsites