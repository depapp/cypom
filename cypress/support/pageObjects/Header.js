class Header {

	getRegisterLink() {
		cy.visit('?controller=authentication&back=my-account')
		return
	}
	
	getSignInLink() {
		cy.visit('?controller=authentication&back=my-account')
		return
	}
}

export default Header