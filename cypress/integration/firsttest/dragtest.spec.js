it('drag and drop using trigger and data transfer',()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    const dataTransfer=new DataTransfer();  
    cy.get('li[id="menu-fried-chicken"]').trigger('dragstart',{dataTransfer})
    cy.get('div[id="plate"]').trigger('drop',{dataTransfer}) 
})

it('drag and drop using drag method directly',()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    cy.get('li[id="menu-ice-cream"]').drag('ul[id="plate-items"]')
})

it('mouse down, mouseup, mouse move',()=>{
    cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
    cy.get('div[id="draggable"]').trigger('mousedown',{which:1})
    cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
    cy.get('#droppable').should('have.class',"ui-widget-header ui-droppable ui-state-highlight")
})