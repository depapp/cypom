class SignInPage {

	fillEmail(value) {
		const field = cy.get('#email')
		field.clear()
		field.type(value)
		return this
	}

	fillPassword(value) {
		const field = cy.get('#passwd')
		field.clear()
		field.type(value)
		return this
	}

	submitCredentials() {
		const button = cy.get('#SubmitLogin')
		button.click()
	}

	verifyLoggedIn(value) {
		const field = cy.get('.info-account')
		field.contains(value)
		return this
	}

	verifyLoginFailed(value) {
		const field = cy.get('#center_column > :nth-child(2)')
		field.contains(value)
		return this
	}

}

export default SignInPage