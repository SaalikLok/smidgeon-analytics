import React, { useState } from "react"
import {
	Button,
	Control,
	Field,
	Help,
	Input,
	Label,
	Title,
	Notification,
} from "bloomer"
import { Formik } from "formik"
import postNewWebsite from "../../data/postNewWebsite"
import _ from "lodash"

const NewWebsiteForm = () => {
	const [backendError, setBackendError] = useState(null)

	const isURL = str => {
		const pattern = new RegExp(
			"^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*.?$"
		)
		return !!pattern.test(str)
	}

	const cleanUpURL = url => {
		url = url.toLowerCase()
		url = _.trim(url)
		if (_.endsWith(url, "/")) {
			url = url.slice(0, -1)
		}

		return url
	}

	const formValidation = values => {
		const errors = {}
		if (!values.title) {
			errors.title = "A title is required!"
		}
		if (!values.url) {
			errors.url = "A url is required!"
		} else if (!isURL(values.url)) {
			errors.url = "Enter the url host of your website, like 'test.com'"
		}

		return errors
	}

	let errorOnSubmit
	if (backendError) {
		errorOnSubmit = <Notification isColor="danger">{backendError}</Notification>
	} else {
		errorOnSubmit = null
	}

	return (
		<div>
			{errorOnSubmit}
			<Title>
				<i className="fas fa-feather"></i> Add a New Website
			</Title>
			<Formik
				initialValues={{ title: "", url: "" }}
				validate={formValidation}
				onSubmit={(values, { setSubmitting }) => {
					values.url = cleanUpURL(values.url)
					debugger
					postNewWebsite(values).then(newSite => {
						if (!newSite.errors) {
							setSubmitting(false)
							setBackendError(null)
							window.location.href = "/websites"
						} else {
							setSubmitting(false)
							setBackendError(newSite.errors.url)
						}
					})
				}}
			>
				{({
					values,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<Field>
							<Label>Title</Label>
							<Control>
								<Input
									name="title"
									type="text"
									placeholder="My website's title"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.title}
								/>
								{errors.title ? (
									<Help isColor="danger">{errors.title}</Help>
								) : null}
							</Control>
						</Field>

						<Field>
							<Label>Website</Label>
							<Control>
								<Input
									name="url"
									type="text"
									placeholder="mysite.com"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.url}
								/>
								{errors.url ? <Help isColor="danger">{errors.url}</Help> : null}
							</Control>
						</Field>

						<Field>
							<Control>
								<Button type="submit" isColor="info" disabled={isSubmitting}>
									Add Website
								</Button>
							</Control>
						</Field>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default NewWebsiteForm
