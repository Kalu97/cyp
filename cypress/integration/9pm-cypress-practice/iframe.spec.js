describe('validate the iframe functionality',()=>{
    it.only('tc 01 validate by jquery',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe[class="tox-edit-area__iframe"]').then(($el)=>{
            cy.wrap($el.contents()).as('body')
            cy.get('@body').should('have.text','Your content goes here.')
            cy.get('@body').find('p').clear()
            cy.get('@body').find('p').type('This is the example of iframe')
        })
        
    })
    it('tc 02 validate by jquery',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('iframe[id="frame"]').then((el)=>{
            cy.wrap(el.contents()).as('body')
            cy.get('@body').find('ul').children().eq(2).should('have.text','Contact Us')
        })
        
    })
    it('tc 03 validate by js',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe[class="tox-edit-area__iframe"]').then((el)=>{
            cy.wrap(el['0'].contentDocument.body).as('body')
            cy.get('@body').find('p').clear()
            cy.get('@body').find('p').type('Iam new to js')
        })
        
    })
    it('tc 04 validate by js',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('iframe[id="frame"]').then((el)=>{
            cy.wrap(el['0'].contentDocument.body).as('body')
            cy.get('@body').find('ul').children().eq(2).should('have.text','Contact Us')
        })
        
    })
    
})