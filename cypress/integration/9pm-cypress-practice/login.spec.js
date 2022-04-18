describe('validate the login functionality',function(){
    it('check login details using valid credntials',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type("Admin")
        cy.get('input[name="txtPassword"]').type('admin123')
        cy.get('.button').click()
        cy.get('#menu_dashboard_index').should('have.text',"Dashboard")

    })
    it('check login details using invalid credntials',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type("Admin253")
        cy.get('input[name="txtPassword"]').type('admin23')
        cy.get('.button').click()
        cy.get('span[id="spanMessage"]').should("have.text",'Invalid credentials')
    })
})


it.only('check sign up function for zoomin',function(){
    cy.visit('https://www.zoomin.com/sign-up?%2F')
    cy.get('input[name="name"]').type('kalu')
    cy.get('input[name=email]').type('kalumane99@gmail.com')
    cy.get('input[class="number-input"]').type(9307219115)
    cy.get('input[type="password"]').type('Kalu1215@')
    cy.contains('SIGN UP').click()
    cy.get('a[href="/sign-up?%2F"]').should('be.visible')
})