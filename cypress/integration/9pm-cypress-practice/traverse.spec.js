describe('traverse method in javascipt', () => {
    it('To get a DOM element at a specific index, use the .eq() command', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get("td").should('have.length', 24)
        cy.get("td").eq(0).should('have.text', 'John')
    })
//     it('To get the first DOM element within elements, use the .first() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("td").first().should('have.text', "John")

//     })
//     it('To get the first DOM element within elements, use the .first() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('li[class=breadcrumb-item]').first().should('have.text', "Home")

//     })

//     it('To get the first DOM element within elements, use the .last() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("td").last().should('have.text', "Scott")
//     })
//     it('To get children of DOM elements, use the .children() command', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get(".traversal-buttons").children().should('have.length', 5)
//     })
//     it('To get the next sibling DOM element within elements, use the .next() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#fruits").next().should('have.text', "Apple")
//     })
//     it('To get the next sibling DOM element within elements, use the .next() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#milk").prev().should('have.text', "Tea")
//     })
//     it('To get the next sibling DOM element within elements, use the .next() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#milk").prev().should('have.text', "Tea")
//     })
//     it('To get the all sibling DOM element within elements, use the .nestAll() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#milk").nextAll().should('have.length', 2)
//     })
//     it('To get the all sibling DOM element within elements, use the .prevAll() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#espresso").prevAll().should('have.length', 3)
//     })
//     it('To get the all sibling DOM element within elements, use the .prevAll() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#espresso").prevAll().should('have.length', 3)
//     })
//     it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#espresso").filter().should('have.length', 3)
//     })
//     it.only('To get all sibling DOM elements of elements, use the .siblings() command..', () => {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get("#veggie").siblings().should('have.length', 10)
//     })

})