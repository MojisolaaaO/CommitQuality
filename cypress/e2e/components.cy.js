import ComponentsPage from "../fixtures/components";

const componentsPage = new ComponentsPage();


describe("General Components", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("click a button", () => {
        componentsPage.visit()
        componentsPage.getSingleClickButton().click()
        componentsPage.getDoubleClickButton().dblclick()
        componentsPage.getRightClickButton().rightclick()
        componentsPage.getRadioButton().click()
        componentsPage.getDropdown().click()
        componentsPage.getCheckbox().check()
            // componentsPage.getnewTab().click()
        componentsPage.getsameTab().click()

    })

})