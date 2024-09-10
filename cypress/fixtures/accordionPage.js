class AccordionPage {
    visit() {
        return cy.visit("https://commitquality.com/practice-accordions")
    }

    getFirstAccordion() {
        return cy.get('.container > div > :nth-child(2)')

    }

    getSecondAccordion() {
        return cy.get('.container > div > :nth-child(4)')
    }

    getThirdAccordion() {
        return cy.get('.container > div > :nth-child(6)')
    }

}

export default AccordionPage