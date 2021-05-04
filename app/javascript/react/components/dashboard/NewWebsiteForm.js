import React, { useState } from "react"
import { Button, Control, Field, Help, Input, Label, Title } from "bloomer"
import { Formik } from "formik"
import postNewWebsite from "../../data/postNewWebsite"

const NewWebsiteForm = () => {
	const isURL = str => {
		const pattern = new RegExp(
			"^(https?:\\/\\/)?" +
				"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
				"((\\d{1,3}\\.){3}\\d{1,3}))" +
				"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
				"(\\?[;&a-z\\d%_.~+=-]*)?" +
				"(\\#[-a-z\\d_]*)?$",
			"i"
		)
		return !!pattern.test(str)
	}

	const formValidation = values => {
		const errors = {}
		if (!values.title) {
			errors.title = "A title is required!"
		}
		if (!values.url) {
			errors.url = "A url is required!"
		} else if (!isURL(values.url)) {
			errors.url = "Enter a full, valid url!"
		}

		return errors
	}

	return (
		<div>
			<Title>
				<i className="fas fa-feather"></i> Add a New Website
			</Title>
			<Formik
				initialValues={{ title: "", url: "" }}
				validate={formValidation}
				onSubmit={(values, { setSubmitting }) => {
				  const newSite = postNewWebsite(values)
          console.log(newSite)
					setSubmitting(false)
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
									placeholder="Your website's title"
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
							<Label>URL</Label>
							<Control>
								<Input
									name="url"
									type="text"
									placeholder="Enter a valid https:// address"
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
