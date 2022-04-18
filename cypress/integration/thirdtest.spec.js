const cypress = require("cypress")
const { it } = require("mocha")

 describe('verify the url ', function(){
     it("verify the url in contact pages",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#CONTACT US').invoke('removeAttr','target').click()
     })
 })