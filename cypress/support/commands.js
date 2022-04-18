// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })]
import 'cypress-iframe';

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('input[name="txtUsername"]').type(username)
    cy.get('input[name="txtPassword"]').type(password)
    cy.get('input[id="btnLogin"').click()
    cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')
})

// Cypress.Commands.add('logn',(user,pass)=>{
//     cy.visit('https://accounts.google.com/ServiceLogin/identifier?continue=https%3A%2F%2Fmail.google.com&sacu=1&passive=1209600&hl=en&acui=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&TL=AM3QAYY5kE5saaDNI6YmKjcq1phYlgE0WKWvJAj7GwyDMAiK_Fo70AOFf_yLIwF1')
//     cy.get('input[type="email"]').type(user)
//     cy.get('').click()
//     cy.get('input[type="password"]').type(pass)
//     cy.get('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]').click()
//     cy.get('div[class="T-I T-I-KE L3"]').should('be.visible')
// })



// Cypress.Commands.add('checktable', (id, value) => {
//     let sum = 0
//     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//     cy.get(`#t0${id}`).find('tr').as('trow')
//     cy.get('@trow').should('have.length', 4)
//     cy.get('@trow').each(function (el, index) {
//         if (index != 0) {
//             sum = sum + Number(el.children().last().text())
//         }

//     }).then(() => {
//         expect(sum).to.equal(value)
//     })
// })

Cypress.Commands.add('checktab', (val) => {
    let sum = 0
    cy.visit('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-1216494/full-scorecard')
    cy.get('table[class="table batsman"]').last().find('td:nth-child(3)').each(function (el, index) {
        if (index != 5) {
            cy.log(el.text())
            sum += Number(el.text())
        }   
    }).then(() => {
        expect(sum).to.equal(val)
    })
})

Cypress.Commands.add('checksum', (value) => {
    it('Check addition of total runs', () => {
        var summ = 0;
        cy.visit('https://www.espncricinfo.com/series/8048/scorecard/1216494/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-indian-premier-league-2020-21')
        cy.get('.table.batsman').eq(0).find('tr td:nth-child(3)').eq(10).as('firstList')
        cy.get('@firstList').each((el, index) => {
            if (index != 10) {
                cy.log(el.text())
                summ += Number(el.text())
            }

    }).then(() => {
        expect(summ).to.equal(value)
    })
})
})

