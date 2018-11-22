import HomePage from '../support/pageObjects/HomePage'

describe('Sign In', () => {
  it.only('should show an error message on empty input', () => {
    const home = new HomePage();
    home.visit();

    const signIn = home.goToSignIn();

    signIn.submit();

    signIn.getEmailError()
      .should('exist')
      .contains('Email is required');

    signIn
      .getPasswordError()
      .should('exist')
      .contains('Password is required');
  });
  
  it('should sign in with correct credentials', () => {
    const home = new HomePage();
    home.visit();

    const signIn = home.goToSignIn();

    signIn
      .fillEmail('john@doe.com')
      .fillPassword('123456')
      .submit();

    home.getUserAvatar().should('exist');
  });
});