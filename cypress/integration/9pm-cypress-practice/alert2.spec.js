describe('verify alerts', () => {
    it('verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })
    it('tc 02 verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.window().then(function (el) {
            let a = el.alert()
            expect(a).to.equal(true)

        })
        cy.get('#button1').click()
    })

    it('tc 02 verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return true
        })

        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('tc 02 verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return false
        })

        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })
    it.only('tc 02 verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            cy.stub(el, "confirm").returns(true)
        }) 
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })
    it('tc 02 verify js windiow:alert',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function(el){
            cy.stub(el,'confirm').returns(false)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')
    })

    it('tc 02 verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((win)=>{   
            cy.stub(win,'alert').as('alert')
        })
        cy.get('#button1').click()
        cy.get('@alert').should('have.been.calledOnce','I am an alert box!')
        
    })
    it('tc 02 verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((win)=>{   
            cy.stub(win,'confirm').as('alert2')
        })
        cy.get('#button4').click()
        cy.get('@alert2').should('have.been.calledOnce','Press a button!')
    })
    it('tc 02 verify js windiow:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button2').click()
        cy.get('.modal-title').should('have.text','It’s that Easy!!  Well I think it is.....')
        cy.contains(/close/i).click()
        
    })
})