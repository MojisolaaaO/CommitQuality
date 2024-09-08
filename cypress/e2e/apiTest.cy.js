describe("API Testing", () => {
    it("GET request", () => {
        cy.request("GET", "https://commitquality.com")
            .its("status").should("equal", 200)
    })
})