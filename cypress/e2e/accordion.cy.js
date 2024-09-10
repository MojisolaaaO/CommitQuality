import AccordionPage from "../fixtures/accordionPage";

const accordionPage = new AccordionPage

describe("accordions", () => {
    beforeEach(() => {
        cy.visit("https://commitquality.com/practice-accordions")
    })
    it("navigate to the page", () => {
        accordionPage.getFirstAccordion().click()
        accordionPage.getSecondAccordion().click()
        accordionPage.getThirdAccordion().click()
        cy.wait(2000)

    })
})