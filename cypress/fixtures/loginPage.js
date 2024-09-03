class LoginPage {
    visit() {
        cy.visit('https://commitquality.com/login')
    }

    getUsername() {
        return cy.get("input[placeholder='Enter Username']")
    }

    getPassword() {
        return cy.get("input[placeholder='Enter Password']")
    }

    getLoginButton() {
        return cy.get("button[type='submit']")
    }

    getErrorMessage() {
        return cy.get(".error")
    }
}

export default LoginPage;