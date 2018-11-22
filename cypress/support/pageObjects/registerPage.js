export const registerPage = {
	goToRegisterPage() {
		cy.get('.hidden-sm > .navbar-side > #li_myaccount > .dropdown-toggle')
			.click()
		cy.get('.hidden-sm > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(2) > .go-text-right')
			.click()
	},
	verifyRegisterPage() {
		cy.get('.go-text-right.panel-heading')
			.contains('Sign Up')
	}
}