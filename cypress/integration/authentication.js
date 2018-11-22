import { mainPage } from '../support/pageObjects/mainPage'
import { registerPage } from '../support/pageObjects/registerPage'

describe('My Store - Automation Practice', () => {
	context('Authentications', () => {
		beforeEach(() => {
			cy.visit('/')
			mainPage.verifyMainPage()
		})

		it('Register with Valid Credentials', () => {
			registerPage.goToRegisterPage()
			registerPage.verifyRegisterPage()
		})
	})
})