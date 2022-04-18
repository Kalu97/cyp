import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"


// Given('visit orange HRM site',()=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
// })
// And('fill the username',()=>{
//     cy.get('#txtUsername').type('Admin')
// })
// And('fill the password',()=>{
//     cy.get('#txtPassword').type('admin123')
// })
// When('click on login button',()=>{
//     cy.get('#btnLogin').click()
// })
// Then('validate the dashboard text', ()=>{
//     cy.contains('Dashboard').should('be.visible')
// })

Given('visit orange HRM site',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
})
And('fill the usernames',()=>{
    cy.get('#txtUsername').type('Admin')
})
And('fill the passwords',()=>{
    cy.get('#txtPassword').type('admin12')
})
When('click on login button',()=>{
    cy.get('#btnLogin').click()
})
Then('validate the Error Message', ()=>{
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
})