import styled from "@emotion/styled"
import { Button, Icon } from "bloomer"
import React from "react"

const ButtonDiv = styled.div`
	margin-top: 3em;
`

const DeleteIcon = styled.i`
	margin: 0 0.3em;
`

const DeleteButton = props => {
	const { deleteThisWebsite, website } = props

	return (
		<ButtonDiv>
			<Button onClick={() => deleteThisWebsite(website)} isColor="light">
				<DeleteIcon className="fas fa-trash-alt"></DeleteIcon> Delete Website
			</Button>
		</ButtonDiv>
	)
}

export default DeleteButton
