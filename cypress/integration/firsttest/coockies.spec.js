var cookie=['protein', 'vegetable']
describe('applitools cookie,s',()=>{
    beforeEach(() => {
        cy.visit('https://kitchen.applitools.com/ingredients/cookie');
    })
    it.only('get all cookies',()=>{
        cy.getCookies().then(cookies=>{
            cy.log(cookies)
            
        })
       
    })
    it('get all cookies and compare with the expected result',()=>{
        
        cy.getCookies().should('have.length',2)
        cy.getCookies().each((currentcookie,index)=>{
            expect(currentcookie).to.have.property('name',cookie[index])

        })
    })
})