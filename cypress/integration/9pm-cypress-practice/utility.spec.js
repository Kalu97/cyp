it('verify the functionality for login',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('input[name="txtUsername"]').type('Admin')
    cy.get('input[name="txtPassword"]').type('admin123')
    cy.get('input[id="btnLogin"').click()
    cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')
})

it.only('test the gmail login functionality',()=>{
    cy.visit('https://accounts.google.com/ServiceLogin/identifier?continue=https%3A%2F%2Fmail.google.com&sacu=1&passive=1209600&hl=en&acui=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&TL=AM3QAYY5kE5saaDNI6YmKjcq1phYlgE0WKWvJAj7GwyDMAiK_Fo70AOFf_yLIwF1')
    cy.logn('kalumane99@gmail.com','9767367023')
})

it('verify login details using cypress customize command',()=>{
    cy.login('Admin','admin123')
})


it('verify the sum of table using customize functionality',()=>{
    cy.checktable(1,159)
    cy.checktable(2,163)
})