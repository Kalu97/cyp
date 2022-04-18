

describe('verify tranverse method ', () => {
    it('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('ul[id="brandcarousal"]').as('brand')
        cy.get('@brand').children().should('have.length', 10)
        cy.get('@brand').children().eq(0).should('be.visible')
        cy.get('@brand').children().eq(0).children().should('have.length', 2)
    })
    it("To get the first DOM element within elements, use the .first() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().first().should('contain', 'Home')
    })
    it("To get the first DOM element within elements, use the .first() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').as('nav')
        cy.get("@nav").children().last().should('contain', 'Books')
    })
    it("To get the next sibling DOM element within elements, use the .next() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[class="active menu_home"]').parent().next().should('contain', "Apparel & accessories")
    })

    it("To get all sibling DOM elements of elements, use the .siblings() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().prev().should('contain', 'Shoe')
    })
    it("To get all sibling DOM elements of elements, use the .siblings() command", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="info_links_footer"]').children().siblings().should('have.length',7 ) 
    })
    it("To get descendant DOM elements of the selector, use the .find() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="info_links_footer"]').children().find("a").should('have.length',7 ) 
    })
    it("To remove DOM element(s) from the set of elements, use the .not() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="info_links_footer"]').children().find("a").not('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=3"]').should('have.length',6 ) 
    })
    it("To get parent DOM element of elements, use the .parent() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]').parent().should('have.class',"dropdown" ) 
    })
    it("To get parents DOM element of elements, use the .parents() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]').parents().should('match',"footer" )
    })
    it("To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').first().nextUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(4) > div.promo_text').should('have.length',3)
    })
    it("To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').last().prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').should('have.length',2)
    })
    it("To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').last().prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').should('have.length',2)
    })
    // it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('li[class="list-header"]').last().prevUntil('#fruits').should('have.length',1)

    // })
    it("To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('section[class="row mt20"]').last().prevUntil('#special').should('have.length',3 ) 
    })

})

describe('verify tranverse methods',()=>{
    it('TC 1  children() and eq()',()=>{
        cy.visit('https://www.gamerzoneme.com/')
        cy.get('ul[class="mega-menu max-mega-menu mega-menu-horizontal nav-menu"').as("menu")
        cy.get("@menu").children().should('have.length',12)
        cy.get('@menu').children().eq(0).should('contain',"PS5")
        cy.get('@menu').children().eq(2).should('contain','Xbox')
        
    })
    it('TC 2  first() and last()',()=>{
        cy.visit('https://www.gamerzoneme.com/')
        cy.get('ul[class="mega-menu max-mega-menu mega-menu-horizontal nav-menu"').as("menu")
        cy.get('@menu').children().first().should('contain',"PS5")
        cy.get('@menu').children().last().should("contain",'+974 50584040')
    })
    it('TC parent().next() and parent() prev()',()=>{
        cy.visit('https://www.gamerzoneme.com/')
        cy.get('a[href="https://www.gamerzoneme.com/return-policy/"]').as("policy")
        cy.get('@policy').parent().next().should('contain',"Terms and Conditions")
        cy.get('@policy').parent().prev().should("contain",'Privacy Policy')
    })
    it('TC find() and find().not()',()=>{
        cy.visit('https://www.gamerzoneme.com/')
        cy.get('ul[id="menu-footer-menu2"]').as("menufoot")
        cy.get('@menufoot').children().find('a').should('have.length',4)
        cy.get('@menufoot').children().find('a').not('a[href="https://www.gamerzoneme.com/warranty-information/"]').should('have.length',3)
    })

    it.only('TC nextuntil() and find().not()',()=>{
        cy.visit('https://www.gamerzoneme.com/')
        cy.get('ul[id="menu-footer-menu2"]').as("menufoot")
        cy.get('@menufoot').children().first().nextUntil('li[id="menu-item-6472"]').should('have.length',2)
        cy.get('@menufoot').children().last().prevUntil('li[id="menu-item-6467"]').should('have.length',2)
    })

    
})