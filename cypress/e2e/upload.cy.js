describe('Upload', () => {
    it('Verify that user can upload files', () => {
        cy.visit('/')
        cy.get('.nav-toggle > :nth-child(1)').click()
        cy.get('[data-testid="navbar-practice"]').click()
        cy.get('[data-testid="practice-file-upload"]').click()
        cy.get('input[type=file]').selectFile("cypress/fixtures/bio.txt")
        cy.get('button[type=submit]').click()

        cy.on("window:alert", (message) => {
            expect(message).to.equal("File successfully uploaded!")

        })

    })

    it('Verify that user can download and read files', () => {
        cy.visit('/')
        cy.get('.nav-toggle > :nth-child(1)').click()
        cy.get('[data-testid="navbar-practice"]').click()
        cy.get('[data-testid="practice-file-download"]').click()
        cy.get("button").contains("Download File").click()
        cy.readFile("cypress/downloads/dummy_file.txt").should('eq', "This is a dummy text file.")
    })

    it('Verify that user scroll', () => {
        cy.visit('/')
        cy.pause()
        cy.scrollTo(0, 50) //Scoll 50 pixels from the top
        cy.get('[data-testid="add-a-product-button"]').scrollIntoView({
            duration: 10000
        })


    })

})