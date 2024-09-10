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

}

export default ContactPage