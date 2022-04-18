// describe('learn screenshot',()=>{
//     // beforEach(()=>{
//     //     cy.visit('https://www.amazon.in/')
//     // })
//     it('test case 1',()=>{
//         cy.screenshot("amazonss")
//         cy.visit('https://www.amazon.in/')
//     })
//     it("test case 2 clipping",()=>{
//         cy.screenshot({clip:{x:20,y:20,width:400,height:300}})
//         cy.visit('https://www.amazon.in/')
//     })
//     it("test case 3 for paticular element",()=>{
//         cy.get('id["nav-cart-text-container"]').screenshot('glow')
//     })
// })

// var arr = ['ipad-2','ipad-mini','macbook-11','samsung-note9']
// describe('learn viewport',()=>{
//     it('test case 1 with preset',()=>{
//         cy.viewport('iphone-8');
//         cy.visit("https://www.amazon.in/ref=nav_logo'")
//     })
//     it('test case 2 in macbook',()=>{
//         cy.viewport('macbook-16');
//         cy.visit("https://www.amazon.in/ref=nav_logo'")
//     })
//     it('test case 3 loop',()=>{
//     for(let i of arr){
//         cy.viewport(i)
//         cy.visit("https://www.amazon.in/ref=nav_logo'")
//     }
// })
// it.only('test with the width and height', () => {
//     cy.viewport(512,897)
//     cy.visit('https://www.amazon.in/ref=nav_logo')
//   })
// })
describe('Learn retries and other commands', () => {
   
    it('test case 1 retries in open mode', () => {
   cy.title().should('include','amazon')
        
    })
    it('test case 2  title', () => {
        cy.visit('https://www.amazon.in/')
       cy.title()
       .should('have.text','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
     })
     it('test case 3 Go', () => {
      
     })
     it('test case 4 Reload', () => {
        cy.visit('https://www.amazon.in/')
        cy.reload()
    })
})

