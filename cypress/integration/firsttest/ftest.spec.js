
        describe('login functionality', () => {

            it('login with valid credentials', () => {

            cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
            cy.get('input[name="txtUsername"]').type('Admin')
            cy.get('input[name="txtPassword"]').type('admin123')
            cy.get('input[type="submit"]').click()
        

            })

            it('Login with Invalid credentials',()=>{
                cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
                cy.get('input[name="txtUsername"]').type('Admin')
                cy.get('input[name="txtPassword"]').type('admin13')
                cy.get('input[type="submit"]').click()
                cy.get('#divLoginButton>span').should('have.text','Invalid credentials')
            })
        })