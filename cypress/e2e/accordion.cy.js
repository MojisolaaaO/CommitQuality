import AccordionPage from "../fixtures/accordion";

const accordionPage = new AccordionPage

describe("accordions", () => {
    beforeEach(() => {
        cy.visit("https://commitquality.com/practice-accordions")
    })
    it("navigate to the page", () => {
        accordionPage.getFirstAccordion().should('exist').click() // Check that it exists before clicking

        cy.wait(2000)
            //accordionPage.getSecondAccordion().click()
        cy.wait(2000)
            //accordionPage.getThirdAccordion().click()

    })
})