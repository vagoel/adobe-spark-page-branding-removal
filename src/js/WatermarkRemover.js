import styles from '../css/spark-override.cssx'

const modifyImagesPath = (response, url) => {
	let modifiedResponse = response
		.replaceAll('href="images/', `href=\"${url}/images/`)
		.replaceAll('src="images/', `src=\"${url}/images/`)
		.replaceAll(
			'style="background-image: url(images/',
			`style=\"background-image: url(${url}/images/`
		)
		.replaceAll(
			'style="background-image:url(images/',
			`style=\"background-image:url(${url}/images/`
		)

	return modifiedResponse
}

const appendStyles = (styles) => {
	/* Create style element */
	let css = document.createElement('style')

	if (css.styleSheet) css.styleSheet.cssText = styles
	else css.appendChild(document.createTextNode(styles))

	/* Append style to the head element */
	document.getElementsByTagName('head')[0].appendChild(css)
}

const removeAdobeSparkPageBranding = (adobeSparkUrl) => {
	fetch(adobeSparkUrl)
		.then((response) => {
			return response.text()
		})
		.then((response) => {
			let modifiedResponse = modifyImagesPath(response, adobeSparkUrl)
			document.open()
			document.write(modifiedResponse)
			document.close()
			appendStyles(styles)
		})
}

export default removeAdobeSparkPageBranding
