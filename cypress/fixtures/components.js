class ComponentsPage {
    // Visits the Products page
    visit() {
        cy.visit('https://commitquality.com/practice-general-components')
    }

    getSingleClickButton() {
        return cy.get("button[data-testid='basic-click']")
    }

    getDoubleClickButton() {
        return cy.get("button[data-testid='double-click']")
    }

    getRightClickButton() {
        return cy.get("button[data-testid='right-click']")
    }

    getRadioButton() {
        return cy.get("input[value='option1']")
    }

    getDropdown() {
        return cy.get("div[class='dropdowns']")
    }

    getCheckbox() {
        return cy.get("input[name='checkbox1']")
    }

    getnewTab() {
        return cy.get("[data-testid='link-newtab']")
    }
    getsameTab() {
        return cy.get("[data-testid='link-newtab']").invoke("removeAttr", "target")

    }


}

// Exporting the ProductsPage class
export default ComponentsPage;