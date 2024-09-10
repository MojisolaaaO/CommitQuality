import ContactPage from "../fixtures/contactPage"

const contactPage = new ContactPage

describe("Contact Form", () => {
    beforeEach(() => {
        cy.visit("https://commitquality.com/practice-contact-form")
    })

    it.only("blank fields", () => {
        contactPage.getSubmitButton().click()
        contactPage.getNameError().then((name) => {
            expect(name).to.have.text("Name is required.")
        })
        contactPage.getEmailError().then((email => {
            expect(email).to.have.text("Email is required.")
        }))
        contactPage.getQueryTypeError().then((type => {
            expect(type).to.have.text("Query Type is required.")
        }))
        contactPage.getDateOfBirthError().then((dob => {
            expect(dob).to.have.text("Date of Birth is required.")
        }))
        contactPage.getCheckboxError().then((checkbox => {
            expect(checkbox).to.have.text("Please check the box to confirm you're aware that this is a practice website.")
        }))


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