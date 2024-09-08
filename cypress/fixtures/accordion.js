class AccordionPage {
    visit() {
        cy.visit("https://commitquality.com/practice-accordions")
    }

    getFirstAccordion() {
        cy.get("[data-testid='accordion-1']")
    }

    getSecondAccordion() {
        cy.get("[data-testid='accordion-2']")
    }

    getThirdAccordion() {
        cy.get("[data-testid='accordion-3']")
    }

}

export default AccordionPage