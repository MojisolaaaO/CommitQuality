class AccordionPage {
    visit() {
        return cy.visit("https://commitquality.com/practice-accordions")
    }

    getFirstAccordion() {
        return cy.get("[data-testid='accordion-1']")

    }

    getSecondAccordion() {
        return cy.get("[data-testid='accordion-2']")
    }

    getThirdAccordion() {
        return cy.get("[data-testid='accordion-3']")
    }

}

export default AccordionPage