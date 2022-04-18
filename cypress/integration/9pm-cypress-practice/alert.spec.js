describe('handling alert',()=>{
    it('tc01 for js alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',str=>{
            expect(str).to.equal('I am a JS Alert')
        })
        cy.get('#result').should('be.visible')
    })
    it('tc02 for js confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',str=>{
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it('tc03 for js confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',str=>{
            expect(str).to.equal('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it('tc03 for js prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.window().then((el)=>{
            cy.stub(el,'prompt').returns("hello there")
            
            //cy.get('button[onclick="jsPrompt()"]').click()
        })

        cy.get('#result').should('have.text','You entered: hello there')
    })
    it.only('using window object',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((win)=>{
cy.stub(win,'alert').as('alert')
        })
        cy.get('#button1').click()
        cy.get('@alert').should('have.been.calledOnceWith',"I am an alert box!")
    })
})