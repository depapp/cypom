import Header from './Header'
import SignInPage from './SignInPage'

class HomePage {
  constructor() {
    this.header = new Header()
  }

  goToRegister() {
    this.header.getRegisterLink()
  }

  goToSignIn() {
    this.header.getSignInLink()
  }

  signIn() {
    const signIn = new SignInPage()
    return signIn
  }
}

export default HomePage