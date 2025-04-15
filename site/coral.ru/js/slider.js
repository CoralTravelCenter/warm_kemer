import { hostReactAppReady, mediaMatcher } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const swiperEl = document.querySelectorAll('swiper-container')
	swiperEl.forEach(swiper => {
		mediaMatcher(768, isTablet => {
			isTablet
				? swiper.setAttribute('slides-per-view', '2')
				: swiper.setAttribute('slides-per-view', '1')
		})
		mediaMatcher(1280, isTablet => {
			isTablet
				? swiper.setAttribute('slides-per-view', '4')
				: swiper.setAttribute('slides-per-view', '1')
		})
	})
})
