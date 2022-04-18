

// describe('verfiy checkbox , radio , dropDown , enabled disabled',()=>{
//     it("verify the checkbox using click()",()=>{
//         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[value="option-2"]').click().should('be.checked')
//         cy.wait(3000)
//         cy.get('input[value="option-2"]').click().should('not.be.checked')
//     })
// })
// it("verify the checkbox using check()",()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('input[value="option-2"]').check().should('be.checked')
//     cy.get('input[value="option-2"]').uncheck().should('not.be.checked')
// })
// it("verify the checkbox using check()",()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
//     cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4']).should('not.be.checked')
// })

// it("verify the radio button with click()",()=>{
//         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[value="blue"]').click().should('be.checked')
      
//     })
// it.only("verify the radio button with check()",()=>{
//         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[value="orange"]').check().should('be.checked')
//         cy.get('input[value="blue"]').should('not.be.checked')
   
// })
// it("verify the radio button with check()",()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('input[value="orange"]').check().should('be.checked')
//     cy.get('input[value="blue"]').should('not.be.checked')

// })
// it("verify the all radio button with check()",()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('#radio-buttons').children().filter('input').each(function(el){
//     cy.wrap(el).check().should('be.checked')
//     })
    

// })
// it("verify the all radio button with check()",()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('#radio-buttons').find('input').each(function(el){
//     cy.wrap(el).check().should('be.checked')
//     })

   
// it('tc 01 drop down verification',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('select[id="dropdowm-menu-1"]').select('C#').should('have.value','c#')
//     cy.get('#dropdowm-menu-2').select('Eclipse').should('have.value','eclipse')
// })

it.only('tc 01 drop down verification',()=>{
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('select[id="dropdowm-menu-1"]').select('C#').should('have.value','c#')
    let values=['sql','testng','javascript']
    cy.get('div[class="section-title"]').first().children('select').each(function(el,i){
        cy.wrap(el).select(values[i]).should('have.value',values[i])
    })
})
// it('tc 03 verify enable and disabe functionality',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('form[id="radio-buttons-selected-disabled"]').children().eq(2).should('be.disabled')
// })
// it('tc 03 verify enable and disabe functionality',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('form[id="radio-buttons-selected-disabled"]').children().eq(0).should('not.be.disabled')
// })
// it('tc 03 verify enable and disabe functionality',()=>{
//     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('form[id="radio-buttons-selected-disabled"]').children().eq(0).should('not.be.disabled')
// })

it('tc 4 verify table functionality',()=>{
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    let sum=0
    cy.get('#t01').find('tr').each(function(el,index){
        if(index !=0){
            sum=sum+Number(el.children().last().text())
        }
    }).then(()=>{
        expect(sum).to.equal(159)
    })
})

//})

