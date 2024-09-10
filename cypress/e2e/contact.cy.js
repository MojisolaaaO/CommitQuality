import ContactPage from "../fixtures/contactPage"

const contactPage = new ContactPage

describe("Contact Form", () => {
    beforeEach(() => {
        cy.visit("https://commitquality.com/practice-contact-form")
    })

    it("blank fields", () => {
        contactPage.getSubmitButton().click()
    })

    it("verify that user can submit the contact form", () => {
        contactPage.getNameField().type("Moji");
        contactPage.getEmailField().type("moji@gmail.com")
        contactPage.getQueryTypeField().select("General")
        contactPage.getDateOfBirthField().type("2024-09-10")
        contactPage.getCheckBox().check()
        contactPage.getSubmitButton().click()
    })


})