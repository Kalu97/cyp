describe('Haldling Alerts',()=>{
    it('TC-01 Handling normal alerts',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[id="name"]').type('Vishal')
        cy.get('input[id="name"]').click()
        cy.on('window:alert',(text)=>{
        expect(text).to.equals('Hello Vishal, share this practice page and share your knowledge')
        expect(text).to.includes('Vishal')
        })
    })

    it('tc-02 alert ok',()=>{
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('button[class="btn btn-danger"]').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.equals('I am an alert box!')
        })
    })

    it('tc-03 confirms alert in cypress',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[id="name"]').type('Vishal')
        cy.get('input[id="confirmbtn"]').click()
        cy.on('window:confirm',(text)=>{
            cy.log('text')
            expect(text).to.include('Vishal')
            //return true
            return false
        })
    })
    
})  
it.only('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
   
    cy.window().then(($win)=>{
        cy.stub($win,'prompt').returns('you are learning cypress')
        cy.contains('Click for JS Prompt').click()
    })
    cy.get('#result').should('contain','You entered: you are learning cypress')
})

