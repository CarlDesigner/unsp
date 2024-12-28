import type { CookieConsentConfig } from 'vanilla-cookieconsent'
document.documentElement.classList.add('cc--darkmode')
export const config: CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: 'bar inline',
			position: 'bottom',
			equalWeightButtons: false,
			flipButtons: true
		},
		preferencesModal: {
			layout: 'box',
			position: 'left',
			equalWeightButtons: true,
			flipButtons: false
		}
	},
	categories: {
		necessary: {
			readOnly: true
		},
		functionality: {},
		analytics: {
			services: {
				ga4: {
					label:
						'<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
					onAccept: () => {
						console.log('ga4 accepted')
						// TODO: load ga4
					},
					onReject: () => {
						console.log('ga4 rejected')
					},
					cookies: [
						{
							name: /^_ga/
						}
					]
				},
				another: {
					label: 'Another one (dummy)'
				}
			}
		}
	},
	language: {
		default: 'en',
		autoDetect: 'browser',
		translations: {
			en: {
				consentModal: {
					title: 'Hola! es momento de las galletas🍪',
					description:
						'Este sitio web utiliza Cookies para garantizar que tenga la mejor experiencia en nuestro sitio web. ¿Estás de acuerdo con esto?',
					acceptAllBtn: 'Aceptar todo',
					acceptNecessaryBtn: 'Rechazar todo',
					showPreferencesBtn: 'Gestionar preferencias',
					footer:
						'<a href="/politica-privacidad">Política de privacidad</a>\n<a href="/cookies">Aviso Legal</a>'
				},
				preferencesModal: {
					title: 'Preferencias de Consentimiento',
					acceptAllBtn: 'Aceptar todo',
					acceptNecessaryBtn: 'Rechazar todo',
					savePreferencesBtn: 'Guardar preferencias',
					closeIconLabel: 'Cerrar modal',
					serviceCounterLabel: 'Servicios',
					sections: [
						{
							title: 'Uso de Cookies',
							description:
								'Para poder ofrecerte una mejor experiencia de usuario, obtener datos analíticos, almacenar y recuperar información sobre tus hábitos de navegación o de tu equipo y desarrollar su actividad, este sitio web Un Simple Programador, utiliza cookies propias y de terceros.'
						},
						{
							title:
								'Cookies estrictamente necesarias que utiliza este sitio <span class="pm__badge">Siempre Habilitado</span>',
							description:
								'Cookies técnicas: Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales Cookies de personalización: Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc. Cookies de análisis: Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza tu navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos. Cookies publicitarias: Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar tus hábitos de navegación en Internet y podemos mostrarte publicidad relacionada con tu perfil de navegación.Cookies de publicidad comportamental: Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo. Cookies de terceros: Esta web Monetizatu Tiempo puede utilizar servicios de terceros que, por cuenta de Google, recopilarán información con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad del sitio web y otros servicios de Internet.',
							linkedCategory: 'necessary'
						},
						{
							title: 'Más información',
							description:
								'Para cualquier consulta en relación con la política sobre cookies y sus opciones, porfavor <a class="cc__link" href="https://unsimpleprogramador.com/contact">contáctenos</a>.'
						}
					]
				}
			}
		}
	},
	disablePageInteraction: true
}
