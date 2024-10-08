const body = document.querySelector('body')
const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.navbar__menu')
const mobileNavItems = document.querySelectorAll('.navbar__menu-item')
const currentRepairsBtn = document.querySelector('.current-repairs')
const airConditiongServiceBtn = document.querySelector('.air-conditioning-service')
const automotiveChemistryBtn = document.querySelector('.automotive-chemistry')
const yearSpan = document.querySelector('.actual-year')
const contactSection = document.querySelector('.contact')
const ctaButton = document.querySelector('.welcome-box-cta')

const handleNav = () => {
	if (burgerBtn.classList.contains('is-active')) {
		closeNav()
	} else {
		mobileNav.classList.add('show-mobile-nav')
		handleNavItemsAnimation()
		handleBurgerAnimation()
		handleScroll()
	}
}

const closeNav = () => {
	burgerBtn.classList.remove('is-active')
	mobileNav.classList.remove('show-mobile-nav')
	removeNavItemsAnimation()
	handleScroll()
}

const handleBurgerAnimation = () => {
	burgerBtn.classList.toggle('is-active')
}

const handleScroll = () => {
	if (burgerBtn.classList.contains('is-active')) {
		body.classList.add('block-scroll')
	} else {
		body.classList.remove('block-scroll')
	}
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	mobileNavItems.forEach(item => {
		item.classList.add('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const removeNavItemsAnimation = () => {
	mobileNavItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

const moveToContact = () => {
	contactSection.scrollIntoView({ behavior: 'smooth' })
}

const moveToCurrentRepairs = () => {
	window.location.href = 'uslugi.html#naprawy-biezace'
}

const moveToAirService = () => {
	window.location.href = 'uslugi.html#serwis-klimatyzacji'
}

const moveToAutmotiveChemistry = () => {
	window.location.href = 'uslugi.html#chemia-motoryzacyjna'
}

const setYear = () => {
	const currentYear = new Date().getFullYear()

	if (yearSpan) {
		yearSpan.textContent = currentYear
	}
}

burgerBtn.addEventListener('click', handleNav)
mobileNavItems.forEach(item => {
	item.addEventListener('click', closeNav)
})
ctaButton.addEventListener('click', moveToContact)
currentRepairsBtn.addEventListener('click', moveToCurrentRepairs)
airConditiongServiceBtn.addEventListener('click', moveToAirService)
automotiveChemistryBtn.addEventListener('click', moveToAutmotiveChemistry)
document.addEventListener('DOMContentLoaded', setYear)
