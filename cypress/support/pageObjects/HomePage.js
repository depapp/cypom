import Header from './Header'
import SignInPage from './SignInPage'
import RegisterPage from './RegisterPage';

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

	register() {
		const register = new RegisterPage()
		return register
	}

	signIn() {
		const signIn = new SignInPage()
		return signIn
	}
}

export default HomePage