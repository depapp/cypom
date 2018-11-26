import HomePage from '../support/pageObjects/HomePage'

import Chance from 'chance'
const chance = new Chance()

describe('Sign In', () => {
  it('should sign in with correct credentials', () => {
    
    const home = new HomePage()
    home.goToSignIn()

    const signIn = home.signIn()
    signIn
      .fillEmail(chance.email())
      .fillPassword(chance.string())
      .checkRememberMe()
  })
})