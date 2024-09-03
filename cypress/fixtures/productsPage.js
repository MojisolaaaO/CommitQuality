class ProductsPage {
    visit() {
        cy.visit('https://commitquality.com/')
    }

    getSearchbar() {
        return cy.get("input[placeholder='Filter by product name']")
    }

    getFilterButton() {
        return cy.get("button[data-testid='filter-button']")
    }

    getResetButton() {
        return cy.get("button[data-testid='reset-filter-button']")
    }

    getAddProductButton() {
        return cy.get(".add-product-button")
    }

    getProductName() {
        return cy.get("#name")
    }

    getPrice() {
        return cy.get("#price")
    }

    getDate() {
        return cy.get("#dateStocked")
    }
}

export default ProductsPage;