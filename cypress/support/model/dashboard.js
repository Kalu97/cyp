export const dashboard_selector={
    welcome:"#welcome"

}
export class dashboard{
    static verifylogin(){
        cy.get(dashboard_selector.welcome).should('be.visible')
    }
}