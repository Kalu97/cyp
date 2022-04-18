describe('commands',()=>{
    it('cy.doc',()=>{
        cy.visit('http://practice.automationtesting.in/')
        cy.document().then(doc=>{
            expect(doc.title).to.eq('Automation Practice Site')
        })
    })
    it.only('cy.window',()=>{
        cy.visit('http://practice.automationtesting.in/')
        cy.window().then(wind=>{
            cy.log(wind.location)
            expect(wind.location.href).to.eq('http://practice.automationtesting.in/')
            let newUrl='https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg'
            wind.location.href=newUrl
            cy.url().should('eq',"https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg")
    
        })
    })
})