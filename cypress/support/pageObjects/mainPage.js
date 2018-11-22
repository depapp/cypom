export const mainPage = {
	verifyMainPage() {
		cy.url()
			.should('eq', 'https://www.phptravels.net/')
	}
}