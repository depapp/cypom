class RegisterPage {

    fillEmail(value) {
        const field = cy.get('#email_create')
        field.type(value)
        return this
    }

    clickCreate() {
        const button = cy.get('#SubmitCreate')
        button.click()
    }

    waitUntilResponseIsOk() {
        cy.request({
			method: 'POST',
			url: '/index.php'
		}).then((resp) => {
			expect(resp.status).to.eq(200)
			})
    }

    pickGenderAndName(value) {
        cy.get(value)
			.click()
		if (value == '#id_gender1') {
			cy.get('#customer_firstname')
				.type(chance.first({gender: 'male'}))
			cy.get('#customer_lastname')
				.type(chance.last({gender: 'male'}))
		} else {
			cy.get('#customer_firstname')
				.type(chance.first({gender: 'female'}))
			cy.get('#customer_lastname')
				.type(chance.last({gender: 'female'}))
        }
        return this
    }

    fillPassword(value) {
        const field = cy.get('#passwd')
        field.type(value)
        return this
    }

    pickDay(value) {
        const field = cy.get('#days')
        field.select(value)
        return this
    }

    pickMonth(value) {
        const field = cy.get('#months')
        field.select(value)
        return this
    }

    pickYear(value) {
        const field = cy.get('#years')
        field.select(value)
        return this
    }

    fillCompany(value) {
        const field = cy.get('#company')
        field.type(value)
        return this
    }

    fillAddress(value) {
        const field = cy.get('#address1')
        field.type(value)
        return this
    }
    
    fillCity(value) {
        const field = cy.get('#city')
        field.type(value)
        return this
    }

    pickState(value) {
        const field = cy.get('#id_state')
        field.select(value)
        return this
    }

    fillPostcode(value) {
        const field = cy.get('#postcode')
        field.type(value)
        return this
    }

    fillPhone(value) {
        const field = cy.get('#phone_mobile')
        field.type(value)
        return this
    }

    submit() {
        const button = cy.get('#submitAccount')
        button.click()
    }

    verifyCreatedAccount(value) {
        const field = cy.get('.page-heading')
        field.contains(value)
        return this
    }

    verifyRegisterFailed(value) {
        const field = cy.get('#create_account_error')
        field.contains(value)
        return this
    }

    verifyRegisterFailedEmptyFields(value) {
        const field = cy.get('.alert')
        field.contains(value)
        return this
    }
}

export default RegisterPage