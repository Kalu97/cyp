describe('checking available railways',()=>{
    it('validate the available trains',()=>{
        cy.visit('https://www.irctc.co.in/nget/train-search')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('input[aria-autocomplete="list"]').first().type('pune')
        cy.contains('PUNE JN - PUNE').click()
        cy.get('input[aria-autocomplete="list"]').last().type('delhi')
        cy.contains('DELHI - DLI').click()
        cy.get('span[class="ng-tns-c59-10 ui-calendar"]').click()
        cy.get('a[draggable="false"]').contains('7').click()
       cy.get('div[class="ng-tns-c66-11 ui-dropdown ui-widget ui-state-default ui-corner-all"]').click().should('contain','First Class (FC)').click()
       cy.contains('Flexible With Date').click()
       cy.get('button[class="search_btn train_Search"]').click()
       cy.get('button[class="btnDefault ng-star-inserted"]').should('be.visible')
    })
})