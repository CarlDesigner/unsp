interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'CarlDesigner', // Site author
	title: 'Un Simple Programador', // Site title.
	description: ' Aprende a programar y desarrollar sitios web desde cero. Tutoriales y proyectos prácticos para todos los niveles.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Comparte este post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
