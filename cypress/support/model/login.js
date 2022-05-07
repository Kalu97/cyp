export const login_selector={
    username:"#txtUsername",
    password:"#txtPassword",
    loginbutton:"#btnLogin",
    forgotpass:'#forgotPasswordLink a',
    homepglogo:'#divLogo'
    
}

export class login{
    static verifylogovisible(){
        cy.visit('/')
        cy.get(login_selector.homepglogo).should('be.visible')
    }
    static verifyforgotlink(){
        cy.get(login_selector.forgotpass).should('be.visible')
    }
    static login(username,password){
        cy.get(login_selector.username).type(username)
        cy.get(login_selector.password).type(password)
        cy.get(login_selector.loginbutton).click()
       
    }
    

}