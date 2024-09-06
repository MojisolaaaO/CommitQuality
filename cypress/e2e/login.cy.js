import LoginPage from "../fixtures/loginPage";

const loginPage = new LoginPage();

describe("login", () => {
    it("assert elements are visible", () => {
        loginPage.visit();
        loginPage.getUsername().should("be.visible");
        loginPage.getPassword().should("be.visible");
        loginPage.getLoginButton().should("be.visible");
        cy.wait(3000)
    });

    it("login with no credentials", () => {
        loginPage.visit();
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should("be.visible").and("contain", "Please enter a username and password")
        cy.wait(3000)

    });

    it("login with invalid credentials", () => {
        loginPage.visit();
        loginPage.getUsername().type("moji@gmail.com")
        loginPage.getPassword().type("Mojisola123")
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should("be.visible").and("contain", "Invalid username or password")
        cy.wait(3000)
    });


    it("login with just username", () => {
        loginPage.visit();
        loginPage.getUsername().type("moji@gmail.com")
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should("be.visible").and("contain", "Please enter a username and password")
        cy.wait(3000)
    });


    it("login with just password", () => {
        loginPage.visit();
        loginPage.getPassword().type("Mojisola123")
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should("be.visible").and("contain", "Please enter a username and password")
        cy.wait(3000)
    });


});