describe('test patanjali site',()=>{
    it('order pain releiver',()=>{
        cy.visit('https://www.patanjaliayurved.net/')
        cy.get('a[class="dropdown-toggle').first().trigger('mouseover')
        cy.get('a[href="https://www.patanjaliayurved.net/category/ayurvedic-medicine/4"]').first().trigger('mouseover')
        cy.get('a[href="https://www.patanjaliayurved.net/category/balm-inhaler/211"]').first().click({force: true})     
        cy.get('a[class="figure-href"]').last().click().then(()=>{
            cy.get('button[class="shoping addtocart btn buynow"]')   
        })
        cy.get('button[class="shoping addtocart btn buynow"]').click()
        cy.get('a[href="https://www.patanjaliayurved.net/customer/login"]').last().click()
        cy.get('a[href="https://www.patanjaliayurved.net/customer/register"]').last().should('be.visible')   
    })
})