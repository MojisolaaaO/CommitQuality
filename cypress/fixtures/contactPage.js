class ContactPage {

    getNameField() {
        return cy.get("#name")
    }

    getEmailField() {
        return cy.get("#email")

    }

    getQueryTypeField() {
        return cy.get('[data-testid="query-type"]')

    }

    getDateOfBirthField() {
        return cy.get('[data-testid="dob"]').type("2024-09-10")

    }

    getCheckBox() {
        return cy.get('[data-testid="practice-checkbox"]')

    }

    getSubmitButton() {
        return cy.get('[data-testid="submit-button"]').click()

    }

    getNameError() {
        return cy.get(':nth-child(1) > .error')
    }

    getEmailError() {
        return cy.get(':nth-child(2) > .error')
    }

    getQueryTypeError() {
        return cy.get(':nth-child(3) > .error')
    }

    getDateOfBirthError() {
        return cy.get(':nth-child(4) > .error')
    }

    getCheckboxError() {
        return cy.get(':nth-child(5) > .error')
    }

}

export default ContactPage