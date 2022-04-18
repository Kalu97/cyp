it('To verify whether the check-out date field accepts a later date than checkin date.',()=>{
    cy.visit('http://adactinhotelapp.com/')
    cy.get('input[type="text"]').type('testusername')

})