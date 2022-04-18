it('iframe without plugin',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.get('#mce_0_ifr').then(($iframeEl)=>{

        let iframeContentsBody =  $iframeEl.contents().find('body')
        cy.wrap(iframeContentsBody).as('iframeBody')
        cy.get('@iframeBody').find('p').should('be.visible')
        .and('have.text','Your content goes here.')
    })
})
it.only('tc 2 ',()=>{
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    cy.get('#google_esf').then(($ifEl) =>{
        var ifContentsbody = $ifEl.contents().find('body')
        cy.wrap(ifContentsbody).as('iframeBody')
        cy.get('@iframeBody').find('img[alt="GlobalSQA"]').should('be.visible')

    })
})