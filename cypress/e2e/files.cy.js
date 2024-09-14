describe("Files", () => {
    it("Verify that user can upload a file", () => {
        cy.visit("https://commitquality.com/practice-file-upload")
        cy.get("#file-input").selectFile("cypress/fixtures/MJ.png")
        cy.get('button[type=submit]').click()

    })


    it("Verify that user can download a file", () => {
        cy.visit("https://commitquality.com/practice-file-download")
        cy.get('button').click()
        cy.get("div[class='container']").click()
        cy.readFile("cypress/downloads/dummy_file.txt").then((file => {
            expect(file).to.equal("This is a dummy text file.")
        }))

    })
})