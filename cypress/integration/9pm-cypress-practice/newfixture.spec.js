import{Data} from "/Users/Admin/Desktop/cypress/cypress/fixtures/ex.json"
//let s= require('fixture/ex.json')
describe('verify the fixture',function(){
    Data.forEach(function(el){
        it('verify the fixture',()=>{
            cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.LastName)
            cy.get('input[name="email"]').type(el.Email)
            cy.get('textarea[class="feedback-input"]').type(el.comment)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })
    })
})