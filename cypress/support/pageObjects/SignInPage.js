class SignInPage {

	// visit() {
	//   cy.visit('/login');
	// }
  
	// getEmailError() {
	//   return cy.get(`[data-testid=SignInEmailError]`);
	// }
  
	// getPasswordError() {
	//   return cy.get(`[data-testid=SignInPasswordError]`);
	// }
  
	fillEmail(value) {
	  const field = cy.get(':nth-child(1) > .form-control')
	  field.clear()
	  field.type(value)
	  
	  return this
	}

	fillPassword(value) {
		const field = cy.get('.panel-body > :nth-child(2) > .form-control')
		field.clear()
		field.type(value)
		
		return this
	  }

	  checkRememberMe() {
		cy.get('#remember-me').click()
	  }
  
	// fillPassword(value) {
	//   const field = cy.get(`[data-testid=SignInPasswordField]`);
	//   field.clear();
	//   field.type(value);
	  
	//   return this;
	// }
	
	// submit() {
	//   const button = cy.get('.hidden-sm > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(2) > .go-text-right')
	//   button.click();
	// }
  }
  
  export default SignInPage