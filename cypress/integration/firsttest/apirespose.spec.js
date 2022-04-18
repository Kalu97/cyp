describe('intercept',()=>{
    it('validate api response using API',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1').as ('getcomment')
        cy.contains('Get Comment').click()
        cy.wait('@getcomment').then(Response=>{
            cy.log(Response)
            cy.log(Response.response.body.body)
            let gettext=Response.response.body.body
            cy.get('div[class="network-comment"]').should('have.text',gettext) 
        })
    })
    it.only('validate API response using UI',()=>{
            cy.visit('https://kitchen.applitools.com/ingredients/api')
            cy.request('https://kitchen.applitools.com/api/recipes').then(response=>{
                cy.log(response)
                let len=Cypress.$('ul[id="recipes-list"]').children().length
                cy.log(len)
                cy.log(response.body.data.length)
                let rlen=response.body.data.length
                expect(len).to.eq(rlen)
                cy.get('h4[class="chakra-heading css-1hm1kf2"]').first().should('have.text',response.body.data[0].title)
                cy.get('img[class="chakra-image css-1qx3t66"]').first().should('have.attr','src',response.body.data[0].image)
            })
    })

})