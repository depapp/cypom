class Header {

  getSignInLink() {
    cy.visit('/login')
		return
  }
  
  getRegisterLink() {
    cy.visit('/register')
		return
  }
  
}

export default Header