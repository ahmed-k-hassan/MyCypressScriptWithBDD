class MyinfoPage
{
    txtUsername="input[name='username']"
    txtPassword="input[name='password']"
    btnSubmit="button[type='submit']"
    lblMessage=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    txtNickname=":nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    btnMyinfo=":nth-child(6) > .oxd-main-menu-item"

    setUserName(username){
        cy.get(this.txtUsername).type(username)
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }
    clickLogin(){
        cy.get(this.btnSubmit).click()
    }
    verifyOpenDashboard(expected){
        cy.get(this.lblMessage).should('have.text',expected)
    }
    verifyOpenMyInfo(expected){
        cy.get(this.btnMyinfo).click()
        cy.get(this.lblMessage).should('have.text',expected)
    }
    setNickname(nickname){
        cy.get(this.txtNickname).clear()
        cy.get(this.txtNickname).type(nickname)
        cy.get(this.txtNickname).should('have.value',nickname)
    }
}
export  const myinfoPage = new MyinfoPage();