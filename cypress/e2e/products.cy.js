import ProductsPage from "../fixtures/productsPage";

const productsPage = new ProductsPage();

describe("login", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("view products", () => {
        cy.scrollTo("bottom")
        cy.wait(2000)

    });

    it("search for a product", () => {
        productsPage.getSearchbar().type("Product 1")
        productsPage.getFilterButton().click()

    });

    it("add a product", () => {
        cy.scrollTo("bottom")
        productsPage.getAddProductButton().click()
    })


})