import AccordionPage from "../fixtures/accordionPage";

const accordionPage = new AccordionPage

describe("accordions", () => {
    beforeEach(() => {
        cy.visit("https://commitquality.com/practice-accordions")
    })
    it("navigate to the page", () => {
        accordionPage.getFirstAccordion().should('be.visible').click(); // Check that it exists before clicking

        cy.wait(2000)
            //accordionPage.getSecondAccordion().click()
        cy.wait(2000)
            //accordionPage.getThirdAccordion().click()

    })
})