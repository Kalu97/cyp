
describe('verify sign up form using fixture',function(){
    before(()=>{
        cy.fixture('users').then((data)=>{
            this.data=data
        })
    })
    it('to validate form using fixture',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.fname)
        cy.get('input[name="last_name"]').type(this.data.lname)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[placeholder="Comments"]').type(this.data.comments)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })  
})
it('tc 02 validate form using fixture',()=>{
    cy.fixture('users').then(function(a){
        cy.log(a)
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]').type(a.fname)
    cy.get('input[name="last_name"]').type(a.lname)
    cy.get('input[name="email"]').type(a.email)
    cy.get('textarea[placeholder="Comments"]').type(a.comments)
    cy.get('input[type="submit"]').click()
    cy.get('h1').should('have.text','Thank You for your Message!')
})
})
it('tc 02 validate form using fixture',()=>{
    cy.fixture('users').then(function(a){
        cy.log(a)
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]').type(a.fname)
    cy.get('input[name="last_name"]').type(a.lname)
    cy.get('input[name="email"]').type(a.email)
    cy.get('textarea[placeholder="Comments"]').type(a.comments)
    cy.get('input[type="reset"]').click()
    cy.get('input[name="first_name"]').should('have.text','')
})
})
it.only('tc 03 changing the data at run time',()=>{
    cy.fixture('users').then(function(a){
        a.fname='Vishal'
        a.email='rohanmane154gmail.com'
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]').type(a.fname)
    cy.get('input[name="last_name"]').type(a.lname)
    cy.get('input[name="email"]').type(a.email)
    cy.get('textarea[placeholder="Comments"]').type(a.comments)
    cy.get('input[type="submit"]').click()
    cy.get('body').should('contain','Error:')
})
})