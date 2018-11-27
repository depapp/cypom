import HomePage from '../support/pageObjects/HomePage'
const home = new HomePage()
const register = home.register()
const signIn = home.signIn()

import Chance from 'chance'
const chance = new Chance()

const email = chance.email({domain: 'mailinator.com'})
const password = chance.string()

describe('Authentication', () => {
	beforeEach(() => {
		home.goToSignIn()
	})

	it('register with valid credentials', () => {
		register
			.fillEmail(email)
			.clickCreate()
		register
			.waitUntilResponseIsOk()
		register
			.pickGenderAndName(chance.pickone(['#id_gender1', '#id_gender2']))
			.fillPassword(password)
			.pickDay(chance.integer({ min: 1, max: 31 }).toString())
			.pickMonth(chance.month())
			.pickYear(chance.year({ min: 1900, max: 1999 }))
			.fillCompany(chance.company())
			.fillAddress(chance.address({ short_suffix: true }))
			.fillCity(chance.city())
			.pickState(chance.state({ country: 'us', full: true }))
			.fillPostcode(chance.zip())
			.fillPhone(chance.phone({ formatted: true }))
			.submit()
		register
			.verifyCreatedAccount('My account')
	})

	it('sign in with correct credentials', () => {
		signIn
			.fillEmail(email)
      .fillPassword(password)
      .submitCredentials()
    signIn
			.verifyLoggedIn('Welcome to your account. Here you can manage all of your personal information and orders.')
		
	})

	it('sign in with incorrect credentials', () => {
		signIn
			.fillEmail(email)
      .fillPassword('12345')
      .submitCredentials()
    signIn
			.verifyLoginFailed('Authentication failed.')
	})
})