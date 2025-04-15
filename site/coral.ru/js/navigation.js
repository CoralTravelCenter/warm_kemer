import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const navigation = document.querySelector('section.navigation')
	const hasToBeSticky = navigation.closest('div')
	hasToBeSticky.style.position = 'sticky'
	hasToBeSticky.style.top = '16px'
	hasToBeSticky.style.zIndex = '10'

	const navItems = document.querySelectorAll('[data-nav]')
	const sections = document.querySelectorAll('[data-section]')

	const sectionMap = {}
	sections.forEach(section => {
		sectionMap[section.dataset.section] = section
	})

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const sectionName = entry.target.dataset.section
					console.log(sectionName)

					navItems.forEach(nav => {
						const isActive = nav.dataset.nav === sectionName
						nav.classList.toggle('active', isActive)

						if (isActive) {
							// Скроллим пункт меню в видимую область, если нужно
							nav.scrollIntoView({
								behavior: 'smooth',
								block: 'nearest',
								inline: 'center',
							})
						}
					})
				}
			})
		},
		{
			threshold: 0.5,
		}
	)

	sections.forEach(section => observer.observe(section))

	navItems.forEach(nav => {
		nav.addEventListener('click', () => {
			const section = sectionMap[nav.dataset.nav]
			section.scrollIntoView({ behavior: 'smooth' })
		})
	})
})
