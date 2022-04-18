describe('validate score table',()=>{
    it('validate score card table',()=>{
        let sum=0
        cy.visit('https://sports.ndtv.com/cricket/pak-vs-aus-scorecard-live-cricket-score-australia-in-pakistan-3-test-series-2022-3rd-test-pkau03212022207652?utm_source=scorecard-lhs&utm_medium=cricket-recent&utm_campaign=desktop')
        cy.wait(15000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('#tbody_4_1').children().find('td:nth-child(4)').each(function(el,index){
            cy.log(el.text())
            sum+=Number(el.text())

        }).then(() => {
            expect(sum).to.equal(223)
    })
    })
    
})