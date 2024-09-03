class ProductsPage {
    // Visits the Products page
    visit() {
        cy.visit('https://commitquality.com/')
    }

    // Returns the search bar element
    getSearchbar() {
        return cy.get("input[placeholder='Filter by product name']")
    }

    // Returns the filter button element
    getFilterButton() {
        return cy.get("button[data-testid='filter-button']")
    }

    // Returns the reset button element
    getResetButton() {
        return cy.get("button[data-testid='reset-filter-button']")
    }

    // Returns the add product button element
    getAddProductButton() {
        return cy.get(".add-product-button")
    }

    // Returns the product name input field
    getProductNameField() {
        return cy.get("#name")
    }

    // Returns the price input field
    getPriceField() {
        return cy.get("#price")
    }

    // Returns the date input field
    getDateField() {
        return cy.get("#dateStocked")
    }

    // Returns the submit button element

    getSubmitButton() {
        return cy.get("button[type='submit']")
    }


    // Returns the cancel button element
    getCancelButton() {
        return cy.get(".btn.btn-secondary")
    }

}

// Exporting the ProductsPage class
export default ProductsPage;