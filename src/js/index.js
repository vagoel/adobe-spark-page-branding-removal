import removeAdobeSparkPageBranding from './WatermarkRemover'

const adobeSparkUrl = process.env.ADOBE_SPARK_PAGE_URL

window.addEventListener('DOMContentLoaded', () => {
	removeAdobeSparkPageBranding(adobeSparkUrl)
})
