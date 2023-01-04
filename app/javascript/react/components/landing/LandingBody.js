import React from "react"
import screenshot from "../../../../assets/images/screenshot.png"
import styled from "@emotion/styled"

const Screenshot = styled.img`
	display: block;
	border: 4px #20396b dashed;
`

const QuestionDiv = styled.div`
	margin-top: 4em;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 2em;
`

const LandingBodyContainer = styled.div`
	max-width: 70%;
	margin: 5em auto;
`

const LandingBody = () => {
	return (
		<LandingBodyContainer>
			<Screenshot src={screenshot} />
			<QuestionDiv>
				<h2 className="is-size-3">FAQ</h2>
				<div>
					<h3 className="is-size-5">
						What about *this other* awesome feature?
					</h3>
					<p>
						Smidgeon is small by design. Of course, lots more can be added to it
						(feel free to see{" "}
						<a href="https://github.com/SaalikLok/smidgeon-analytics">GitHub</a>{" "}
						for how to contribute) but the spirit behind this project is to
						remain intentionally focused on a few core features. There are
						plenty of awesome analytics tools out there if you need something
						more powerful.
					</p>
				</div>
				<div>
					<h3 className="is-size-5">How was this built?</h3>
					<p>
						Smidgeon Analytics was <a href="https://saaliklok.com">Saalik's</a>{" "}
						capstone project during his time at Launch Academy. It's built with
						React, Ruby on Rails, and a whole lot of fun.
					</p>
				</div>
			</QuestionDiv>
		</LandingBodyContainer>
	)
}

export default LandingBody
